export const config = {
  "number": 25,
  "slug": "brand-starter-kit",
  "title": "Brand Starter Kit",
  "category": "Marketing & Content",
  "tagline": "A constrained, tasteful brand foundation for organizations that cannot afford full brand strategy.",
  "persona": "Design and marketing students creating first visual systems.",
  "gap": "Brand tools are either too abstract or too advanced. Small clients need enough consistency to look credible.",
  "niche": "First professional identity for local businesses and nonprofits.",
  "metric": "client materials using consistent brand rules",
  "modules": [
    "Voice card",
    "Color/type sheet",
    "Logo usage checklist",
    "Canva handoff guide"
  ],
  "theme": {
    "accent": "#db2777",
    "accent2": "#f9a8d4",
    "emoji": "\ud83d\udce3",
    "metricLabel": "Content readiness",
    "workflow": [
      "Capture owner voice",
      "Generate channel-ready assets",
      "Review for local fit",
      "Export approved content"
    ],
    "privacy": "Do not publish quotes, photos, or testimonials without explicit owner/client approval."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "voice-card",
      "label": "Voice card",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify voice card with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "color-type-sheet",
      "label": "Color/type sheet",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify color/type sheet with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "logo-usage-checklist",
      "label": "Logo usage checklist",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify logo usage checklist with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "canva-handoff-guide",
      "label": "Canva handoff guide",
      "weight": 15,
      "defaultStatus": "not-started",
      "prompt": "Implement and verify canva handoff guide with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Brand Starter Kit and capture baseline evidence.",
      "Complete the voice card workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Oak & Olive Cafe",
    "chapter": "Dallas",
    "studentLead": "Volta Student Lead",
    "notes": "Neighborhood marketing project with owner-approved content assets. Brand Starter Kit sample.",
    "evidencePrefix": "Brand Starter Kit",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
