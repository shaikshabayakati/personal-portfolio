import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Shaiksha",
  lastName: "Bayakati",
  displayName: "Shaiksha Bayakati",
  username: "shaiksha",
  gender: "male",
  pronouns: "he/him",
  bio: "Chronically online. Probably on the spectrum. Professionally addicted to building software.",
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
Chronically online. Probably on the spectrum. Professionally addicted to building software.

I’ve delivered software and AI solutions for government clients and SMEs, but honestly, I’d do it even if they didn’t pay me. Give me something to build, a laptop, and mild sleep deprivation and I’m entertained for weeks.
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
