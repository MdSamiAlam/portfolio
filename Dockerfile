# ==============================================================================
# STAGE 1 — "builder"
# Installs dependencies and runs `npm run build`, producing static files in /app/dist.
# This stage's only job is to build; it is discarded after — none of its
# weight (node_modules, TypeScript, source files) ends up in the final image.
# ==============================================================================
FROM node:20-alpine AS builder

# All following instructions run relative to /app inside the image.
WORKDIR /app

# Copy only the manifest files first. Docker caches each layer by its inputs —
# as long as package.json/package-lock.json don't change, this layer (and the
# npm install below) is reused on rebuilds instead of re-running, which is
# the single biggest speedup for iterative Docker builds.
COPY package.json package-lock.json* ./

# `npm ci` (not `npm install`) installs exactly what's in package-lock.json,
# no version drift — the standard choice for reproducible CI/Docker builds.
RUN npm ci

# Now copy the rest of the source. This layer invalidates on every source
# change, but the npm ci layer above stays cached since it comes first.
COPY . .

# Compiles TypeScript and bundles the app; output lands in /app/dist.
RUN npm run build


# ==============================================================================
# STAGE 2 — "runner"
# A minimal Nginx image that only contains the static build output.
# Final image size is small since it never sees node_modules or source.
# ==============================================================================
FROM nginx:1.27-alpine AS runner

# Custom Nginx config (see nginx.conf) — mainly handles SPA-style routing
# so a hard refresh or direct link doesn't 404.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy only the built static files from the builder stage — this is what
# makes multi-stage builds powerful: cherry-pick artifacts across stages.
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx's default entrypoint already runs `nginx -g "daemon off;"`, so no
# CMD override is needed here — but documented explicitly for clarity:
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
