import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const TECH_LOGOS: Record<string, string> = {
  python: "/logos/1-Languages/python.png",
  ts: "/logos/1-Languages/typescript.png",
  js: "/logos/1-Languages/javascript.png",
  java: "/logos/1-Languages/java.png",
  go: "/logos/1-Languages/go.png",
  sql: "/logos/1-Languages/sql.png",
  bash: "/logos/1-Languages/bash.png",
  react: "/logos/2-Frontend/react.png",
  nextjs: "/logos/2-Frontend/nextjs.png",
  tailwindcss: "/logos/2-Frontend/tailwindcss.png",
  html5: "/logos/2-Frontend/html5.png",
  css3: "/logos/2-Frontend/css3.png",
  nodejs: "/logos/3-Backend/nodejs.png",
  express: "/logos/3-Backend/express.png",
  fastapi: "/logos/3-Backend/fastapi.png",
  graphql: "/logos/3-Backend/graphql.png",
  grpc: "/logos/3-Backend/grpc.png",
  microservices: "/logos/3-Backend/microservices.png",
  redis: "/logos/3-Backend/redis.png",
  "rest-api": "/logos/3-Backend/rest-api.png",
  websockets: "/logos/3-Backend/websockets.png",
  postgresql: "/logos/4-Databases/postgresql.png",
  mongodb: "/logos/4-Databases/mongodb.png",
  mysql: "/logos/4-Databases/mysql.png",
  faiss: "/logos/4-Databases/faiss.png",
  pgvector: "/logos/4-Databases/pgvector.png",
  pytorch: "/logos/5-AI-ML/pytorch.png",
  tensorflow: "/logos/5-AI-ML/tensorflow.png",
  "scikit-learn": "/logos/5-AI-ML/scikit-learn.png",
  "cnn-rnn": "/logos/5-AI-ML/cnn-rnn.png",
  transformers: "/logos/5-AI-ML/transformers.png",
  opencv: "/logos/6-Computer-Vision/opencv.png",
  paddleocr: "/logos/6-Computer-Vision/paddleocr.png",
  tesseract: "/logos/6-Computer-Vision/tesseract.png",
  yolov8: "/logos/6-Computer-Vision/yolov8.png",
  leaflet: "/logos/6-Computer-Vision/leaflet.png",
  langchain: "/logos/7-GenAI/langchain.png",
  langgraph: "/logos/7-GenAI/langgraph.png",
  rag: "/logos/7-GenAI/rag.png",
  huggingface: "/logos/7-GenAI/huggingface.png",
  openai: "/logos/7-GenAI/openai.png",
  gemini: "/logos/7-GenAI/gemini.png",
  "prompt-engineering": "/logos/7-GenAI/prompt-engineering.png",
  gcp: "/logos/8-Cloud-DevOps/gcp.png",
  docker: "/logos/8-Cloud-DevOps/docker.png",
  kubernetes: "/logos/8-Cloud-DevOps/kubernetes.png",
  "github-actions": "/logos/8-Cloud-DevOps/github-actions.png",
};

function TechIcon({ techKey, title }: { techKey: string; title: string }) {
  const logoSrc = TECH_LOGOS[techKey];
  if (!logoSrc) {
    // Fallback if logo mapping is missing
    const initial = title.charAt(0).toUpperCase();
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" className="size-8 select-none">
        <rect width="32" height="32" rx="6" fill="#888" opacity="0.15" />
        <text x="16" y="16" textAnchor="middle" dominantBaseline="central" fill="#888" fontSize="14" fontWeight="700" fontFamily="system-ui">
          {initial}
        </text>
      </svg>
    );
  }

  return (
    <img
      src={logoSrc}
      alt={title}
      width={32}
      height={32}
      className="size-8 object-contain select-none"
    />
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
                    <TechIcon techKey={tech.key} title={tech.title} />
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
