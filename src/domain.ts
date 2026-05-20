export const domain = {
  "kind": "brand-kit",
  "title": "Brand Starter Kit",
  "purpose": "A purpose-built brand kit interface for a constrained, tasteful brand foundation for organizations that cannot afford full brand strategy.",
  "inputTitle": "Product-specific inputs",
  "previewTitle": "Generated working outputs",
  "tableTitle": "Brand rules",
  "metricLabels": [
    "Brand Completeness",
    "Contrast Safety",
    "Handoff Readiness"
  ],
  "fields": [
    {"id": "brand-portal-url", "label": "Brand portal URL", "type": "text", "sample": "https://brand.oakandolive.example", "placeholder": "Enter brand portal URL"},
    {"id": "governance-cadence", "label": "Governance cadence", "type": "text", "sample": "Quarterly owner review", "placeholder": "Enter governance cadence"},
    {"id": "paid-packaging", "label": "Paid package", "type": "text", "sample": "Team brand governance workspace", "placeholder": "Enter paid package"},
    {"id": "contrast-threshold", "label": "Contrast threshold", "type": "number", "sample": 45, "placeholder": "Enter minimum contrast score"},
    {
      "id": "organization-client",
      "label": "Organization / client",
      "type": "text",
      "sample": "Oak & Olive Cafe",
      "placeholder": "Enter organization / client"
    },
    {
      "id": "primary-goal",
      "label": "Primary goal",
      "type": "text",
      "sample": "client materials using consistent brand rules",
      "placeholder": "Enter primary goal"
    },
    {
      "id": "owner-reviewer",
      "label": "Owner / reviewer",
      "type": "text",
      "sample": "Volta project lead",
      "placeholder": "Enter owner / reviewer"
    },
    {
      "id": "evidence-source",
      "label": "Evidence source",
      "type": "text",
      "sample": "Owner interview + public audit",
      "placeholder": "Enter evidence source"
    },
    {
      "id": "primary-color",
      "label": "Primary color",
      "type": "color",
      "sample": "#2563eb",
      "placeholder": "Enter primary color"
    },
    {
      "id": "accent-color",
      "label": "Accent color",
      "type": "color",
      "sample": "#f97316",
      "placeholder": "Enter accent color"
    },
    {
      "id": "heading-font",
      "label": "Heading font",
      "type": "text",
      "sample": "Inter",
      "placeholder": "Enter heading font"
    },
    {
      "id": "voice-trait",
      "label": "Voice trait",
      "type": "text",
      "sample": "warm, precise, local",
      "placeholder": "Enter voice trait"
    }
  ],
  "rows": [
    "Voice traits selected",
    "Do/don\u2019t phrases entered",
    "Color palette chosen",
    "Contrast pairs checked",
    "Typography selected",
    "Logo rules written",
    "Photo style defined",
    "Brand guide exported",
    "WCAG contrast ratio recorded",
    "Token JSON/CSS export validated",
    "Font license and fallback approved",
    "Brand governance owner assigned",
    "Client workspace provisioned",
    "Brand portal access roles assigned",
    "Quarterly governance workflow scheduled",
    "Channel-specific usage rights mapped",
    "Token version history prepared",
    "Client renewal trigger configured",
    "Brand drift monitoring queue created",
    "Paid export package selected",
  ],
  "artifacts": [
    "Brand guide",
    "CSS token snippet",
    "Canva handoff checklist",
    "SaaS brand portal blueprint",
    "Design-token version manifest",
    "Client renewal and governance plan",
  ],
  "checks": [
    "Contrast minimums",
    "Font/license notes required",
    "Owner approval before publishing",
    "Brand portal access role review required",
    "Token version history must be retained",
    "Channel usage rights must be client-approved",
  ],
  "sampleClient": "Oak & Olive Cafe",
  "modules": [
    {"name": "Client brand portal", "description": "Workspace home for token downloads, usage examples, owner approvals, and stakeholder read-only access."},
    {"name": "Brand drift monitor", "description": "Scheduled review queue comparing new assets against color, type, logo, voice, and accessibility rules."},
    {"name": "Token version history", "description": "Semantic versioning, change notes, rollback metadata, export timestamps, and downstream channel references."},
    {"name": "Approval workflow builder", "description": "Role-based review paths for designer, mentor, owner, and channel approver before brand assets ship."},
    {"name": "Renewal intelligence", "description": "Quarterly refresh prompts, stale asset detection, usage analytics, and next-pack recommendations."},
    {"name": "Multi-channel asset rules", "description": "Platform-specific usage rules for web, print, Canva, social, email, and sponsorship materials."}
  ],
  "saas": {
    "customerSegments": [
      "Student design pods packaging first brand systems",
      "Small business owners needing governed DIY brand assets",
      "Nonprofit comms teams with rotating volunteers",
      "Mentors auditing client-safe identity handoffs"
    ],
    "pricingTiers": [
      "Free: single local-first workspace and markdown export",
      "Starter: one brand portal, token exports, and owner approvals",
      "Team: multi-reviewer governance, version history, and Canva/Figma handoff",
      "Agency: portfolio dashboards, renewal queue, and white-label export packs"
    ],
    "onboardingChecklist": [
      "Create client brand workspace",
      "Import owner interview and current public assets",
      "Confirm color/type/logo source permissions",
      "Assign designer, reviewer, and owner approval roles",
      "Publish initial token package and governance cadence"
    ],
    "successMetrics": [
      "100% of required brand rules approved",
      "All primary/accent contrast pairs meet selected threshold",
      "Token package downloaded or exported by client",
      "Quarterly governance review scheduled before handoff"
    ],
    "dashboards": [
      "Brand health scorecard",
      "Contrast remediation queue",
      "Token/version release history",
      "Owner approvals and renewal risks"
    ],
    "dataModel": [
      "BrandWorkspace",
      "BrandToken",
      "AssetRule",
      "ContrastCheck",
      "FontLicense",
      "ApprovalEvent",
      "PortalExport",
      "RenewalReminder"
    ],
    "permissions": [
      "Owner: final brand approvals and renewal settings",
      "Designer: token and asset rule editing",
      "Mentor: certification review and risk comments",
      "Client viewer: portal downloads only"
    ],
    "compliance": [
      "WCAG AA contrast evidence retained",
      "Font license source and allowed use recorded",
      "No unapproved logo or claim changes in exports",
      "Client-safe package excludes internal mentor notes"
    ],
    "lifecycle": [
      "Intake",
      "Tokenize",
      "Validate",
      "Approve",
      "Portal publish",
      "Monitor drift",
      "Renew"
    ],
    "retentionSignals": [
      "New assets awaiting governance review",
      "Token exports older than 90 days",
      "Contrast exceptions still open",
      "Owner has not downloaded portal package"
    ],
    "exportChannels": [
      "Brand portal markdown",
      "CSS variables",
      "JSON token bundle",
      "Canva handoff checklist",
      "Governance renewal report"
    ],
    "playbooks": [
      "WCAG contrast remediation queue",
      "Design token publishing checklist",
      "Font-license and fallback review",
      "Client brand-governance handoff"
    ],
    "automations": [
      "Contrast score recalculation",
      "CSS/JSON token export",
      "License-risk warning generation",
      "Owner approval release gate"
    ],
    "revenueModel": "Per-brand workspace with paid export packs, governance seats, and quarterly refresh reviews",
    "integrationTargets": [
      "Canva handoff",
      "Webflow/Squarespace CSS tokens",
      "Figma variable import",
      "Google Drive brand folder"
    ]
  }
};
