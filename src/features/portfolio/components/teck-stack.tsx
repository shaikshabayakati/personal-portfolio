import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const TECH_COLORS: Record<string, string> = {
  python: "#3776AB",
  ts: "#3178C6",
  js: "#F7DF1E",
  java: "#ED8B00",
  go: "#00ADD8",
  sql: "#CC2927",
  bash: "#4EAA25",
  react: "#61DAFB",
  nextjs2: "#000",
  tailwindcss: "#06B6D4",
  nodejs: "#5FA04E",
  express: "#000",
  fastapi: "#009688",
  postgresql: "#4169E1",
  mongodb: "#47A248",
  mysql: "#4479A1",
  redis: "#FF4438",
  pytorch: "#EE4C2C",
  tensorflow: "#FF6F00",
  "scikit-learn": "#F7931E",
  opencv: "#5C3EE8",
  langchain: "#1C3C3C",
  huggingface: "#FFD21E",
  docker: "#2496ED",
  kubernetes: "#326CE5",
  gcp: "#4285F4",
  "github-actions": "#2088FF",
  git: "#F05032",
  figma: "#F24E1E",
  postman: "#FF6C37",
  faiss: "#00599C",
  pgvector: "#336791",
  paddleocr: "#00A4FF",
  tesseract: "#E65100",
  yolov8: "#00FFA6",
  langgraph: "#FF3F00",
  rag: "#8A2BE2",
};

function TechIcon({ key: techKey, title }: { key: string; title: string }) {
  const color = TECH_COLORS[techKey] || "#888";
  const initial = title.charAt(0).toUpperCase();
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="6" fill={color} opacity="0.15" />
      <text
        x="16"
        y="16"
        textAnchor="middle"
        dominantBaseline="central"
        fill={color}
        fontSize="14"
        fontWeight="700"
        fontFamily="system-ui"
      >
        {initial}
      </text>
    </svg>
  );
}

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          "[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-zinc-950/0.75 dark:bg-white/0.75"
        )}
      >
        <ul className="flex flex-wrap gap-4 select-none">
          {TECH_STACK.map((tech) => {
            return (
              <li key={tech.key} className="flex">
                <SimpleTooltip content={tech.title}>
                  <a
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={tech.title}
                  >
                    <TechIcon key={tech.key} title={tech.title} />
                    <span className="sr-only">{tech.title}</span>
                  </a>
                </SimpleTooltip>
              </li>
            );
          })}
        </ul>
      </PanelContent>
    </Panel>
  );
}
