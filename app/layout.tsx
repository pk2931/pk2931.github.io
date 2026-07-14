import type { Metadata } from "next";
import "./globals.css";

const [githubOwner = "pranaykashyap", githubRepo = ""] = (process.env.GITHUB_REPOSITORY ?? "/").split("/");
const githubSite = githubRepo.endsWith(".github.io")
  ? `https://${githubOwner}.github.io`
  : `https://${githubOwner}.github.io/${githubRepo}`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.GITHUB_PAGES === "true" ? githubSite : "http://localhost:3000"),
  title: "Pranay Kashyap | Machine Learning Engineer",
  description: "Machine Learning Engineer working across computer vision, conversational AI, LLMs, production systems, and applied research.",
  keywords: ["Pranay Kashyap", "Machine Learning Engineer", "Multimodal AI", "Computer Vision", "Voice AI", "Kaliber Labs"],
  authors: [{ name: "Pranay Kashyap" }],
  openGraph: {
    title: "Pranay Kashyap | Real-time multimodal AI",
    description: "From research notebooks to fast, reliable production systems.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Pranay Kashyap, Machine Learning Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranay Kashyap | Machine Learning Engineer",
    description: "Real-time multimodal AI, built for production.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
