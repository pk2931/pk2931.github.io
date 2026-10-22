export const experience = [
  {
    "company": "Kaliber AI",
    "role": "Machine Learning Engineer",
    "location": "San Mateo, CA",
    "dates": "Jun 2026 - Present",
    "note": "",
    "bullets": [
      "Built a 3D motion-forecasting model for objects on a conveyor belt that predicts how they move through collisions, side-rail contacts, and rebounds, forecasting 60 future positions over 2 seconds with 1.98 cm average displacement error (ADE) across 17,512 held-out samples.",
      "Designed target-conditioned visual attention that predicts trajectories without needing the partner object's state at inference time, reaching 4.28 cm ADE on visible collisions and 2.26 cm ADE on side-rail interactions.",
      "Detected contact events with~85% recall, a 2.29-frame mean timing error, and 1.84% false positives on ordinary motion, evaluated on a separate 1,140-sample set.",
      "Developed an inference-time steering method for Qwen and Gemma that shifts conversational behavior in a chosen direction without fine-tuning, with shift magnitude tracking steering strength (correlations of 0.87 on Qwen, 0.97 on Gemma). Adaptive steering hit the intended direction on 96.7% of held-out Gemma responses, and applying it to only 24 of 48 layers gave statistically comparable effects."
    ]
  },
  {
    "company": "Kaliber AI",
    "role": "Machine Learning Intern",
    "location": "San Mateo, CA",
    "dates": "May 2025 - Dec 2025",
    "note": "Full-time May-Aug 2025, part-time Sep-Dec 2025 during MS.",
    "bullets": [
      "Built the real-time voice assistant for CareMate, a home-robotics platform with customizable AI skills (physical therapist, admin assistant), using streaming Whisper-large-v3 ASR, LLMs, and TTS on a modular FastAPI/WebSocket backend. Achieved <2 s from end of speech to start of playback and stress-tested 10+ concurrent sessions with negligible latency degradation.",
      "Made conversations feel natural: Silero VAD with embedding-based speaker verification cut false triggers ~40% and suppressed background and non-target speech. Interrupt-driven TTS cancellation enabled barge-in, and partial transcripts, re-engineered audio chunking, and streaming playback cut perceived wait time 35%.",
      "Took the system to production on AWS EC2 (g5.xlarge GPU), serving LLM and TTS models on Triton with TensorRT optimization. Split STT, VAD, LLM, TTS, and orchestration into Dockerized microservices with <5 s startup and one-command reproducible deployment, and built zero-downtime GitHub/Docker Hub CI/CD that cut deployment complexity >60%.",
      "Built a multi-modal person tracking and re-identification system fusing YOLOv8 detection with FaceNet and FashionSigLIP embeddings, sustaining >90% tracking stability through occlusions and re-entries and cutting false positives ~85%. CUDA batching, async processing, and adaptive frame skipping delivered 9 FPS and a >5x performance gain."
    ]
  },
  {
    "company": "Samsung Research",
    "role": "Senior Software Engineer",
    "location": "Bengaluru, KA",
    "dates": "Jul 2022 - Aug 2024",
    "note": "Earned early promotion to Senior Software Engineer in Mar 2023.",
    "bullets": [
      "Led development of the GEBD model behind Video Moments, the on-device highlight-detection feature in Samsung's Enhance-X app, taking it from research prototype to commercial release on Galaxy S-series devices.",
      "Designed a phone-grade architecture with 3M trainable parameters and 19.5x fewer multi-adds for GEBD, improving F1 by 13.92% over baseline while running at 84 ms/frame on a 1.5 GB-RAM Android CPU. Quantized it with ONNX for a 71.4% size reduction at 0.1% F1 loss.",
      "Owned production readiness end to end: built the C++ inference layer (JNI/NDK) so app engineers could integrate without touching model internals, cut clip-extraction latency 20% with an FFmpeg pipeline and segment-extraction APIs, and gated every model update on accuracy, latency, and size KPIs.",
      "Profiled latency, memory, and thermals across Galaxy device tiers, hardened the pipeline for long videos, unusual codecs, and low-memory devices, and drove integration with app, QA, and platform teams through release.",
      "Developed SAM-GEBD, a training-free boundary detector built on the Segment Anything Model. It reached 0.724 F1@0.05 on Kinetics-GEBD, ahead of every prior unsupervised method. Also developed FlowGEBD, an optical-flow method that set the prior best unsupervised result (0.713 F1@0.05) at 6.5 ms/frame on a Galaxy S21 Ultra.",
      "Built decoding-free repetition counting directly on compressed video, using 27 MB and 7.1 GFLOPs versus 321 MB and 79.6 GFLOPs for the RGB-based state of the art (-91.5% size, -91% FLOPs).",
      "Co-invented 3 patent filings (2 granted) on context-aware video segmentation, flow-guided diffusion for video transitions, and aspect-ratio-aware frame regeneration. Built an Android prototype of Video Screenshot, showcased at Techglanz'22 and selected for iFest'23."
    ]
  },
  {
    "company": "Samsung Research",
    "role": "Software Engineer Intern",
    "location": "Bengaluru, KA",
    "dates": "Jan 2022 - Jul 2022",
    "note": "",
    "bullets": [
      "Built a 3.5 MB multimodal text-and-drawing model for emoji prediction, improving top-3 accuracy 13.95% over DigitalInk.",
      "Reformulated BSN/BMN from action proposal-confidence scoring to dense per-frame boundary regression for GEBD, trained on slowfast video features with class-weighted BCE over Gaussian-smoothed labels to handle extreme boundary sparsity.",
      "Developed self-similarity-based 3D filter pruning without post-training finetuning, achieving 12% faster inference and 10% smaller video models. Applied it to X3D in GEBD with near-zero accuracy loss for edge deployment."
    ]
  }
];
export const skills = [
  {
    "label": "Languages & Frameworks",
    "text": "Python, C/C++, Java, JavaScript, Kotlin, SQL, Go, Rust, PyTorch, TensorFlow, Hugging Face, scikit-learn, NumPy"
  },
  {
    "label": "AI & Research",
    "text": "World Models, Deep Learning, Reinforcement Learning, Transformers, Computer Vision, Video AI, Multimodal Learning, Vision-Language Models, Diffusion Models, Self-Supervised and Contrastive Learning, Time-Series and Trajectory Forecasting, Robotics and Embodied AI, LLMs (Fine-Tuning, LoRA/PEFT, RLHF/DPO, RAG, Agents, Inference-Time Steering), Representation Engineering and Interpretability, Embeddings Search, Speech and Voice AI, Model Evaluation, Feature Engineering"
  },
  {
    "label": "ML Systems",
    "text": "Distributed Training (DDP/FSDP, DeepSpeed), Model Compression (Quantization, Pruning, Knowledge Distillation), LLM Serving (vLLM, TensorRT-LLM, Speculative Decoding, KV-Cache Optimization), GPU/Edge Inference (ONNX, TensorRT, Triton, CUDA), On-Device AI (Android, JNI/NDK, TFLite, Core ML, ExecuTorch), Real-Time Systems, Streaming APIs (WebSockets, gRPC, REST)"
  },
  {
    "label": "MLOps & Cloud",
    "text": "AWS, Azure/GCP, Docker, Kubernetes, Terraform, CI/CD, FastAPI, Microservices, Data Pipelines, ML Monitoring, Git, Linux"
  }
];
