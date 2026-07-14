"use client";

import { useEffect, useState } from "react";

const papers = [
  {
    venue: "ICASSP 2024",
    title: "SAM-GEBD: Zero-Cost Approach for Generic Event Boundary Detection",
    summary: "Repurposed the Segment Anything Model for taxonomy-free video boundary detection, reaching state-of-the-art results without task-specific training.",
    result: "Zero-cost approach for GEBD",
    href: "https://ieeexplore.ieee.org/abstract/document/10447789",
  },
  {
    venue: "ICASSP 2023",
    title: "Self-Similarity is All You Need for Fast and Lightweight GEBD",
    summary: "Designed a 3M-parameter model that improved performance on Kinetics-GEBD while sharply reducing the computation needed for video understanding.",
    result: "19.5x less compute",
    href: "https://ieeexplore.ieee.org/abstract/document/10096176",
  },
  {
    venue: "WACV 2024",
    title: "What's in the Flow? Exploiting Temporal Motion Cues for Unsupervised GEBD",
    summary: "Created FlowGEBD, a motion-based non-parametric method that uses optical flow to outperform unsupervised neural baselines.",
    result: "31.7% absolute gain",
    href: "https://openaccess.thecvf.com/content/WACV2024/html/Gothe_Whats_in_the_Flow_Exploiting_Temporal_Motion_Cues_for_Unsupervised_WACV_2024_paper.html",
  },
  {
    venue: "CVIP 2022",
    title: "SAMNet: Semantic Aware Multimodal Network for Emoji Drawing Classification",
    summary: "Built a multimodal network combining text and drawing inputs for emoji prediction, optimized into a compact model for edge devices.",
    result: "13.95% top-3 lift",
    href: "https://link.springer.com/chapter/10.1007/978-3-031-31417-9_10",
  },
  {
    venue: "ICASSP 2023",
    title: "Repetition Counting from Compressed Videos Using Sparse Residual Similarity",
    summary: "Introduced a decoding-free repetition-counting approach that operates directly on compressed-video signals while retaining competitive accuracy.",
    result: "91.5% smaller model",
    href: "https://ieeexplore.ieee.org/abstract/document/10094742",
  },
];

const patents = [
  {
    number: "US 12,548,599",
    title: "Generating contextual transition effects in videos",
    description: "Detects a change between video events, inserts masked frames at the transition point, identifies transition components, and models their pixel motion to generate context-aware effects between scenes.",
    detail: "The system combines event understanding with motion-aware frame generation to produce transitions that reflect the content of the video rather than applying a fixed visual template.",
    href: "https://patents.google.com/patent/US20240321318A1/en",
  },
  {
    number: "US 12,277,768",
    title: "Method and electronic device for generating a segment of a video",
    description: "Identifies video context and user interaction, analyzes changes in subjects, environments, actions, and objects, then uses those changes as temporal boundaries for meaningful video segments.",
    detail: "The resulting segments can support smart screenshots, story creation, sharing suggestions, and context-aware cuts inside video-editing experiences.",
    href: "https://patents.google.com/patent/US20230368534A1/en",
  },
  {
    number: "US 2025/0233960 A1",
    title: "Adaptive video display management based on region-localized frame regeneration",
    description: "Recognizes primary and secondary events inside video frames, models their semantic relationship, and predicts new positions for those events when the display aspect ratio changes.",
    detail: "It regenerates frames for a target display while preserving the important visual relationships between people, objects, and events across different screen formats.",
    href: "https://patents.google.com/patent/US20250233960A1/en",
  },
];

const experiences = [
  {
    company: "Kaliber Labs Inc.",
    location: "San Mateo, California",
    period: "2025 TO PRESENT",
    intro: "Production machine learning for conversational AI, home robotics, GPU serving, and multi-modal perception.",
    roles: [
      {
        title: "Machine Learning Engineer",
        date: "June 2026 to present",
        bullets: [
          "Continuing to build production AI systems across real-time inference, multimodal perception, and robotics.",
        ],
      },
      {
        title: "Machine Learning Engineer",
        date: "September 2025 to December 2025",
        bullets: [
          "Deployed a conversational AI system on AWS EC2 g5.xlarge using Docker Compose and the NVIDIA Container Toolkit for GPU-accelerated production inference.",
          "Containerized speech-to-text, voice activity detection, language model, text-to-speech, and orchestration modules as isolated microservices with reproducible one-command deployment.",
          "Built zero-downtime CI/CD pipelines with GitHub and Docker Hub, reducing deployment complexity by more than 60%.",
          "Delivered a browser-accessible interface through Nginx and reverse proxying for end-to-end testing of the conversational stack.",
          "Built a real-time person-tracking system using YOLOv8, FaceNet, and FashionSigLIP, achieving more than 90% tracking stability through occlusions and re-entry.",
          "Designed facial and fashion embedding fusion that reduced false-positive identity matches by approximately 85%.",
          "Optimized CUDA inference with batching, asynchronous processing, and adaptive frame skipping to reach under 12 ms latency and a performance gain greater than 5x.",
        ],
      },
      {
        title: "Machine Learning Engineer",
        date: "May 2025 to August 2025",
        bullets: [
          "Developed a real-time medical voice assistant for CareMate, a home robotics platform with configurable AI-powered skills.",
          "Built a modular FastAPI backend with WebSocket streaming and under 2-second latency from the end of speech to the start of audio playback.",
          "Integrated Silero VAD and speaker verification to reduce false triggers and activate the pipeline only for the intended speaker.",
          "Optimized Whisper-large-v3 for streaming transcription with partial text displayed while users speak.",
          "Refactored audio chunking, buffering, and TTS streaming to reduce perceived waiting time by 35%.",
          "Added interrupt-driven cancellation so new speech immediately stops ongoing TTS playback and restarts the conversation pipeline.",
          "Deployed LLM and TTS pipelines on NVIDIA Triton with TensorRT-optimized models, dynamic loading, Docker, and GPU acceleration.",
          "Stress-tested the full system across local and remote GPU environments with support for more than 10 concurrent sessions.",
        ],
      },
    ],
  },
  {
    company: "Samsung R&D Institute India",
    location: "Bengaluru, India",
    period: "2022 TO 2024",
    intro: "On-device video intelligence, lightweight neural networks, applied research, patents, and product delivery for Samsung Galaxy experiences.",
    roles: [
      {
        title: "Senior Software Engineer",
        date: "March 2024 to August 2024",
        bullets: [
          "Led implementation of a state-of-the-art model for Generic Event Boundary Detection, now a core component of Video Moments in the Samsung Enhance-X app.",
          "Enabled private, real-time, on-device video processing that helps users identify and manage meaningful moments in long videos.",
          "Extended CLIP with video-focused APIs and optical-flow features, retraining on 54,000 boundary frames from 18,000 videos.",
          "Improved video-captioning accuracy by 20% for high-motion scenes by combining spatial context with temporal pixel movement.",
        ],
      },
      {
        title: "Software Engineer",
        date: "July 2022 to February 2024",
        bullets: [
          "Developed a training-free GEBD method using the Segment Anything Model, published at ICASSP 2024.",
          "Published research at ICASSP, WACV, and CVIP across video understanding, compressed-video analysis, and multimodal learning.",
          "Contributed to three patents covering video segmentation, contextual transitions, and adaptive video display management.",
          "Designed a lightweight GEBD architecture with state-of-the-art comparable results for resource-constrained deployment.",
          "Quantized the model with ONNX, reducing model size by 71.4% with minimal impact on key performance indicators.",
          "Ported the quantized model on-device and optimized frame processing with FFmpeg, improving end-to-end latency by 20%.",
          "Built a proof-of-concept Android application for real-time Video Screenshot extraction, showcased at Techglanz 2022 and iFest 2023.",
        ],
      },
      {
        title: "Software Engineer Intern",
        date: "January 2022 to July 2022",
        bullets: [
          "Retrained BSN and BMN models for the GEBD pipeline, cutting computational complexity by 80%.",
          "Developed self-similarity-based 3D filter pruning for CNN compression without post-training fine-tuning.",
          "Applied pruning to the X3D backbone, achieving 12% faster inference and 10% model-size reduction with near-zero accuracy loss.",
          "Built CI-ready unit and integration test suites to validate model behavior across deployment platforms.",
        ],
      },
    ],
  },
  {
    company: "Tolstoy",
    location: "San Francisco Bay Area",
    period: "MAY TO AUGUST 2020",
    intro: "Early applied machine learning work spanning language, OCR, APIs, and interactive model deployment.",
    roles: [
      {
        title: "Machine Learning Engineer",
        date: "May 2020 to August 2020",
        bullets: [
          "Designed Bitesize, a multi-class model for accurate text-message classification.",
          "Developed an OCR and named-entity-recognition pipeline for the Harvard Specimen Information Collector.",
          "Deployed both models as interactive Streamlit applications for direct user testing.",
          "Built a scalable Flask API for integrating the Bitesize classification model into downstream products.",
        ],
      },
    ],
  },
];

const companyHighlights: Record<string, string[]> = {
  "Kaliber Labs Inc.": [
    "Deployed a GPU-accelerated conversational AI platform on AWS EC2 using Dockerized speech, language-model, TTS, and orchestration services.",
    "Built zero-downtime CI/CD pipelines with GitHub and Docker Hub, reducing deployment complexity by more than 60%.",
    "Developed a YOLOv8, FaceNet, and FashionSigLIP tracking system with more than 90% stability and approximately 85% fewer false-positive identity matches.",
    "Optimized CUDA inference with batching and asynchronous processing to reach under 12 ms latency and a performance gain greater than 5x.",
    "Developed CareMate's real-time medical voice assistant with a modular FastAPI and WebSocket stack and under 2-second response latency.",
    "Added speaker-verified VAD, streaming Whisper transcription, interruptible TTS, and dynamic buffering to create a more natural conversation flow.",
    "Deployed TensorRT-optimized LLM and TTS pipelines on NVIDIA Triton and validated more than 10 concurrent sessions.",
  ],
  "Samsung R&D Institute India": [
    "Led implementation of Generic Event Boundary Detection for Video Moments in the Samsung Enhance-X app, running privately and in real time on-device.",
    "Extended CLIP with optical-flow features and retrained on 54,000 boundary frames, improving captioning accuracy by 20% for high-motion scenes.",
    "Developed a training-free GEBD method using the Segment Anything Model, published at ICASSP 2024.",
    "Published research at ICASSP, WACV, and CVIP and contributed to three patents in video intelligence.",
    "Designed a lightweight GEBD architecture and reduced model size by 71.4% through ONNX quantization with minimal KPI impact.",
    "Ported the quantized model on-device and optimized FFmpeg frame processing, improving end-to-end latency by 20%.",
    "Built an Android proof of concept for real-time Video Screenshot extraction, showcased at Techglanz 2022 and iFest 2023.",
    "Reduced GEBD pipeline complexity by 80% and developed 3D filter pruning that delivered 12% faster inference with near-zero accuracy loss.",
  ],
  Tolstoy: [
    "Designed Bitesize, a multi-class model for accurate text-message classification.",
    "Developed an OCR and named-entity-recognition pipeline for the Harvard Specimen Information Collector.",
    "Deployed both models as interactive Streamlit applications for direct user testing.",
    "Built a scalable Flask API for integrating the Bitesize classification model into downstream products.",
  ],
};

const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "Java", "JavaScript", "Kotlin", "C / C++", "SQL"],
  },
  {
    category: "ML + Computer Vision",
    skills: ["PyTorch", "TensorFlow", "ONNX", "Keras", "Detectron2", "MMDetection", "YOLO", "Scikit-learn", "OpenCV", "TensorRT", "CLIP", "SAM", "FaceNet", "FashionSigLIP"],
  },
  {
    category: "NLP + Data",
    skills: ["Pandas", "NumPy", "SpaCy", "NLTK", "Gensim", "LLMs", "Whisper", "Silero VAD"],
  },
  {
    category: "Systems + Platforms",
    skills: ["FastAPI", "Flask", "Docker", "Docker Compose", "Triton Server", "WebSockets", "CI/CD", "GitHub Actions", "AWS", "EC2", "CUDA", "FFmpeg", "Nginx", "Streamlit", "Android SDK / NDK", "Jetpack", "Firebase", "Gradle", "Git", "Anaconda", "Linux"],
  },
];

function SocialIcon({ name }: { name: "email" | "linkedin" | "scholar" | "github" }) {
  if (name === "email") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 6.5h17v11h-17z" /><path d="m4 7 8 6 8-6" /></svg>;
  }

  if (name === "linkedin") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.3 8.1v10.4M6.3 5.5v.1M10.7 18.5v-6c0-2.3 3.1-3.1 4.5-1.3.4.5.5 1.2.5 2v5.3M10.7 9.9v8.6" /><circle cx="6.3" cy="5.5" r="1" /></svg>;
  }

  if (name === "scholar") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 9 9-5 9 5-9 5zM6.5 11.2v4.4c2.9 2.3 8.1 2.3 11 0v-4.4M20.5 9v6" /></svg>;
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19.2c-4.2 1.3-4.2-2.1-5.8-2.6M14.8 21v-3.3c0-.9.1-1.5-.4-2.1 3.4-.4 6.9-1.7 6.9-7.4 0-1.6-.6-3-1.5-4.1.2-.4.7-2-.1-4.1 0 0-1.2-.4-4.2 1.6a14.4 14.4 0 0 0-7.6 0C5 .4 3.7.8 3.7.8 2.9 2.9 3.4 4.5 3.6 4.9c-1 1.1-1.5 2.5-1.5 4.1 0 5.7 3.5 7 6.9 7.4-.4.4-.7 1.1-.7 2.1V21" /></svg>;
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(available > 0 ? window.scrollY / available : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <main>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />

      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Pranay Kashyap, home"><span className="brand-mark" />PK <span>/ 26</span></a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#research">Research</a>
          <a href="#education">Education</a>
        </div>
        <a className="nav-cta" href="mailto:pk2931@nyu.edu">Start a conversation <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero shell hero-wide" id="top">
        <div className="hero-copy">
          <p className="kicker"><span /> Machine Learning Engineer · Kaliber Labs</p>
          <h1><span>Pranay</span><strong>Kashyap.</strong></h1>
          <p className="hero-lede">I build production machine learning systems that turn complex problems and emerging AI capabilities into <em>intelligent, scalable products.</em></p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">Explore my experience <span>↓</span></a>
            <a className="button button-ghost" href="./Pranay-Kashyap-Resume.pdf" target="_blank">Résumé <span>↗</span></a>
          </div>
          <div className="now-line"><span className="status-dot" /> San Francisco Bay Area · Building at Kaliber Labs since June 2026</div>
        </div>
        <div className="signal-panel" aria-label="Machine learning systems visualization">
          <div className="panel-top"><span>RESEARCH.TO.PRODUCTION</span><strong><i /> SYSTEM LIVE</strong></div>
          <div className="radar">
            <div className="radar-ring ring-one" /><div className="radar-ring ring-two" />
            <div className="radar-axis axis-x" /><div className="radar-axis axis-y" /><div className="radar-sweep" />
            <div className="target target-one"><span /></div><div className="target target-two"><span /></div>
          </div>
          <div className="panel-bottom"><strong>2+<span>YRS</span></strong><span>FULL-TIME ML<br />EXPERIENCE</span></div>
        </div>
      </section>

      <section className="metrics metrics-two shell" aria-label="Career highlights">
        <div><strong>05</strong><span>Peer-reviewed papers</span></div>
        <div><strong>03</strong><span>Patents</span></div>
      </section>

      <section className="section shell" id="experience">
        <header className="section-head experience-head">
          <div><p className="section-index">01</p><h2>Experience</h2></div>
          <p>A detailed record of the teams, systems, and product outcomes that shaped my work in machine learning.</p>
        </header>

        <div className="experience-stack">
          {experiences.map((experience, companyIndex) => (
            <article className="company-card" key={experience.company}>
              <header className="company-header">
                <span className="company-number">0{companyIndex + 1}</span>
                <div><h3>{experience.company}</h3><p>{experience.location}</p></div>
                <time>{experience.period}</time>
              </header>
              <p className="company-intro">{experience.intro}</p>
              <div className="company-summary">
                <div className="summary-label"><span>SELECTED CONTRIBUTIONS</span></div>
                <ul>
                  {companyHighlights[experience.company].map((bullet) => (
                    <li key={bullet}><p>{bullet}</p></li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="skills">
        <header className="section-head skills-head">
          <div><p className="section-index">02</p><h2>Skills</h2></div>
          <p>A practical stack for building, optimizing, and deploying machine learning systems from research to production.</p>
        </header>
        <div className="skills-board">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="research">
        <header className="section-head">
          <div><p className="section-index">03</p><h2>Research Papers</h2></div>
          <div className="section-side"><p>I’m proud to have contributed to work that makes video understanding faster, lighter, and more capable across cloud and edge environments.</p></div>
        </header>
        <div className="paper-grid">
          {papers.map((paper, index) => (
            <a className="paper-card" href={paper.href} target="_blank" rel="noreferrer" key={paper.title}>
              <div className="paper-top"><span>0{index + 1}</span><span>{paper.venue}</span><i>↗</i></div>
              <h3>{paper.title}</h3>
              <p>{paper.summary}</p>
              <div className="paper-result"><span>KEY RESULT</span><strong>{paper.result}</strong></div>
            </a>
          ))}
        </div>
      </section>

      <section className="section shell" id="patents">
        <header className="section-head patents-head">
          <div><p className="section-index">04</p><h2>Patents</h2></div>
          <p>Three Samsung inventions covering contextual transitions, semantic video segmentation, and adaptive frame regeneration.</p>
        </header>
        <div className="patent-list">
          {patents.map((patent, index) => (
            <a className="patent-item" href={patent.href} target="_blank" rel="noreferrer" key={patent.title}>
              <div className="patent-index"><span>0{index + 1}</span><strong>{patent.number}</strong></div>
              <div className="patent-content"><h3>{patent.title}</h3><p>{patent.description}</p><p className="patent-detail">{patent.detail}</p></div>
              <div className="patent-link">VIEW PATENT <span>↗</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="section shell education-section" id="education">
        <header className="section-head">
          <div><p className="section-index">05</p><h2>Education + Recognition</h2></div>
          <p>Applied data science, information technology, research recognition, and competitive machine learning.</p>
        </header>
        <div className="education-grid">
          <article><span>2024 TO 2026</span><h3>New York University</h3><p>Master of Science in Applied Data Science</p><strong>Graduated May 2026 · New York</strong></article>
          <article><span>2018 TO 2022</span><h3>National Institute of Technology Srinagar</h3><p>Bachelor of Technology in Information Technology</p><strong>Graduated July 2022 · Srinagar, India</strong></article>
          <aside><p>RECOGNITION</p><ul><li>Samsung Best Paper Award 2024, Bronze</li><li>HackerEarth ML Challenge, World Rank 10</li><li>Samsung iFest 2023 Ideation Contest</li><li>LM Studio On-Device AI Builders Hackathon 2024</li></ul></aside>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="section-index">06</p>
        <h2>Let’s <em>connect.</em></h2>
        <p>I’m always interested in hard problems across machine learning systems, real-time inference, video intelligence, and applied research.</p>
        <div className="social-links" aria-label="Contact and professional profiles">
          <a href="mailto:pk2931@nyu.edu" aria-label="Email Pranay"><span className="social-icon"><SocialIcon name="email" /></span><span><strong>Email</strong><small>pk2931@nyu.edu</small></span></a>
          <a href="https://www.linkedin.com/in/pranay1908" target="_blank" rel="noreferrer" aria-label="Pranay on LinkedIn"><span className="social-icon"><SocialIcon name="linkedin" /></span><span><strong>LinkedIn</strong><small>Connect</small></span></a>
          <a href="https://scholar.google.com/citations?user=kxzrCf4AAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer" aria-label="Pranay on Google Scholar"><span className="social-icon"><SocialIcon name="scholar" /></span><span><strong>Google Scholar</strong><small>Publications</small></span></a>
          <a href="https://github.com/pk2931" target="_blank" rel="noreferrer" aria-label="Pranay on GitHub"><span className="social-icon"><SocialIcon name="github" /></span><span><strong>GitHub</strong><small>pk2931</small></span></a>
        </div>
        <div className="contact-meta"><a href="./Pranay-Kashyap-Resume.pdf" target="_blank">Résumé ↗</a><span>San Francisco Bay Area · PT</span></div>
      </section>

      <footer className="footer shell"><span>© 2026 Pranay Kashyap</span><span>ENGINEER · RESEARCHER · BUILDER</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
