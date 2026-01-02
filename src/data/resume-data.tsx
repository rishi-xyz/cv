
import { GitHubIcon, LinkedInIcon, XIcon } from "@/src/components/icons";

export const RESUME_DATA = {
  name: "Hrishikesh Rana",
  initials: "HR",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Code, Crypto, AI and Finance",
  summary:
    "I love building new things from 0 to 1 to 100. Full Stack Developer and DevOps Engineer focused on learning. ",
  personalWebsiteUrl: "https://rishixyz.com",
  contact: {
    email: "itsranahrishikesh@gmail.com",
    tel: "+9106283495511",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/rishi-xyz",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hrishikesh-rana/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/HrishikeshRana4",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SEA College of Engineering and Technology",
      degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning ",
      start: "2023",
      end: "2027",
    },
  ],
  work: [
    {
      company: "Monk CI",
      link: "https://monkci.com/",
      badges: ["Hybrid"],
      title: "SDE Intern",
      start: "Oct",
      end: "Dec 2025",
      description:
        `Delivered end-to-end features spanning frontend and backend, Contributed to System design, development, integration and docs of applications and DevOps system.`,
    },{
      company: "Swago Co",
      link: "https://swago.co/",
      badges: ["Remote"],
      title: "Full-Stack and Blockchain Intern",
      start: "Aug",
      end: "Sep 2025",
      description:
        `Delivered 5+ end-to-end features spanning frontend and backend, ensuring seamless user experiences and robust API integrations. Contributed to smart contract design, development, and integration into decentralized applications.Implemented 2 AI-driven features and maintained deployment workflows, ensuring smooth CI/CD and reliable production releases.`,
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "WebRTC",
    "Go",
    "Solidity",
  ],
  projects: [
    {
      title: "Gama",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "Your Web3 Wallet, your blockchain journey starts here",
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;