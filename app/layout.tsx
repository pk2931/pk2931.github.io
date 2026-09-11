import type { Metadata } from "next";
import "./globals.css";

const [githubOwner = "pk2931", githubRepo = "pk2931.github.io"] = (
  process.env.GITHUB_REPOSITORY ?? "pk2931/pk2931.github.io"
).split("/");
const githubSite = githubRepo.endsWith(".github.io")
  ? `https://${githubOwner}.github.io`
  : `https://${githubOwner}.github.io/${githubRepo}`;

export const metadata: Metadata = {
  metadataBase: new URL(githubSite),
  alternates: { canonical: "https://pk2931.github.io/" },
  title: "Pranay Kashyap | Machine Learning & Research",
  description:
    "Machine Learning Engineer at Kaliber AI. Video understanding, multimodal world models, and LLM dynamics. Five peer-reviewed papers and three patent publications.",
  keywords: [
    "Pranay Kashyap",
    "Machine Learning Engineer",
    "Multimodal AI",
    "Computer Vision",
    "Voice AI",
    "Kaliber Labs",
  ],
  authors: [{ name: "Pranay Kashyap" }],
  openGraph: {
    title: "Pranay Kashyap | Machine Learning & Research",
    description:
      "Video understanding, multimodal world models, and LLM dynamics. Kaliber AI · Samsung Research · NYU.",
    type: "website",
    images: [
      {
        url: "./og.png",
        width: 1200,
        height: 630,
        alt: "Pranay Kashyap, Machine Learning Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranay Kashyap | Machine Learning & Research",
    description: "Video understanding, world models, and LLM dynamics.",
    images: ["./og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
