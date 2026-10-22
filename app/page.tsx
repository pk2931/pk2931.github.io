import Image from "next/image";
import { experience, skills } from "./profile-data";
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
            <span>San Francisco, California</span>
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
              href="./resume/"
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
            <p className="intro-statement">From research ideas to AI that runs in the real world.</p>
            <p>I’m a Machine Learning Engineer and AI Researcher at <strong>Kaliber AI</strong>, working on physical forecasting and LLM activation steering. Previously at <strong>Samsung Research</strong>, I helped take on-device video intelligence from prototype to commercial release on Galaxy S-series devices.</p>
            <p>My work connects computer vision, multimodal learning, and efficient inference, from mobile CPUs to GPU services on AWS.</p>
            <div className="impact-strip" aria-label="Profile highlights">
              <div><strong>3+ years</strong><span>Research to production</span></div>
              <div><strong>5 papers</strong><span>ICASSP · WACV · CVIP</span></div>
              <div><strong>2 granted</strong><span>US patents + 1 pending</span></div>
            </div>
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
          <section id="current" className="section">
            <header className="section-heading"><h2>Selected work</h2><span className="section-meta">Research + production systems</span></header>
            <p className="section-description">Forecasting physical interactions, steering language models, and shipping real-time AI.</p>
            <div className="project-grid">
              <article className="project-card"><p className="venue">Kaliber AI · World models</p><h3>Predicting motion through contact</h3><p>Multimodal 3D forecasting for conveyor-belt objects through collisions, rail contacts, and rebounds. Target-conditioned visual attention works without the partner object's state at inference.</p><p className="project-metric">1.98 cm ADE</p><p className="metric-context">60 future positions over 2 seconds · 17,512 held-out samples</p><details><summary>Evaluation details</summary><p>Visible collisions: 4.28 cm ADE. Side-rail interactions: 2.26 cm ADE. A separate 1,140-sample interaction evaluation achieved 85% contact recall, 2.29-frame mean timing error, and a 1.84% ordinary-motion false-positive rate.</p></details></article>
              <article className="project-card"><p className="venue">Kaliber AI · LLM research</p><h3>Steering behavior without fine-tuning</h3><p>Inference-time activation steering for Qwen and Gemma. Adaptive interventions shift conversational behavior without changing model weights.</p><p className="project-metric">96.7%</p><p className="metric-context">Intended-direction responses on held-out Gemma evaluation</p><details><summary>Steering and localization</summary><p>Shift magnitude tracks steering strength with correlations of 0.87 on Qwen and 0.97 on Gemma. Interventions in 24 of 48 layers produced statistically comparable effects.</p></details></article>
              <article className="project-card"><p className="venue">Samsung Research · Shipped on Galaxy</p><h3>Video Moments in Enhance-X</h3><p>On-device highlight detection, from GEBD research to commercial release. Built the C++ JNI/NDK inference layer, FFmpeg extraction pipeline, and release validation.</p><p className="project-metric">71.4% smaller</p><p className="metric-context">ONNX quantization with 0.1% F1 loss</p><details><summary>Engineering for the device</summary><p>A 3M-parameter architecture with 19.5x fewer multi-adds and a 13.92% F1 gain over baseline ran at 84 ms/frame on a 1.5 GB-RAM Android CPU. Clip extraction latency fell 20%. Device profiling covered memory, thermals, codecs, and low-memory fallbacks.</p></details></article>
              <article className="project-card"><p className="venue">Kaliber AI · Voice + robotics</p><h3>CareMate’s real-time voice assistant</h3><p>Streaming Whisper-large-v3, LLMs, and interruptible TTS on FastAPI/WebSockets. Speaker verification and Silero VAD keep conversations focused on the target speaker.</p><p className="project-metric">&lt;2 seconds</p><p className="metric-context">End of speech to playback · 10+ concurrent sessions tested</p><details><summary>Production pipeline</summary><p>False triggers fell approximately 40% and perceived wait time fell 35%. Docker microservices on AWS EC2 g5.xlarge serve Triton/TensorRT inference with under 5-second startup and zero-downtime CI/CD.</p></details></article>
            </div>
            <aside className="tracking-highlight"><strong>Perception for home robotics</strong><p>YOLOv8 + FaceNet + FashionSigLIP person tracking held &gt;90% stability through occlusion and re-entry, with approximately 85% fewer false positives. CUDA batching, asynchronous processing, and adaptive frame skipping delivered 9 FPS and a &gt;5x speedup.</p></aside>
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
                      <span>In brief</span> {paper.summary}
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
          <section id="patents" className="section">
            <header className="section-heading">
              <h2>Patents</h2>
              <span className="section-meta">
                2 granted · 1 pending
              </span>
            </header>
            <p className="section-description">
              Video segmentation, contextual generation, and adaptive displays.
              Grant identifiers are shown for issued patents, with the pending application listed separately.
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
                    {patent.number} · {patent.status}
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
                href="./resume/"
                target="_blank"
                rel="noreferrer"
              >
                Full résumé ↗
              </a>
            </header>
            {experience.map((job) => (
              <article className="experience-row" key={`${job.company}-${job.role}`}>
                <div className={`company-logo ${job.company === "Kaliber AI" ? "kaliber" : "samsung"}`} aria-hidden="true">{job.company[0]}</div>
                <div><h3>{job.company}</h3><p className="role">{job.role} <span>· {job.dates}</span></p>
                  <p className="experience-note">{job.location}{job.note ? ` · ${job.note}` : ""}</p>
                  <p>{job.bullets[0]}</p>
                  <details><summary>Explore contributions ({job.bullets.length - 1} more)</summary><ul className="contribution-list">{job.bullets.slice(1).map(bullet => <li key={bullet}>{bullet}</li>)}</ul></details>
                </div>
              </article>
            ))}
          </section>
          <section id="skills" className="section">
            <header className="section-heading"><h2>Technical toolkit</h2></header>
            <p className="section-description">The methods and systems behind the work.</p>
            <div className="skills-grid">{skills.map(group => <article key={group.label}><h3>{group.label}</h3><p>{group.text}</p></article>)}</div>
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
