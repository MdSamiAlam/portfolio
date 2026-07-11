// ============================================================================
// SOURCE OF TRUTH — populated directly from MdSamiAlam_DataScienceIntern.pdf
// Every section of the site should read from this file. No invented content.
// ============================================================================

export const personal = {
  name: "Md Sami Alam",
  initials: "MSA",
  role: "Data Science, AI & Machine Learning",
  tagline:
    "Computer Science undergraduate specializing in Data Science, Machine Learning, Deep Learning, and Generative AI, with hands-on experience building end-to-end AI-powered applications.",
  objective:
    "Computer Science undergraduate seeking a Data Science Internship with focus on machine learning model development, exploratory data analysis, computer vision, and healthcare AI. Skilled in Python, TensorFlow, OpenCV, Convolutional Neural Networks (CNN), Generative AI, and data visualization. Hands-on experience building end-to-end machine learning pipelines, medical imaging workflows, and AI-powered applications.",
  location: "Patna, Bihar, India",
  email: "aryansami480@gmail.com",
  phone: "+91-6200561599",
  socials: {
    github: "https://github.com/MdSamiAlam",
    linkedin: "https://linkedin.com/in/mdsamialam",
  },
  photo: null, // no photo supplied in resume — placeholder monogram used until provided
} as const;

export type SkillCategory =
  | "Programming"
  | "Machine Learning & AI"
  | "Deep Learning"
  | "Data Science & Analytics"
  | "Web & Tools";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Programming
  { name: "Python", category: "Programming" },
  { name: "SQL", category: "Programming" },
  { name: "C", category: "Programming" },
  { name: "C++", category: "Programming" },
  { name: "Java", category: "Programming" },

  // ML & AI frameworks
  { name: "TensorFlow", category: "Machine Learning & AI" },
  { name: "PyTorch", category: "Machine Learning & AI" },
  { name: "Scikit-learn", category: "Machine Learning & AI" },
  { name: "OpenCV", category: "Machine Learning & AI" },

  // Deep learning / AI concepts
  { name: "Convolutional Neural Networks (CNN)", category: "Deep Learning" },
  { name: "Recurrent Neural Networks (RNN)", category: "Deep Learning" },
  { name: "Generative Adversarial Networks (GANs)", category: "Deep Learning" },
  { name: "Large Language Models (LLMs)", category: "Deep Learning" },
  { name: "Visual Language Models (VLMs)", category: "Deep Learning" },
  { name: "YOLOv8", category: "Deep Learning" },
  { name: "Multimodal AI", category: "Deep Learning" },
  { name: "Generative AI", category: "Deep Learning" },
  { name: "Prompt Engineering", category: "Deep Learning" },
  { name: "Natural Language Processing (NLP)", category: "Deep Learning" },

  // Data science & analytics
  { name: "Exploratory Data Analysis (EDA)", category: "Data Science & Analytics" },
  { name: "Feature Engineering", category: "Data Science & Analytics" },
  { name: "Hyperparameter Optimization", category: "Data Science & Analytics" },
  { name: "Statistical Modeling", category: "Data Science & Analytics" },
  { name: "Data Cleaning", category: "Data Science & Analytics" },
  { name: "Data Visualization", category: "Data Science & Analytics" },
  { name: "Business Intelligence", category: "Data Science & Analytics" },
  { name: "Power BI", category: "Data Science & Analytics" },
  { name: "DAX", category: "Data Science & Analytics" },
  { name: "Power Query", category: "Data Science & Analytics" },
  { name: "Pandas", category: "Data Science & Analytics" },
  { name: "NumPy", category: "Data Science & Analytics" },
  { name: "Matplotlib", category: "Data Science & Analytics" },
  { name: "Seaborn", category: "Data Science & Analytics" },
  { name: "Plotly", category: "Data Science & Analytics" },
  { name: "Streamlit", category: "Data Science & Analytics" },

  // Web & tools
  { name: "REST APIs", category: "Web & Tools" },
  { name: "HTML", category: "Web & Tools" },
  { name: "CSS", category: "Web & Tools" },
  { name: "Microsoft Excel", category: "Web & Tools" },
];

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  stack: string[];
  bullets: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "dermavision-ai",
    title: "DermaVision AI",
    tagline: "Healthcare AI — Skin Disease Detection System",
    stack: ["Python", "TensorFlow", "OpenCV", "Scikit-learn", "CNN", "Computer Vision"],
    bullets: [
      "Developed a CNN-based deep learning pipeline for automated classification of skin diseases from unstructured medical image data, supporting AI-assisted early diagnosis.",
      "Built an end-to-end ML data pipeline covering image preprocessing, normalization, augmentation, and feature engineering to improve performance on imbalanced medical imaging datasets.",
      "Performed model training, cross-validation, and hyperparameter optimization using TensorFlow; evaluated performance using accuracy, precision, recall, and F1-score.",
    ],
    github: "https://github.com/MdSamiAlam/Dermavision_Ai",
    featured: true,
  },
  {
    slug: "life-expectancy-analysis",
    title: "Life Expectancy Analysis",
    tagline: "Exploratory Data Analysis & Visualization Dashboard",
    stack: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Power BI"],
    bullets: [
      "Conducted in-depth EDA on a structured WHO health dataset (2,900+ records, 22 features) covering time-series health trends across 193 countries from 2000–2015.",
      "Applied feature engineering, outlier treatment, missing-value handling, and regression modeling to identify GDP, immunization rates, and schooling as top predictors.",
      "Deployed an interactive Streamlit dashboard with dynamic sidebar filtering and real-time drill-down analytics.",
    ],
    github: "https://github.com/MdSamiAlam/life_expectancy_analysis",
    demo: "https://life-expectancy-analysis.streamlit.app",
    featured: true,
  },
  {
    slug: "glowai",
    title: "GlowAI",
    tagline: "Multimodal Generative AI Application — Team Project",
    stack: ["Gemini 1.5 Flash API", "Web Speech API", "Prompt Engineering", "Multimodal LLM"],
    bullets: [
      "Collaborated in a team to build a multimodal AI application integrating an LLM with image analysis to deliver AI-powered skincare guidance via text, voice, and image interaction.",
      "Applied prompt engineering and instruction-based techniques to structure safe, accurate model responses.",
      "Integrated the Gemini 1.5 Flash API for multimodal inference with fallback model handling and real-time response processing.",
    ],
    demo: "https://ai-skin-analyzer-0mlz.onrender.com",
    featured: true,
  },
  {
    slug: "india-health-insights",
    title: "India Health Insights",
    tagline: "Healthcare Business Intelligence Dashboard — NFHS-5",
    stack: ["Power BI", "DAX", "Power Query", "Data Visualization"],
    bullets: [
      "Developed an interactive Power BI dashboard on India's National Family Health Survey (NFHS-5) dataset with KPI cards, maps, treemaps, and slicers.",
      "Performed data cleaning, preprocessing, and transformation using Power Query, and authored DAX measures for dynamic comparative analytics.",
      "Enabled Rural vs Urban vs Total filtering to surface regional disparities in anaemia, vaccination, sanitation, and child mortality.",
    ],
  },
];

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export const certifications: Certification[] = [
  { name: "Generative AI", issuer: "NASSCOM", year: "2026" },
  { name: "Programming Using C++", issuer: "Infosys Springboard", year: "2025" },
  { name: "Python Programming (Basic to Advanced)", issuer: "CSE Pathshala", year: "2025" },
  { name: "Full Stack Web Development", issuer: "GeeksforGeeks", year: "2025" },
];

export interface Highlight {
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  detail: string;
}

// Every number here traces back to a specific line in the resume — no
// invented metrics.
export const highlights: Highlight[] = [
  {
    value: 8.36,
    decimals: 2,
    label: "CGPA",
    detail: "Maintained across 4 semesters at LPU",
  },
  {
    value: 2900,
    suffix: "+",
    label: "Health records analyzed",
    detail: "WHO life-expectancy dataset, 2000–2015",
  },
  {
    value: 193,
    label: "Countries covered",
    detail: "In the life-expectancy EDA dashboard",
  },
  {
    value: 4,
    label: "AI/ML projects shipped",
    detail: "End-to-end, from data to deployed app",
  },
];

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Lovely Professional University",
    period: "2024 – 2028",
    detail: "Current CGPA: 8.36",
  },
  {
    degree: "Intermediate — Class XII",
    institution: "DAV Public School",
    period: "2021 – 2023",
    detail: "85.6%",
  },
  {
    degree: "Matriculation — Class X",
    institution: "Nath Public School",
    period: "2020 – 2021",
    detail: "78%",
  },
];
