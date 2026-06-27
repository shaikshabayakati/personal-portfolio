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
