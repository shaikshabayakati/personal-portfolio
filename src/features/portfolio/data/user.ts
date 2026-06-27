import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Shaiksha",
  lastName: "Bayakati",
  displayName: "Shaiksha Bayakati",
  username: "shaiksha",
  gender: "male",
  pronouns: "he/him",
  bio: "AI and software engineer. I build things end-to-end.",
  flipSentences: [
    "AI & Software Engineer",
    "IIT Madras Data Science Student",
    "Building end-to-end AI applications",
  ],
  address: "Ananthapur, Andhra Pradesh, India",
  phoneNumber: "KzkxOTA5MDA2MDYzMg==", // Base64 encoded "+919090060632"
  email: "YmF5YWthdGlzaGFpa3NoYUBnbWFpbC5jb20=", // Base64 encoded "bayakatishaiksha@gmail.com"
  website: "",
  jobTitle: "AI & Software Engineer",
  jobs: [
    {
      title: "AI Engineer",
      company: "Lom",
      website: "#",
    },
  ],
  about: `
- **AI & Software Engineer** with a passion for building end-to-end applications, from model training and OCR pipelines to deployed web applications.
- Experienced in delivering software and AI solutions for **government clients** and **small businesses**.
- Currently pursuing a **Bachelor of Science (BS) in Data Science** at the **Indian Institute of Technology Madras (IIT Madras)** with a CGPA of **8.5**.
- Skilled in **Python, TypeScript, Go, PyTorch, LangChain, Leaflet.js, and Cloud DevOps**.
`,
  avatar: "/profilepicture.png",
  ogImage: "/profilepicture.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "Shaiksha",
    "Shaiksha Bayakati",
    "bayakatishaiksha",
    "AI Engineer",
    "AI Consultant",
    "IIT Madras",
  ],
  dateCreated: "2026-06-27", // YYYY-MM-DD
};
