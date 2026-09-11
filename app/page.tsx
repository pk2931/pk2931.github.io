import Image from "next/image";
import { papers, patents } from "./research-data";

const scholar = "https://scholar.google.com/citations?user=kxzrCf4AAAAJ&hl=en";
function Links({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="resource-links">
      {items.map((item) => (
        <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
          {item.label}
          <span aria-hidden="true"> ↗</span>
        </a>
      ))}
    </div>
  );
}
function Figure({
  file,
  alt,
  caption,
}: {
  file: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure>
      <a
        href={`./research/${file}`}
        target="_blank"
        rel="noreferrer"
        aria-label={`Enlarge figure: ${alt}`}
      >
        <Image
          src={`./research/${file}`}
          alt={alt}
          width={720}
          height={440}
          unoptimized
        />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-layout" id="top">
        <aside className="sidebar">
          <a
            className="identity"
            href="./pranay-icassp-2024.jpg"
            target="_blank"
            rel="noreferrer"
            aria-label="View Pranay’s photo at ICASSP 2024"
          >
            <Image
              src="./pranay-icassp-2024.jpg"
              alt="Pranay Kashyap at ICASSP 2024 in Korea"
              width={1152}
              height={2048}
              unoptimized
              priority
            />
          </a>
          <div className="sidebar-name">Pranay Kashyap</div>
          <p className="sidebar-role">
            Machine Learning Engineer
            <br />
            <strong>Kaliber AI</strong>
          </p>
          <div className="sidebar-contact">
            <span>San Francisco Bay Area</span>
            <a href="mailto:pranayk1908@gmail.com">pranayk1908@gmail.com</a>
          </div>
          <div className="profile-links">
            <a href={scholar} target="_blank" rel="noreferrer">
              Google Scholar ↗
            </a>
            <a
              href="https://github.com/pk2931"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/pranay1908"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="./Pranay-Kashyap-Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Résumé ↗
            </a>
          </div>
        </aside>
        <main id="main">
          <header className="intro">
            <p className="eyebrow">
              MACHINE LEARNING · COMPUTER VISION · RESEARCH
            </p>
            <h1>Pranay Kashyap</h1>
            <p>
              I’m a Machine Learning Engineer at <strong>Kaliber AI</strong> in
              the San Francisco Bay Area. My work connects computer vision,
              representation learning, and generative AI, from developing new
              methods to training models and deploying them in real products.
              I’m particularly interested in building systems that can
              understand video, anticipate physical motion, and interact
              naturally with people.
            </p>
            <p>
              At Kaliber, I’m developing{" "}
              <strong>multimodal world models</strong> that combine visual
              representations with 3D state history to forecast future
              trajectories and generate video. This includes training
              autoregressive predictors and RGB decoders to produce 60 future
              frames from 32 frames of visual context. I also study how language
              models influence one another during multi-turn conversations,
              analyzing their hidden representations and testing causal
              interventions through <strong>activation steering</strong>. My
              earlier work at Kaliber included real-time voice assistants,
              multimodal person tracking, and GPU inference systems.
            </p>
            <p>
              Previously, I spent over two years at{" "}
              <strong>Samsung Research</strong> developing efficient video AI
              for mobile devices. I led the implementation of event boundary
              detection for{" "}
              <strong>Video Moments in Samsung’s Enhance-X app</strong>, helping
              users find meaningful moments in their videos. My work covered
              lightweight neural architectures, training-free video
              understanding, and on-device optimization, including a 71.4%
              reduction in model size through quantization.
            </p>
            <p className="intro-research">
              I’ve co-authored <a href="#research">five peer-reviewed papers</a>{" "}
              at ICASSP, WACV, and CVIP, including first-author work on
              <a href="#sam-gebd"> SAM-GEBD</a>, and contributed to
              <a href="#patents"> three patent publications</a> in video
              processing. I received Samsung’s{" "}
              <strong>Best Paper Award, Bronze, in 2024</strong>. I hold an M.S.
              in Applied Data Science from <strong>New York University</strong>{" "}
              and a B.Tech. in Information Technology from
              <strong> NIT Srinagar</strong>.
            </p>
            <div className="intro-bottom">
              <a href="mailto:pranayk1908@gmail.com">
                Get in touch <span aria-hidden="true">↗</span>
              </a>
              <span>Research ideas, collaborations, and opportunities.</span>
            </div>
          </header>
          <section className="news" aria-labelledby="news-title">
            <h2 id="news-title">News</h2>
            <div className="news-items">
              <article>
                <time>Jun 2026</time>
                <p>
                  Joined <strong>Kaliber AI</strong> full-time to work on
                  predictive world models and LLM conversational dynamics.
                </p>
              </article>
              <article>
                <time>May 2026</time>
                <p>
                  Completed my <strong>M.S. in Applied Data Science</strong> at
                  New York University.
                </p>
              </article>
              <article>
                <time>2024</time>
                <p>
                  Received the{" "}
                  <strong>Samsung Best Paper Award · Bronze</strong> for work on
                  physics-based interactive dynamics.
                </p>
              </article>
            </div>
          </section>
          <section id="research" className="section">
            <header className="section-heading">
              <h2>Publications</h2>
              <a href={scholar} target="_blank" rel="noreferrer">
                Google Scholar ↗
              </a>
            </header>
            <p className="section-description">
              Efficient video understanding and multimodal learning.
            </p>
            <div className="publication-list">
              {papers.map((paper) => (
                <article className="research-row" key={paper.id} id={paper.id}>
                  <Figure
                    file={paper.image}
                    alt={paper.title}
                    caption={paper.caption}
                  />
                  <div className="research-copy">
                    <div className="venue">
                      {paper.venue}
                      {paper.id === "sam-gebd" && (
                        <span className="first-author">First author</span>
                      )}
                    </div>
                    <h3>
                      <a
                        href={paper.links[0].href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {paper.title}
                      </a>
                    </h3>
                    <p className="authors">
                      {paper.authors.map((author, i) => (
                        <span key={author}>
                          {i > 0 && ", "}
                          {author === "Pranay Kashyap" ? (
                            <strong>{author}</strong>
                          ) : (
                            author
                          )}
                        </span>
                      ))}
                    </p>
                    <p className="tldr">
                      <span>TL;DR</span> {paper.summary}
                    </p>
                    <p className="finding">{paper.highlight}</p>
                    <Links items={paper.links} />
                    <details>
                      <summary>About this work</summary>
                      <p>{paper.detail}</p>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section id="current" className="section">
            <header className="section-heading">
              <h2>Current research</h2>
              <span className="section-meta">Kaliber AI · 2026–present</span>
            </header>
            <p className="section-description">
              Learning how physical systems evolve and how language models
              influence one another.
            </p>
            <article className="research-row">
              <Figure
                file="world-model.svg"
                alt="32-frame visual context and 3D history feed a predictive world model to forecast 60 future states and RGB frames"
                caption="Architecture overview · ongoing work"
              />
              <div className="research-copy">
                <div className="venue">
                  World models · Representation learning
                </div>
                <h3>From visual context to future dynamics</h3>
                <p className="tldr">
                  <span>TL;DR</span> Combining frozen V-JEPA ViT-L
                  representations with 3D state history to predict future
                  position, velocity, and video.
                </p>
                <p>
                  A closed-loop autoregressive predictor forecasts 60 future
                  frames from 32-frame visual context. A decoder trained from
                  scratch reconstructs 256 × 256 RGB frames with separate
                  object, background, and alpha components.
                </p>
                <p className="finding">
                  32 context frames → 60 future frames · ~1 second at 60 FPS
                </p>
                <details>
                  <summary>Architecture & training</summary>
                  <p>
                    Backpropagation through time trains the predictor on its own
                    recursively predicted states and V-JEPA latent tokens,
                    targeting long-horizon error accumulation and distribution
                    shift. The RGB decoder uses position, velocity,
                    acceleration, and temporal-consistency objectives to
                    encourage physically plausible predictions.
                  </p>
                </details>
              </div>
            </article>
            <article className="research-row">
              <Figure
                file="conversation.svg"
                alt="Conceptual conversation trajectories and activation steering directions in a hidden representation space"
                caption="Conceptual illustration · not an experimental plot"
              />
              <div className="research-copy">
                <div className="venue">
                  LLM dynamics · Mechanistic interpretability
                </div>
                <h3>The geometry of multi-turn conversations</h3>
                <p className="tldr">
                  <span>TL;DR</span> Studying how LLMs shape each other’s
                  conversational trajectories, and testing whether those
                  dynamics can be changed through activation steering.
                </p>
                <p>
                  Self-play and mixed-play interactions expose model-specific
                  conversational attractors. Trajectory, basin, and
                  endpoint-pull analyses measure how models influence each other
                  across hidden activation spaces.
                </p>
                <p className="finding">
                  Hidden-state analysis → controlled causal interventions
                </p>
                <details>
                  <summary>Analysis & interventions</summary>
                  <p>
                    Differential influence vectors isolate interaction-related
                    directions in hidden activations. Layer-wise causal steering
                    uses controlled λ-sweeps and random-vector baselines to test
                    the effect of those directions on dialogue dynamics.
                  </p>
                </details>
              </div>
            </article>
          </section>
          <section id="patents" className="section">
            <header className="section-heading">
              <h2>Patents</h2>
              <span className="section-meta">
                3 inventions · Samsung Electronics
              </span>
            </header>
            <p className="section-description">
              Video segmentation, contextual generation, and adaptive displays.
              Identifiers below refer to published applications.
            </p>
            {patents.map((patent) => (
              <article className="research-row patent-row" key={patent.id}>
                <Figure
                  file={`${patent.id}.${patent.id === "patent-display" ? "svg" : "webp"}`}
                  alt={patent.title}
                  caption={
                    patent.id === "patent-display"
                      ? "Conceptual illustration · adaptive video display"
                      : "Drawing from the published patent application"
                  }
                />
                <div className="research-copy">
                  <div className="venue">
                    {patent.number} · {patent.year}
                  </div>
                  <h3>
                    <a href={patent.href} target="_blank" rel="noreferrer">
                      {patent.title}
                    </a>
                  </h3>
                  <p className="authors">
                    <strong>Pranay Kashyap</strong> and co-inventors · Samsung
                    Electronics
                  </p>
                  <p>{patent.summary}</p>
                  <Links items={[{ label: "Patent", href: patent.href }]} />
                </div>
              </article>
            ))}
          </section>
          <section id="experience" className="section">
            <header className="section-heading">
              <h2>Experience</h2>
              <a
                href="./Pranay-Kashyap-Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Full résumé ↗
              </a>
            </header>
            <article className="experience-row">
              <div className="company-logo kaliber">K</div>
              <div>
                <h3>Kaliber AI</h3>
                <p className="role">
                  Machine Learning Engineer <span>· Jun 2026–present</span>
                </p>
                <p>
                  Multimodal predictive world models, autoregressive 3D
                  trajectories, latent-to-RGB decoding, and causal analysis of
                  LLM conversational dynamics.
                </p>
                <p className="role secondary">
                  Machine Learning Intern <span>· May–Dec 2025</span>
                </p>
                <p>
                  Built a real-time voice assistant with speaker-verified VAD,
                  streaming Whisper, and interruptible TTS at under 2-second
                  response latency. Deployed GPU inference with AWS, Docker,
                  TensorRT, and Triton; developed multimodal person tracking
                  using facial and fashion embeddings.
                </p>
              </div>
            </article>
            <article className="experience-row">
              <div className="company-logo samsung">S</div>
              <div>
                <h3>Samsung Research</h3>
                <p className="role">
                  Senior Software Engineer <span>· Mar–Aug 2024</span>
                </p>
                <p className="role">
                  Software Engineer <span>· Jul 2022–Feb 2024</span>
                </p>
                <p className="role">
                  Software Engineer Intern <span>· Jan–Jul 2022</span>
                </p>
                <p>
                  Developed on-device event boundary detection for{" "}
                  <strong>Video Moments in Enhance-X</strong>. Reduced model
                  size by 71.4% with ONNX quantization and improved
                  video-processing latency by 20%. Research across lightweight
                  video models led to five papers and three patent publications.
                </p>
              </div>
            </article>
            <article className="experience-row">
              <div className="company-logo tolstoy">t</div>
              <div>
                <h3>Tolstoy</h3>
                <p className="role">
                  Machine Learning Engineer <span>· May–Aug 2020</span>
                </p>
                <p>
                  Built text classification and an OCR / named-entity
                  recognition pipeline for specimen labels, with Flask APIs and
                  interactive Streamlit applications.
                </p>
              </div>
            </article>
            <div className="toolkit">
              <strong>Tools I work with</strong>
              <p>
                PyTorch · Python · V-JEPA · CUDA · ONNX · TensorRT · Triton ·
                FastAPI · Docker · AWS · FFmpeg
              </p>
            </div>
          </section>
          <section id="education" className="section">
            <header className="section-heading">
              <h2>Education & recognition</h2>
            </header>
            <div className="education-grid">
              <div>
                <article>
                  <h3>New York University</h3>
                  <p>M.S. Applied Data Science</p>
                  <span>2024–2026</span>
                </article>
                <article>
                  <h3>National Institute of Technology Srinagar</h3>
                  <p>B.Tech. Information Technology</p>
                  <span>2018–2022</span>
                </article>
              </div>
              <div className="recognition">
                <p>
                  <strong>Samsung Best Paper Award</strong>
                  <br />
                  Bronze · 2024
                </p>
                <p>
                  <strong>HackerEarth ML Challenge</strong>
                  <br />
                  World rank 10 · Plane crash severity prediction
                </p>
                <p>
                  <strong>Samsung iFest</strong>
                  <br />
                  Ideation contest · 2023
                </p>
              </div>
            </div>
          </section>
          <footer>
            <p>
              Interested in video understanding, world models, or LLM dynamics?
              <br />
              <a href="mailto:pranayk1908@gmail.com">Let’s talk.</a>
            </p>
            <div>
              <span>© 2026 Pranay Kashyap</span>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}
