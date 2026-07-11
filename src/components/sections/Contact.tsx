import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { personal } from "@/data/resume";
import SocialIcons from "@/components/ui/SocialIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMPTY: FormState = { name: "", email: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please enter your name";
    if (!form.email.trim()) next.email = "Please enter your email";
    else if (!EMAIL_RE.test(form.email)) next.email = "That email doesn't look right";
    if (!form.message.trim()) next.message = "Say a little about why you're reaching out";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    // No backend here — this opens the visitor's own email client with the
    // message pre-filled, addressed to you. Swap this for a Formspree /
    // EmailJS / serverless-function POST if you want in-page delivery
    // without leaving the site.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm(EMPTY);
    setTimeout(() => setSent(false), 4000);
  }

  const inputClass =
    "w-full rounded-card border border-border bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors duration-300 focus:border-electric-2/60";

  return (
    <section id="contact" className="relative px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="font-mono text-xs tracking-[0.35em] text-ink-faint uppercase"
        >
          Contact
        </motion.p>

        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="mt-4 max-w-xl text-3xl font-display font-semibold leading-tight text-ink md:text-4xl"
        >
          Let's <span className="text-gradient">build something</span>
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* left: direct info */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={fadeUp}
            className="md:col-span-2"
          >
            <p className="text-sm leading-relaxed text-ink-dim">
              Open to Data Science, ML, and AI internship opportunities. The
              fastest way to reach me is email — happy to share more about
              any project above.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-3 text-sm text-ink-dim transition-colors hover:text-ink"
              >
                <span className="glass flex h-9 w-9 items-center justify-center rounded-full text-electric-2">
                  <FiMail size={15} />
                </span>
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 text-sm text-ink-dim transition-colors hover:text-ink"
              >
                <span className="glass flex h-9 w-9 items-center justify-center rounded-full text-electric-2">
                  <FiPhone size={15} />
                </span>
                {personal.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-ink-dim">
                <span className="glass flex h-9 w-9 items-center justify-center rounded-full text-electric-2">
                  <FiMapPin size={15} />
                </span>
                {personal.location}
              </div>
            </div>

            <SocialIcons className="mt-8 flex items-center gap-3" />
          </motion.div>

          {/* right: form */}
          <motion.form
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            noValidate
            className="glass glow-border flex flex-col gap-4 rounded-card p-6 md:col-span-3 md:p-8"
          >
            <div>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
              />
              {errors.name && <p className="mt-1.5 text-xs text-warning">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className={inputClass}
              />
              {errors.email && <p className="mt-1.5 text-xs text-warning">{errors.email}</p>}
            </div>

            <div>
              <textarea
                placeholder="What are you reaching out about?"
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
              {errors.message && <p className="mt-1.5 text-xs text-warning">{errors.message}</p>}
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 flex items-center justify-center gap-2 rounded-pill bg-ink px-6 py-3.5 text-sm font-medium text-void transition-colors hover:bg-white"
            >
              <FiSend size={15} />
              Send message
            </motion.button>

            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-xs text-success"
              >
                Opening your email client — thanks for reaching out!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
