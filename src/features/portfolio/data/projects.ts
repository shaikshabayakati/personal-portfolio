import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "form-auto-fill",
    title: "Citizen Service Center Form Auto-Fill (POC)",
    period: {
      start: "2025",
    },
    link: "#",
    skills: [
      "PaddleOCR",
      "OpenCV",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Computer Vision",
      "OCR"
    ],
    description: `Built for Vizag Municipal Government: scan a handwritten or printed form, and it auto-fills the corresponding fields on the employee's workstation.
- PaddleOCR + OpenCV pipeline extracts the data and maps it to the digital form schema.
- Served via FastAPI with a Next.js operator UI.
- In active discussion with Vizag Municipal Corporation for production deployment.`,
    isExpanded: true,
  },
  {
    id: "sdr-agent",
    title: "SDR Agent",
    period: {
      start: "2025",
    },
    link: "#",
    skills: [
      "LangGraph",
      "OpenAI",
      "Gemini",
      "PostgreSQL",
      "React",
      "FastAPI",
      "GenAI",
      "Multi-Agent"
    ],
    description: `Outbound sales agent built on LangGraph: finds leads from websites, researches the company, writes a personalised email, schedules follow-ups, and tracks the whole conversation — no human in the loop.
- Each sub-agent (lead finder, researcher, drafter, scheduler) runs independently.
- Shares state dynamically through LangGraph's state graph.`,
    isExpanded: true,
  },
  {
    id: "support-copilot",
    title: "AI Customer Support Copilot",
    period: {
      start: "2025",
    },
    link: "#",
    skills: [
      "RAG",
      "Vector DB",
      "LangChain",
      "FastAPI",
      "OpenAI",
      "Gemini",
      "Vector Search"
    ],
    description: `Support chatbot that reads company docs into a vector DB and answers customer questions via RAG.
- Low-confidence answers get flagged for a human agent instead of guessing.
- Resolved tickets get fed back into the knowledge base over time, so the answers improve as it's used.`,
    isExpanded: true,
  },
];
