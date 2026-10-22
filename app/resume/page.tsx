import { experience, skills } from "../profile-data";
import { papers, patents } from "../research-data";
export default function Resume() {
  return <main className="resume-page">
    <nav className="resume-actions"><a href="../">← Portfolio</a><a href="../Pranay-Kashyap-Resume.tex" download>Download LaTeX source</a><span>Use your browser’s Print menu to save as PDF.</span></nav>
    <header><h1>Pranay Kashyap</h1><p>Machine Learning Engineer &amp; AI Researcher · San Francisco, California</p><p><a href="mailto:pranayk1908@gmail.com">pranayk1908@gmail.com</a> · <a href="https://github.com/pk2931">GitHub</a> · <a href="https://www.linkedin.com/in/pranay1908">LinkedIn</a> · <a href="https://scholar.google.com/citations?user=kxzrCf4AAAAJ">Google Scholar</a></p><p>3+ years building ML systems from research to production, including on-device intelligence at Samsung and real-time AI at Kaliber AI. Five peer-reviewed publications and two granted US patents.</p></header>
    <section><h2>Education</h2><p><strong>New York University</strong> · M.S. Applied Data Science · Sep 2024 - May 2026</p><p><strong>NIT Srinagar</strong> · B.Tech. Information Technology · Aug 2018 - Jul 2022</p></section>
    <section><h2>Skills</h2>{skills.map(group => <p key={group.label}><strong>{group.label}:</strong> {group.text}</p>)}</section>
    <section><h2>Experience</h2>{experience.map(job => <article key={`${job.company}-${job.role}`}><h3>{job.company} · {job.role}</h3><p>{job.location} · {job.dates}</p>{job.note && <p>{job.note}</p>}<ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></article>)}</section>
    <section><h2>Publications &amp; patents</h2><ul>{papers.map(paper => <li key={paper.id}><a href={paper.links[0].href}>{paper.title}</a> · {paper.venue}</li>)}{patents.map(patent => <li key={patent.id}><a href={patent.href}>{patent.title}</a> · {patent.number} · {patent.status}</li>)}</ul></section>
  </main>;
}
