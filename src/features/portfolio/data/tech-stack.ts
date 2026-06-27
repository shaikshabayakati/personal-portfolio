import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // Languages
  { key: "python", title: "Python", href: "https://www.python.org/", categories: ["Language"] },
  { key: "ts", title: "TypeScript", href: "https://www.typescriptlang.org/", categories: ["Language"] },
  { key: "js", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", categories: ["Language"] },
  { key: "java", title: "Java", href: "https://www.java.com/", categories: ["Language"] },
  { key: "go", title: "Go", href: "https://go.dev/", categories: ["Language"] },
  { key: "sql", title: "SQL", href: "https://en.wikipedia.org/wiki/SQL", categories: ["Language"] },
  { key: "bash", title: "Bash", href: "https://www.gnu.org/software/bash/", categories: ["Language"] },

  // Frontend
  { key: "react", title: "React", href: "https://react.dev/", categories: ["Library", "UI Library"] },
  { key: "nextjs", title: "Next.js", href: "https://nextjs.org/", categories: ["Framework"] },
  { key: "tailwindcss", title: "Tailwind CSS", href: "https://tailwindcss.com/", categories: ["Framework"] },
  { key: "html5", title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML", categories: ["Language"] },
  { key: "css3", title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", categories: ["Language"] },

  // Backend
  { key: "nodejs", title: "Node.js", href: "https://nodejs.org/", categories: ["Runtime Environment"] },
  { key: "express", title: "Express", href: "https://expressjs.com/", categories: ["Framework"] },
  { key: "fastapi", title: "FastAPI", href: "https://fastapi.tiangolo.com/", categories: ["Framework"] },
  { key: "graphql", title: "GraphQL", href: "https://graphql.org/", categories: ["Library"] },
  { key: "grpc", title: "gRPC", href: "https://grpc.io/", categories: ["Library"] },
  { key: "microservices", title: "Microservices", href: "https://microservices.io/", categories: ["Architecture"] },
  { key: "redis", title: "Redis", href: "https://redis.io/", categories: ["Database"] },
  { key: "rest-api", title: "REST API", href: "https://wikipedia.org/wiki/REST", categories: ["Architecture"] },
  { key: "websockets", title: "WebSockets", href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", categories: ["Library"] },

  // Databases
  { key: "postgresql", title: "PostgreSQL", href: "https://www.postgresql.org/", categories: ["Database"] },
  { key: "mongodb", title: "MongoDB", href: "https://www.mongodb.com/", categories: ["Database"] },
  { key: "mysql", title: "MySQL", href: "https://www.mysql.com/", categories: ["Database"] },
  { key: "faiss", title: "FAISS", href: "https://github.com/facebookresearch/faiss", categories: ["Database", "AI / ML"] },
  { key: "pgvector", title: "pgvector", href: "https://github.com/pgvector/pgvector", categories: ["Database", "AI / ML"] },

  // AI & ML
  { key: "pytorch", title: "PyTorch", href: "https://pytorch.org/", categories: ["Library", "AI / ML"] },
  { key: "tensorflow", title: "TensorFlow", href: "https://www.tensorflow.org/", categories: ["Library", "AI / ML"] },
  { key: "scikit-learn", title: "scikit-learn", href: "https://scikit-learn.org/", categories: ["Library", "AI / ML"] },
  { key: "cnn-rnn", title: "CNN / RNN", href: "https://wikipedia.org/wiki/Convolutional_neural_network", categories: ["AI / ML"] },
  { key: "transformers", title: "Transformers", href: "https://huggingface.co/docs/transformers/index", categories: ["AI / ML"] },

  // CV & OCR
  { key: "opencv", title: "OpenCV", href: "https://opencv.org/", categories: ["Library", "CV & OCR"] },
  { key: "paddleocr", title: "PaddleOCR", href: "https://github.com/PaddlePaddle/PaddleOCR", categories: ["Library", "CV & OCR"] },
  { key: "tesseract", title: "Tesseract", href: "https://github.com/tesseract-ocr/tesseract", categories: ["Library", "CV & OCR"] },
  { key: "yolov8", title: "YOLOv8", href: "https://github.com/ultralytics/ultralytics", categories: ["Library", "CV & OCR"] },
  { key: "leaflet", title: "Leaflet.js", href: "https://leafletjs.com/", categories: ["Library", "CV & OCR"] },

  // GenAI
  { key: "langchain", title: "LangChain", href: "https://www.langchain.com/", categories: ["Library", "GenAI"] },
  { key: "langgraph", title: "LangGraph", href: "https://langchain-ai.github.io/langgraph/", categories: ["Library", "GenAI"] },
  { key: "rag", title: "RAG", href: "https://wikipedia.org/wiki/Retrieval-augmented_generation", categories: ["GenAI"] },
  { key: "huggingface", title: "Hugging Face", href: "https://huggingface.co/", categories: ["Library", "GenAI"] },
  { key: "openai", title: "OpenAI API", href: "https://openai.com/", categories: ["GenAI"] },
  { key: "gemini", title: "Gemini API", href: "https://ai.google.dev/", categories: ["GenAI"] },
  { key: "prompt-engineering", title: "Prompt Engineering", href: "https://wikipedia.org/wiki/Prompt_engineering", categories: ["GenAI"] },

  // Cloud & DevOps
  { key: "gcp", title: "GCP", href: "https://cloud.google.com/", categories: ["Cloud / DevOps"] },
  { key: "docker", title: "Docker", href: "https://www.docker.com/", categories: ["Cloud / DevOps"] },
  { key: "kubernetes", title: "Kubernetes", href: "https://kubernetes.io/", categories: ["Cloud / DevOps"] },
  { key: "github-actions", title: "GitHub Actions", href: "https://github.com/features/actions", categories: ["Cloud / DevOps"] },
];
