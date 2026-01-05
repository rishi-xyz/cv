
import { GitHubIcon, LinkedInIcon, XIcon } from "@/src/components/icons";

type IconType = React.ComponentType<{ className?: string }>;

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

interface ContactInfo {
  email: string;
  tel: string;
  social: SocialLink[];
}

interface Education {
  school: string;
  degree: string;
  grade: string;
  start: string;
  end: string;
}

interface WorkExperience {
  company: string;
  link: string;
  badges: string[];
  title: string;
  start: string;
  end: string;
  description: string;
}

interface ProjectLink {
  website?: string;
  code: string;
}

interface ProjectType {
  title: string;
  heading: string;
  date: string;
  techStack: string[];
  description: string;
  link: ProjectLink;
}

interface ResumeDataType {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  personalWebsiteUrl: string;
  contact: ContactInfo;
  education: Education[];
  work: WorkExperience[];
  skills: string[];
  projects: ProjectType[];
}

export const RESUME_DATA: ResumeDataType = {
  name: "Hrishikesh Rana",
  initials: "HR",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Code, Crypto, AI and Finance",
  summary:
    `I'm Hrishikesh Rana, a Computer Science undergraduate with concentration in Artificial Intelligence and Machine Learning (AIML).I love building new things from 0 to 1 to 100, I build reliable, scalable  applications with a strong focus on clean backend systems.My work often involves real-time systems, secure APIs, and event-driven features.`,
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
      grade:"8.4",
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
        `Delivered end-to-end features spanning frontend and backend, Contributed to development, integration and docs of applications and DevOps system.`,
    },{
      company: "Swago Co",
      link: "https://swago.co/",
      badges: ["Remote"],
      title: "Full-Stack and Blockchain Intern",
      start: "Aug",
      end: "Sep 2025",
      description:
        `Delivered 5+ end-to-end features spanning frontend and backend. Contributed to smart contract design, development, and integration into decentralized applications.Implemented 2 AI-driven features and maintained deployment workflows, ensuring smooth CI/CD and reliable production releases.`,
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
      heading:"Your Web3 Wallet, your blockchain journey starts here",
      date: "2025",
      techStack: [
        "TypeScript",
        "Next.js",
        "Gemini AI",
        "@solana/web3.js",
        "ethers",
        "crypto-js",
        "framer-motion",
      ],
      description: "Gama is a platform to create Ethereum and Solana wallets, Built with Military-grade encryption and decryption.",
      link: {
        website: "https://gama-wallet.vercel.app/",
        code: "https://github.com/rishi-xyz/gama",
      },
    },{
      title: "CryptAI",
      heading:"Talk to blockchain in Natural Language",
      date: "2025",
      techStack: [
        "TypeScript",
        "Next.js",
        "Gemini AI",
        "ethers",
        "crypto-js",
        "framer-motion",
        "vercel ai sdk"
      ],
      description: "CryptAI is a chatbot similar to chat gpt which helps you interact With blockchain using natural language using AI Powered by Google Gemini and Vercel AI SDK",
      link: {
        website: "https://cryptai-eight.vercel.app/",
        code: "https://github.com/rishi-xyz/cryptai",
      },
    },{
      title:"Ethereum Agent Kit",
      heading:"Ethereum Agent Kit - Autonomous Agents for Ethereum Interaction",
      date:"2025",
      techStack: [
        "TypeScript",
        "ethersjs",
        "gemini ai",
      ],
      description: "Ethereum Agent Kit enables developers to build autonomous agents that can interact with Ethereum smart contracts using natural language commands powered by Gemini AI. Check balance,send Eth and much more",
      link: {
        code: "https://github.com/rishi-xyz/Ethereum-agent-kit",
      },
    },
  ],
} as const;