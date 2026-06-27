import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "lom",
    companyName: "Lom",
    positions: [
      {
        id: "lom-ai-engineer",
        title: "AI Engineer",
        employmentPeriod: {
          start: "2025",
        },
        employmentType: "Contract",
        icon: "code",
        description: `- Found automation opportunities across the business and built the tools for them.
- Built a content assistant for video editors: upload a raw podcast (1hr+), get back suggested chapter markers, B-roll cues, asset placement, and short-form Reels cuts from the same recording.
- Added title, description, and thumbnail copy generation to the same tool, plus flagging moments worth clipping for other platforms.`,
        skills: [
          "Whisper",
          "LLM",
          "Structured Output",
          "React",
          "Transcription",
          "Automation",
          "Product Development"
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "techbharat",
    companyName: "TechBharat AI CoE",
    positions: [
      {
        id: "techbharat-ai-engineer",
        title: "AI Engineer",
        employmentPeriod: {
          start: "09.2025",
          end: "02.2026",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Built a road hazard detection and reporting platform for municipal authorities — citizens submit photos, the system classifies damage and routes it to the right department.
- Added client-side image validation with TensorFlow.js so bad uploads get rejected before hitting the server.
- Trained a CNN (ResNet-inspired) to classify road damage severity and assign a repair priority score.
- Built the admin dashboard in Next.js with Leaflet.js — shows a heatmap of reported issues and lets authorities track each one from report to resolution.
- Containerized with Docker, deployed on GCP Cloud Run, CI/CD via GitHub Actions.`,
        skills: [
          "Python",
          "JavaScript",
          "TensorFlow.js",
          "CNN",
          "Next.js",
          "Leaflet.js",
          "Docker",
          "GCP Cloud Run",
          "GitHub Actions"
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "iit-madras-ds",
        title: "Indian Institute of Technology Madras",
        employmentPeriod: {
          start: "2023",
          end: "2026",
        },
        icon: "education",
        description: `- Currently studying for a Bachelor of Science (BS) in Data Science.
- CGPA: 8.5 / 10.0.
- Rigorous training in Python, Data Structures, Algorithms, Machine Learning, Deep Learning, and Statistical modeling.`,
        skills: [
          "Python",
          "Data Science",
          "Machine Learning",
          "Deep Learning",
          "Data Structures",
          "Algorithms",
          "Statistical Modeling"
        ],
        isExpanded: true,
      },
    ],
  },
];
