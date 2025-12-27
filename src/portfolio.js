/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: true, // keep as template; change to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "Qun Li | Software Engineer",
  description: "Hard work beats talents when talents fail to work hard.",
  og: {
    title: "Qun Li Portfolio",
    type: "website",
    url: "https://eriq7.github.io/QunLi/",
  },
};

// Home Page
const greeting = {
  title: "Qun Li",
  logo_name: "QunLi",
  nickname: "", // not displayed
  subTitle:
    "Full-Stack Software Engineer interested in Machine Learning and Data.",
  // PDF placed in /public. Relative path works for both localhost and GitHub Pages.
  resumeLink: "Qun_Li_Resume.pdf",

  // You asked not to disclose template/fork explicitly.
  // Keep null so any UI that checks existence can hide it.
  portfolio_repository: null,

  githubProfile: "https://github.com/Eriq7",
};

const socialMediaLinks = [
  // Keep only: GitHub, LinkedIn, Email
  {
    name: "Github",
    link: "https://github.com/Eriq7",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/qun-li-a2162526a/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Email",
    link: "mailto:Ericli6897@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Full-Stack Software Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build backend services & REST APIs with clean, testable Python.",
        "⚡ Write maintainable code with clear abstractions, logging, and error handling.",
        "⚡ Use Git, Docker, and CI workflows to ship changes safely and repeatedly.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: { color: "#D24939" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F05032" },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { color: "#217346" },
        },
      ],
    },
    {
      title: "Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ End-to-end ML pipelines for tabular prediction with feature engineering and model tuning.",
        "⚡ Model serving via FastAPI, containerized deployment, and reproducible inference.",
        "⚡ Practical experimentation workflows (cross-validation, metrics tracking, error analysis).",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "Kaggle",
          fontAwesomeClassname: "simple-icons:kaggle",
          style: { color: "#20BEFF" },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { color: "#217346" },
        },
      ],
    },
    {
      title: "Data",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Data cleaning, transformation, and analysis with Python and SQL.",
        "⚡ Building analytics queries with aggregation and window functions.",
        "⚡ Producing clear summaries and deliverables for business decision-making.",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { color: "#217346" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "University of Toronto",
      subtitle:
        "Bachelor of Science — Applied Math & Applied Statistics (Double Major)",
      logo_path: "uoft_logo.jpeg", // ✅ your file
      alt_name: "University of Toronto",
      duration: "2024 - 2029 (expected)",
      descriptions: [
        "⚡ Focus: Software Engineering, Machine Learning, and Data.",
      ],
      website_link: "https://www.utoronto.ca/",
    },
    {
      title: "Bur Oak Secondary School",
      subtitle: "High School",
      logo_path: "bur_oak_logo.jpg", // ✅ your file
      alt_name: "Bur Oak Secondary School",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Euclid Math Contest — School Champion (hosted by University of Waterloo).",
        "⚡ Honour Roll (Top 1.5% in Canada) — Euclid 2023.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Teaching & Tutoring",
  description:
    "I enjoy explaining technical ideas clearly and helping others improve through structured practice and feedback.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Math Instructor",
          company: "Kumon Learning Centre (Part-time)",
          company_url: "",
          logo_path: "kumon_logo.jpg", // ✅ your file
          duration: "Sep 2025 - Oct 2025",
          location: "Toronto, ON, Canada",
          description:
            "Tutored students individually on challenging math problems with step-by-step guidance; graded and reviewed assignments to track progress and ensure accuracy.",
          color: "#000000",
        },
        {
          title: "Math Tutor (Self-employed)",
          company: "Self",
          company_url: "",
          logo_path: "self_tutor_logo.jpg", // ✅ your file
          duration: "Dec 2024 - Apr 2025",
          location: "Toronto, ON, Canada",
          description:
            "Tutored two students weekly on Euclid contest material with customized learning strategies; helped students achieve Top 25% Distinction on the Euclid contest in Canada.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected projects across API automation testing, machine learning model development, and production-ready deployment.",
  avatar_image_path: "projects_image.svg",
};

// Keep publications empty
const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = { data: [] };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    // ⚠️ 这里我先不乱改头像文件名，避免你还没放图导致 build 直接报错
    profile_image_path: "qun_avatar.jpg",
    description:
      "I’m interested in opportunities across Software Engineering, Machine Learning, and Data. Feel free to reach out anytime — I usually respond within 24 hours. If you’re into fitness, bouldering, or the NBA, I’d also love to connect.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Toronto, Ontario, Canada",
    locality: "Toronto",
    country: "Canada",
    region: "Ontario",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com/?q=Toronto,+Ontario,+Canada",
  },
  phoneSection: {
    title: "Email",
    subtitle: "Ericli6897@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
