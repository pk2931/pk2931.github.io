export const papers = [
  {
    id: "sam-gebd",
    venue: "ICASSP 2024",
    title: "SAM-GEBD: Zero-Cost Approach for Generic Event Boundary Detection",
    authors: [
      "Pranay Kashyap",
      "Sourabh Vasant Gothe",
      "Vibhav Agarwal",
      "Jayesh Rajkumar Vachhani",
    ],
    summary:
      "Can an image foundation model identify when an event changes in a video? We repurpose the Segment Anything Model for generic event boundary detection without task-specific training.",
    detail:
      "This work brings image segmentation representations to temporal video understanding: finding meaningful changes without relying on a fixed set of action categories. It connects foundation models with a practical video segmentation task.",
    highlight: "Training-free video understanding",
    image: "sam-gebd.webp",
    caption: "Figure 1 · SAM-GEBD overview · ICASSP 2024",
    links: [
      {
        label: "Paper",
        href: "https://ieeexplore.ieee.org/abstract/document/10447789",
      },
    ],
  },
  {
    id: "flowgebd",
    venue: "WACV 2024",
    title:
      "What’s in the Flow? Exploiting Temporal Motion Cues for Unsupervised Generic Event Boundary Detection",
    authors: [
      "Sourabh Vasant Gothe",
      "Vibhav Agarwal",
      "Sourav Ghosh",
      "Jayesh Rajkumar Vachhani",
      "Pranay Kashyap",
      "Barath Raj Kandur Raja",
    ],
    summary:
      "Motion alone can reveal meaningful video events. FlowGEBD uses pixel tracking and flow normalization to detect boundaries without a task-trained neural network, reaching 0.713 F1@0.05 on Kinetics-GEBD.",
    detail:
      "The paper reports a 31.7 percentage-point improvement over the unsupervised baseline on Kinetics-GEBD, and an average F1 of 0.623 on TAPOS. Optical-flow cues capture changes in how a scene moves, rather than requiring predefined action labels.",
    highlight: "0.713 F1@0.05 · Kinetics-GEBD",
    image: "flowgebd.webp",
    caption: "FlowGEBD · figure from the WACV 2024 paper",
    links: [
      {
        label: "Paper",
        href: "https://openaccess.thecvf.com/content/WACV2024/html/Gothe_Whats_in_the_Flow_Exploiting_Temporal_Motion_Cues_for_Unsupervised_WACV_2024_paper.html",
      },
      {
        label: "PDF",
        href: "https://openaccess.thecvf.com/content/WACV2024/papers/Gothe_Whats_in_the_Flow_Exploiting_Temporal_Motion_Cues_for_Unsupervised_WACV_2024_paper.pdf",
      },
    ],
  },
  {
    id: "similarity",
    venue: "ICASSP 2023",
    title:
      "Self-Similarity is All You Need for Fast and Light-Weight Generic Event Boundary Detection",
    authors: [
      "Sourabh Vasant Gothe",
      "Jayesh Rajkumar Vachhani",
      "Rishabh Khurana",
      "Pranay Kashyap",
    ],
    summary:
      "A lightweight approach to finding meaningful moments in video. We use self-similarity to represent temporal structure and design efficient event boundary detection for constrained compute budgets.",
    detail:
      "Comparing video features across time reveals where an event stays consistent and where it changes. The work investigates how to use that structure in a compact model for generic event boundary detection.",
    highlight: "Efficient temporal representations",
    image: "similarity.webp",
    caption: "Figure 1 · Proposed architecture · ICASSP 2023",
    links: [
      {
        label: "Paper",
        href: "https://ieeexplore.ieee.org/abstract/document/10096176",
      },
    ],
  },
  {
    id: "repetition",
    venue: "ICASSP 2023",
    title:
      "Repetition Counting from Compressed Videos Using Sparse Residual Similarity",
    authors: [
      "Rishabh Khurana",
      "Jayesh Rajkumar Vachhani",
      "Sourabh Vasant Gothe",
      "Pranay Kashyap",
    ],
    summary:
      "Count repeated actions directly from compressed video. I-frame encodings and sparse residual signals bypass full RGB decoding, reducing model size by 91.5% and FLOPs by 91% with competitive results on Countix.",
    detail:
      "Instead of reconstructing every frame, the method works with the information already stored by a video codec. Sparse residual similarity captures repeating action structure while a lightweight backbone keeps computation low.",
    highlight: "91.5% smaller model · 91% fewer FLOPs",
    image: "repetition.webp",
    caption: "Figure 2 · Architecture comparison · ICASSP 2023",
    links: [
      {
        label: "Paper",
        href: "https://ieeexplore.ieee.org/abstract/document/10094742",
      },
      {
        label: "Presentation",
        href: "https://rc.signalprocessingsociety.org/conferences/icassp-2023/spsicassp23vid1846",
      },
    ],
  },
  {
    id: "samnet",
    venue: "CVIP 2022 · Proceedings 2023",
    title:
      "SAMNet: Semantic Aware Multimodal Network for Emoji Drawing Classification",
    authors: [
      "Sourabh Vasant Gothe",
      "Rishabh Khurana",
      "Jayesh Rajkumar Vachhani",
      "S. Rakshith",
      "Pranay Kashyap",
    ],
    summary:
      "A sketch is easier to understand in context. SAMNet combines drawing and text features in a multimodal network to recognize the emoji a user intends to draw.",
    detail:
      "The work explores semantic context as a complement to visual input for personalized mobile communication. Joint text and image learning helps disambiguate drawings that look similar but convey different meanings.",
    highlight: "Joint language + visual understanding",
    image: "samnet.webp",
    caption: "Figure 5 · Multimodal architectures · CVIP 2022",
    links: [
      {
        label: "Paper",
        href: "https://link.springer.com/chapter/10.1007/978-3-031-31417-9_10",
      },
    ],
  },
];

export const patents = [
  {
    id: "patent-segment",
    title: "Method and electronic device for generating a segment of a video",
    number: "US20230368534A1",
    year: "2023",
    summary:
      "Identify meaningful temporal boundaries from changes in subjects, actions, objects, and scene context to produce useful video segments.",
    href: "https://patents.google.com/patent/US20230368534A1/en",
  },
  {
    id: "patent-transition",
    title: "Generating contextual transition effects in videos",
    number: "US20240321318A1",
    year: "2024",
    summary:
      "Generate transitions that respond to a video’s content, using event changes, masked frames, and pixel motion to connect adjacent scenes.",
    href: "https://patents.google.com/patent/US20240321318A1/en",
  },
  {
    id: "patent-display",
    title:
      "Electronic device and method for adaptive video display management based on region localized regeneration of frames",
    number: "US20250233960A1",
    year: "2025",
    summary:
      "Adapt video to different display formats by preserving relationships between primary and secondary events while regenerating regions of the frame.",
    href: "https://patents.google.com/patent/US20250233960A1/en",
  },
];
