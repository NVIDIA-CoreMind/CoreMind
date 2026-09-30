export interface PlatformDownload {
  name: string;
  available: boolean;
  version?: string;
  url?: string;
  architecture?: string;
  minOS?: string;
  size?: string;
  sha256?: string;
  releaseDate?: string;
  packageType?: string;
  note?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  visualType?: 'ai-editor' | 'explorer' | 'agent' | 'terminal' | 'clean-ui' | 'local';
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export interface AgentStage {
  id: string;
  label: string;
  title: string;
  description: string;
  preview: string;
  status: 'completed' | 'active' | 'pending';
}

export interface ScreenshotItem {
  id: string;
  title: string;
  caption: string;
  category: string;
  imagePath?: string;
  badge: string;
  description: string;
  features: string[];
}

export interface TechItem {
  title: string;
  description: string;
  details: string;
  tag: string;
}

export interface TeamMember {
  name: string;
  username: string;
  role: string;
  github: string;
  initials: string;
  description: string;
  avatarUrl?: string;
}

export const PRODUCT_INFO = {
  name: 'CoreMind',
  smallLabel: 'AI-Powered Development Environment',
  headline: 'Build faster with an IDE that thinks with you.',
  headlineAlternative: 'Your AI-powered workspace for building software.',
  supportingText:
    'CoreMind is a modern AI-powered IDE designed to help developers understand code, plan solutions, write code, debug problems, and build software faster.',
  primaryCtaText: 'Download for macOS',
  secondaryCtaText: 'Explore CoreMind',
  platformSubtext: 'Available for Apple Silicon • macOS',
  copyright: '© 2026 CoreMind. All rights reserved.',
  links: {
    github: 'https://github.com/NVIDIA-CoreMind',
    frontendRepo: 'https://github.com/NVIDIA-CoreMind/CoreMind-Application.git',
    backendRepo: 'https://github.com/NVIDIA-CoreMind/CoreMind-AI-Backend.git',
    download: 'https://github.com/NVIDIA-CoreMind/CoreMind-Application/releases',
    docs: '/docs',
    changelog: '/changelog'
  }
};

export const TRUST_STATEMENTS = {
  heading: 'Built for developers who want to focus on building.',
  items: [
    {
      title: 'Understand',
      description: 'Understand unfamiliar codebases faster.'
    },
    {
      title: 'Create',
      description: 'Turn ideas into working code with AI assistance.'
    },
    {
      title: 'Improve',
      description: 'Debug, refactor, and improve your projects faster.'
    }
  ]
};

export const DOWNLOAD_CONFIG: Record<string, PlatformDownload> = {
  macos: {
    name: 'macOS',
    available: true,
    version: '0.1.0',
    url: 'https://github.com/NVIDIA-CoreMind/CoreMind-Application/releases',
    architecture: 'Apple Silicon',
    minOS: 'macOS 12.0 or later',
    packageType: '.dmg',
    size: '94.2 MB',
    sha256: 'a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0',
    releaseDate: 'September 2026'
  },
  windows: {
    name: 'Windows',
    available: false,
    note: 'Windows support coming in a future release.'
  },
  linux: {
    name: 'Linux',
    available: false,
    note: 'Linux support coming in a future release.'
  }
};

export const FEATURES: FeatureItem[] = [
  {
    id: 'ai-coding',
    title: 'AI-powered coding',
    description: 'Get intelligent assistance while writing, understanding, and modifying code.',
    badge: 'Coding Assist',
    visualType: 'ai-editor'
  },
  {
    id: 'codebase-understanding',
    title: 'Understand your codebase',
    description: 'Navigate large projects and understand relationships between files, components, and services.',
    badge: 'Code Graph',
    visualType: 'explorer'
  },
  {
    id: 'agentic-development',
    title: 'Plan and build with AI',
    description: 'Give CoreMind a development task and let the AI reason through the problem, plan changes, and work through implementation.',
    badge: 'Agentic Workflow',
    visualType: 'agent'
  },
  {
    id: 'integrated-terminal',
    title: 'Everything in one workspace',
    description: 'Run commands, inspect output, and manage your development workflow without leaving CoreMind.',
    badge: 'Integrated Shell',
    visualType: 'terminal'
  },
  {
    id: 'modern-dx',
    title: 'Designed for developers',
    description: 'A clean interface built around speed, focus, and efficient software development.',
    badge: 'Developer Experience',
    visualType: 'clean-ui'
  },
  {
    id: 'local-development',
    title: 'Your projects stay in your workflow',
    description: 'Work with your local projects while CoreMind provides AI-powered development assistance.',
    badge: 'Local-First',
    visualType: 'local'
  }
];

export const HOW_IT_WORKS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Describe',
    description: 'Tell CoreMind what you want to build.',
    detail: 'Describe tasks in plain developer language, reference files with @mentions, or specify target endpoints.'
  },
  {
    step: '02',
    title: 'Plan',
    description: 'CoreMind analyzes the task and creates an implementation approach.',
    detail: 'Identifies impacted components, verifies data contracts, and formulates a step-by-step checklist.'
  },
  {
    step: '03',
    title: 'Build',
    description: 'Work with AI assistance to implement the solution.',
    detail: 'Applies changes across files with precise unified diffs, maintaining consistent styles and type safety.'
  },
  {
    step: '04',
    title: 'Verify',
    description: 'Review changes, run commands, test, and refine the result.',
    detail: 'Inspect side-by-side diffs, execute test suites in the integrated terminal, and refine before committing.'
  }
];

export const AGENT_STAGES: AgentStage[] = [
  {
    id: 'request',
    label: 'User Request',
    title: 'User Request',
    description: 'Task input from developer with context specifications.',
    preview: '"Implement rate limiting middleware on /api/v1/generate endpoint using redis token bucket"',
    status: 'completed'
  },
  {
    id: 'reasoning',
    label: 'AI Reasoning',
    title: 'AI Reasoning',
    description: 'Scans dependency graph, Redis connection singleton, and Express route tree.',
    preview: 'Found existing Redis client in src/lib/redis.ts. Route middleware chain identified in server.ts.',
    status: 'completed'
  },
  {
    id: 'plan',
    label: 'Plan',
    title: 'Structured Plan',
    description: 'Breaks task into discrete verifiable steps.',
    preview: '1. Create middleware/rateLimiter.ts\n2. Configure token-bucket algorithm (60 req/min)\n3. Inject into generate route handler',
    status: 'completed'
  },
  {
    id: 'changes',
    label: 'Code Changes',
    title: 'Code Changes',
    description: 'Generates coordinated diffs for review.',
    preview: '+ import { rateLimiter } from "./middleware/rateLimiter";\n+ router.use("/generate", rateLimiter({ max: 60 }));',
    status: 'active'
  },
  {
    id: 'verification',
    label: 'Verification',
    title: 'Verification',
    description: 'Runs automated tests and diagnostic checks.',
    preview: '$ pnpm test rateLimiter.test.ts\n✓ passes rate limit threshold test (18ms)\n✓ responds 429 upon exhaustion (12ms)',
    status: 'pending'
  }
];

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'main-editor',
    title: 'Main editor',
    caption: 'High-performance code editing with clean typography and real-time syntax checking.',
    category: 'Editor',
    badge: 'Code Canvas',
    description: 'A focused, distraction-free editing surface with low latency keystroke response, clean line numbers, and fast file switching.',
    features: ['Monaco editor core', 'Native macOS typography', 'Multi-tab buffer management']
  },
  {
    id: 'ai-assistant',
    title: 'AI assistant',
    caption: 'Work with project-aware AI assistance directly inside the editor.',
    category: 'AI Assistant',
    badge: 'Context Assistant',
    description: 'Summon inline assists (Cmd+K) or open the assistant drawer (Cmd+L) to inspect functions, generate tests, and refactor code.',
    features: ['Inline suggestions & diffs', 'File reference tagging (@file)', 'Interactive code explanation']
  },
  {
    id: 'agent-workflow',
    title: 'Agent workflow',
    caption: 'Multi-step autonomous task reasoning with explicit checkpoints.',
    category: 'Agent',
    badge: 'Autonomous Tasks',
    description: 'Let CoreMind formulate implementation plans, identify cross-file dependencies, and generate coordinated multi-file modifications.',
    features: ['Transparent reasoning logs', 'Step-by-step approval checkpoints', 'Atomic file rollback safety']
  },
  {
    id: 'terminal',
    title: 'Terminal',
    caption: 'macOS native zsh shell with fast output inspection and command execution.',
    category: 'Terminal',
    badge: 'Integrated Shell',
    description: 'Run build tools, test suites, and package managers without leaving your code window. Inherits your local macOS PATH and environment.',
    features: ['Native zsh/bash sessions', 'Clickable file links in logs', 'Split panes & persistent tabs']
  },
  {
    id: 'project-explorer',
    title: 'Project explorer',
    caption: 'Fast workspace navigation with visual git change statuses and symbol quick-jump.',
    category: 'Project Explorer',
    badge: 'Tree & Symbols',
    description: 'Quickly browse project hierarchies, locate files via fuzzy search (Cmd+P), and monitor git modification markers in the tree.',
    features: ['Fuzzy file search (Cmd+P)', 'Git status markers', 'Instant symbol navigation']
  },
  {
    id: 'settings',
    title: 'Settings',
    caption: 'Fine-grained configuration for model providers, editor keymaps, and project indexing.',
    category: 'Settings',
    badge: 'Preferences',
    description: 'Customize editor font size, keybindings, language server flags, AI model routing, and local index filters.',
    features: ['Model provider configuration', 'Keymap presets', 'Ignore patterns (.coremindignore)']
  }
];

export const TECHNOLOGIES: TechItem[] = [
  {
    title: 'Electron',
    description: 'Desktop application foundation.',
    details: 'Native desktop container delivering hardware-accelerated rendering and macOS menu and window integration.',
    tag: 'Desktop Platform'
  },
  {
    title: 'React',
    description: 'Modern interface architecture.',
    details: 'Declarative component system ensuring fast UI updates, responsive layouts, and smooth micro-interactions.',
    tag: 'Frontend Engine'
  },
  {
    title: 'TypeScript',
    description: 'Reliable and maintainable development.',
    details: 'Strict static type safety across both frontend application components and background process communication.',
    tag: 'Core Language'
  },
  {
    title: 'AI Models',
    description: 'AI-powered coding and reasoning.',
    details: 'Deep reasoning models tailored for multi-step software engineering, code comprehension, and verification.',
    tag: 'Intelligence Layer'
  },
  {
    title: 'Local Development',
    description: 'Designed around local project workflows.',
    details: 'Direct interaction with your local file system, existing Git branches, CLI packages, and build tooling.',
    tag: 'Workflow Safety'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Manoj S Arya',
    username: 'Manojarya0207',
    role: 'Lead Developer & AI/ML Engineer',
    github: 'https://github.com/Manojarya0207',
    initials: 'MSA',
    description: "Leading CoreMind's architecture, AI integration, backend development, and overall product development.",
    avatarUrl: 'https://github.com/Manojarya0207.png'
  },
  {
    name: 'Yashwant Rangrej',
    username: 'Yashwant-Rangrej',
    role: 'Frontend & UI Engineer',
    github: 'https://github.com/Yashwant-Rangrej',
    initials: 'YR',
    description: 'Building the CoreMind interface and focusing on frontend architecture, user experience, and developer workflows.',
    avatarUrl: 'https://github.com/Yashwant-Rangrej.png'
  },
  {
    name: 'Yashas S',
    username: 'yashas1624',
    role: 'Software Developer & Product Engineer',
    github: 'https://github.com/yashas1624',
    initials: 'YS',
    description: "Contributing to CoreMind's application development, features, testing, and overall product implementation.",
    avatarUrl: 'https://github.com/yashas1624.png'
  }
];

export const DOCUMENTATION_CARDS = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Install CoreMind and create your first project.',
    buttonText: 'Get Started',
    link: '/docs#getting-started'
  },
  {
    id: 'documentation',
    title: 'Documentation',
    description: "Learn how CoreMind's features and AI workflows work.",
    buttonText: 'Read Documentation',
    link: '/docs'
  },
  {
    id: 'github',
    title: 'GitHub',
    description: 'Explore the project and follow development.',
    buttonText: 'View on GitHub',
    link: 'https://github.com/NVIDIA-CoreMind'
  }
];

export interface DocArticle {
  slug: string;
  title: string;
  readTime: string;
  summary: string;
  content: string;
}

export interface DocSection {
  id: string;
  title: string;
  description: string;
  articles: DocArticle[];
}

export const DOCS_DATA: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the essentials of CoreMind and get up and running on macOS.',
    articles: [
      {
        slug: 'quickstart',
        title: 'Quickstart Guide',
        readTime: '3 min',
        summary: 'Overview of CoreMind concepts, workspace loading, and initial interaction.',
        content: `CoreMind is a modern AI-powered desktop IDE designed for macOS. It combines an ultra-fast code editor with project-aware AI assistance, multi-file agent workflows, and an integrated native terminal.

To get started:
1. Launch CoreMind from your macOS Applications directory.
2. Select File → Open Folder (Cmd+O) and choose any local Git repository or codebase.
3. CoreMind automatically creates a local index of your project files, dependencies, and symbols.
4. Press Cmd+K inside the editor to summon Inline Assist, or press Cmd+L to open the AI Assistant drawer.`
      },
      {
        slug: 'prerequisites',
        title: 'System Prerequisites',
        readTime: '2 min',
        summary: 'Hardware, operating system, and developer tooling requirements.',
        content: `CoreMind runs natively on Apple Silicon Macs.

Requirements:
- macOS 12.0 (Monterey) or later (macOS 14 Sonoma or macOS 15 Sequoia recommended)
- Apple Silicon processor (M1, M2, M3, M4 series)
- 8 GB RAM minimum (16 GB recommended)
- 1.5 GB free disk space`
      }
    ]
  },
  {
    id: 'ai-workflows',
    title: 'AI Workflows',
    description: 'Understand inline completions, context referencing, and agent execution.',
    articles: [
      {
        slug: 'inline-assists',
        title: 'Inline AI Coding (Cmd+K)',
        readTime: '3 min',
        summary: 'Generate, refactor, and edit code in place with natural language prompts.',
        content: `Press Cmd+K inside any active file to trigger the inline assist bar:
- 'Add type annotations to function parameters'
- 'Implement error handling for network timeouts'
- 'Refactor to functional array operations'

CoreMind generates inline diffs directly in your editor. Press Enter to accept or Esc to discard.`
      },
      {
        slug: 'agent-tasks',
        title: 'Agentic Development',
        readTime: '4 min',
        summary: 'Multi-file task planning, coordinated execution, and verification.',
        content: `The CoreMind Agent assists with tasks that span multiple files:
1. User Request: Describe what you want to achieve.
2. AI Reasoning: The agent analyzes project dependencies and files.
3. Plan: A structured checklist is presented for review.
4. Code Changes: Diffs are previewed across all target files.
5. Verification: Tests are executed in the integrated terminal to confirm stability.`
      }
    ]
  }
];

export const CHANGELOG_DATA = [
  {
    version: '0.1.0',
    date: 'September 2026',
    tag: 'v0.1.0',
    isLatest: true,
    summary: 'Initial official release of CoreMind for macOS Apple Silicon.',
    highlights: [
      'Native Apple Silicon desktop binary (.dmg)',
      'High-performance code editor core',
      'Local codebase and symbol indexing',
      'Inline Code Assistant (Cmd+K)',
      'AI Assistant Drawer (Cmd+L)',
      'Multi-file Agent workflow with verification',
      'Integrated macOS native zsh terminal'
    ],
    sections: [
      {
        title: 'New Features',
        items: [
          'High-performance Monaco code editor core with low-latency input',
          'Inline Code Assistant (Cmd+K) with diff previews',
          'Workspace AI Assistant (Cmd+L) with @file context referencing',
          'Multi-file Agent workflow with approval checkpoints',
          'Integrated native macOS terminal emulator with zsh/bash'
        ]
      },
      {
        title: 'Platform Support',
        items: [
          'Native Apple Silicon (ARM64) binary for M1/M2/M3/M4 Macs',
          'macOS window management with traffic lights and native menu bar integration'
        ]
      }
    ]
  }
];

export interface UnderstandingStepItem {
  step: string;
  title: string;
  description: string;
}

export interface AgentWorkflowStepItem {
  phase: string;
  title: string;
  desc: string;
  detail: string;
}

export const AI_UNDERSTANDING_WORKFLOW: UnderstandingStepItem[] = [
  {
    step: '01',
    title: 'Your Project',
    description: 'Active files, project structure, dependencies, and git branch state.'
  },
  {
    step: '02',
    title: 'CoreMind Context',
    description: 'Semantic vector graph and language server symbols parsed locally.'
  },
  {
    step: '03',
    title: 'AI Understanding',
    description: 'Deep architectural reasoning over relationships between components.'
  },
  {
    step: '04',
    title: 'Suggested Changes',
    description: 'Precise unified diffs matching project conventions and typing rules.'
  }
];

export const AI_AGENT_WORKFLOW: AgentWorkflowStepItem[] = [
  {
    phase: 'Ask',
    title: 'Describe',
    desc: 'Describe your goal in plain language or select code to inspect.',
    detail: 'Example: "Add authentication middleware to /generate endpoint."'
  },
  {
    phase: 'Plan',
    title: 'Plan',
    desc: 'CoreMind generates a structured multi-step plan of action.',
    detail: 'Outlines required packages, new files, and modified handlers.'
  },
  {
    phase: 'Build',
    title: 'Build',
    desc: 'Generates coordinated changes across all affected project files.',
    detail: 'Edits server routes, token helpers, and client headers.'
  },
  {
    phase: 'Verify',
    title: 'Verify',
    desc: 'Verifies syntax with language servers and runs test suites.',
    detail: 'Runs tests in the terminal to catch regressions early.'
  }
];



export const INSTALLATION_STEPS = [
  {
    step: 1,
    title: 'Download CoreMind for macOS',
    description: 'Get the official Apple Silicon disk image (.dmg).'
  },
  {
    step: 2,
    title: 'Open the downloaded package',
    description: 'Double-click CoreMind-0.1.0-arm64.dmg in your Downloads directory.'
  },
  {
    step: 3,
    title: 'Drag CoreMind to Applications',
    description: 'Drag the CoreMind icon into your macOS Applications folder.'
  },
  {
    step: 4,
    title: 'Launch CoreMind',
    description: 'Open CoreMind from Launchpad, Finder, or Spotlight (Cmd + Space).'
  }
];

export const SYSTEM_REQUIREMENTS = [
  {
    category: 'Operating System',
    spec: 'macOS 12.0 (Monterey) or later',
    detail: 'Optimized specifically for macOS window management and Apple Silicon.'
  },
  {
    category: 'Processor Architecture',
    spec: 'Apple Silicon (M1, M2, M3, M4 series)',
    detail: 'Native ARM64 binary with hardware-accelerated processing.'
  },
  {
    category: 'Memory (RAM)',
    spec: '8 GB minimum (16 GB recommended)',
    detail: 'Fluid multi-file indexing and real-time diff rendering.'
  }
];

