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
  category: 'core' | 'ai' | 'tooling';
  bullets: string[];
  icon: string;
  badge?: string;
}

export interface ScreenshotItem {
  id: string;
  title: string;
  caption: string;
  category: string;
  imagePath?: string;
  placeholderText: string;
  features: string[];
}

export interface DocSection {
  id: string;
  title: string;
  description: string;
  articles: {
    slug: string;
    title: string;
    readTime: string;
    summary: string;
    content: string;
  }[];
}

export interface ChangelogRelease {
  version: string;
  date: string;
  tag: string;
  isLatest: boolean;
  summary: string;
  highlights: string[];
  sections: {
    title: string;
    items: string[];
  }[];
}

export const PRODUCT_INFO = {
  name: 'CoreMind',
  tagline: 'AI-Native Desktop IDE',
  positioning: 'AI-native desktop IDE for developers.',
  primaryHeadline: 'Build faster with an AI-native IDE.',
  subHeadline:
    'CoreMind brings AI-powered coding, codebase understanding, intelligent assistance, and developer tools into one focused desktop environment.',
  shortDescription:
    'CoreMind is an AI-native desktop IDE designed to help developers write, understand, debug, and improve code.',
  badgeText: 'AI-NATIVE DESKTOP IDE',
  platformNotice: 'Available for macOS',
  copyright: '© 2026 CoreMind. All rights reserved.',
  links: {
    github: 'https://github.com/CoreMind-IDE',
    docs: '/docs',
    download: '/download',
    features: '/features',
    changelog: '/changelog',
    privacy: '/docs#privacy',
    terms: '/docs#terms',
    contact: 'mailto:support@coremind.dev'
  }
};

export const DOWNLOAD_CONFIG: Record<string, PlatformDownload> = {
  macos: {
    name: 'macOS',
    available: true,
    version: '0.1.0',
    url: 'REPLACE_WITH_ACTUAL_DOWNLOAD_URL',
    architecture: 'Apple Silicon',
    minOS: 'macOS 12.0 (Monterey) or later',
    packageType: '.dmg (Apple Disk Image)',
    size: '94.2 MB',
    sha256: 'a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0',
    releaseDate: 'September 2026'
  },
  windows: {
    name: 'Windows',
    available: false,
    note: 'CoreMind for Windows is coming in a future release.'
  },
  linux: {
    name: 'Linux',
    available: false,
    note: 'CoreMind is currently available for macOS.'
  }
};

export const SYSTEM_REQUIREMENTS = [
  {
    category: 'Operating System',
    spec: 'macOS 12.0 (Monterey), macOS 13 (Ventura), macOS 14 (Sonoma), or macOS 15 (Sequoia)',
    detail: 'Optimized specifically for macOS system frameworks and native window management.'
  },
  {
    category: 'Processor Architecture',
    spec: 'Apple Silicon (M1, M2, M3, M4 series)',
    detail: 'Native ARM64 binary with hardware-accelerated local token processing.'
  },
  {
    category: 'System Memory (RAM)',
    spec: '8 GB unified memory minimum (16 GB recommended)',
    detail: 'Ensures fluid multi-file indexing, LSP servers, and real-time AI diff rendering.'
  },
  {
    category: 'Storage Space',
    spec: '1.5 GB available storage',
    detail: 'Covers the application bundle, language server caches, and local workspace embeddings.'
  },
  {
    category: 'Network Connection',
    spec: 'Broadband internet access',
    detail: 'Required for remote AI model streaming, package resolution, and telemetry-free updates.'
  }
];

export const INSTALLATION_STEPS = [
  {
    step: 1,
    title: 'Download CoreMind for macOS',
    description: 'Get the official Apple Silicon disk image (.dmg) from the download page.'
  },
  {
    step: 2,
    title: 'Open the downloaded package',
    description: 'Double-click CoreMind-0.1.0-arm64.dmg in your Downloads directory to mount the installer.'
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
  },
  {
    step: 5,
    title: 'Open your project and start coding',
    description: 'Select File → Open Folder... to let CoreMind index your workspace context immediately.'
  }
];

export const FEATURES: FeatureItem[] = [
  {
    id: 'ai-coding',
    title: 'AI Coding',
    description:
      'Generate, modify, explain, and improve code using AI directly inside the development environment.',
    category: 'ai',
    bullets: [
      'Inline suggestions with multi-line completions',
      'Contextual code explanations on hover',
      'Instant refactoring with preview diffs'
    ],
    icon: 'Sparkles',
    badge: 'Core Engine'
  },
  {
    id: 'codebase-understanding',
    title: 'Codebase Understanding',
    description:
      'Give AI context from your project so it can work with the code you are actually building.',
    category: 'ai',
    bullets: [
      'AST-aware repository indexing',
      'Cross-file dependency and symbol resolution',
      'Local vector store for relevant context retrieval'
    ],
    icon: 'Brain',
    badge: 'Semantic Context'
  },
  {
    id: 'ai-agent',
    title: 'AI Agent',
    description:
      'Allow CoreMind to work across files and assist with multi-step development tasks.',
    category: 'ai',
    bullets: [
      'Autonomous multi-file modification plans',
      'Interactive approval checkpoints before applying',
      'Step-by-step reasoning transparency'
    ],
    icon: 'Workflow',
    badge: 'Autonomous Tasks'
  },
  {
    id: 'intelligent-debugging',
    title: 'Intelligent Debugging',
    description:
      'Understand errors, investigate problems, and help developers resolve issues.',
    category: 'tooling',
    bullets: [
      'Stack trace interpretation and root cause analysis',
      'Proactive bug fixes suggested alongside compiler diagnostics',
      'Runtime exception inspection in terminal sessions'
    ],
    icon: 'Bug',
    badge: 'Diagnostics'
  },
  {
    id: 'multi-file-editing',
    title: 'Multi-file Editing',
    description:
      'Make coordinated changes across multiple files while keeping the project structure in context.',
    category: 'core',
    bullets: [
      'Simultaneous signature updates across consumers',
      'Unified review diff drawer',
      'Atomic rollback for multi-file changes'
    ],
    icon: 'Files',
    badge: 'Refactoring'
  },
  {
    id: 'integrated-terminal',
    title: 'Integrated Terminal',
    description:
      'Run development commands without leaving the CoreMind environment.',
    category: 'tooling',
    bullets: [
      'macOS zsh and bash shell integration',
      'AI command suggestion and output analysis',
      'Split panes with tabbed session persistence'
    ],
    icon: 'Terminal',
    badge: 'macOS Native'
  },
  {
    id: 'git-workflow',
    title: 'Git Workflow',
    description:
      'Work with source control directly inside the development environment.',
    category: 'tooling',
    bullets: [
      'Side-by-side graphical diff inspection',
      'Intelligent commit message generation',
      'Branch management and staging shortcuts'
    ],
    icon: 'GitBranch',
    badge: 'Source Control'
  },
  {
    id: 'developer-first-interface',
    title: 'Developer-first Interface',
    description:
      'Keep coding, AI assistance, project files, and development tools together in one workspace.',
    category: 'core',
    bullets: [
      'Frictionless layout with customizable panels',
      'Ultra-fast Monaco editor core with low latency',
      'Clean light developer aesthetic'
    ],
    icon: 'Layout',
    badge: 'Workspace'
  }
];

export const AI_UNDERSTANDING_WORKFLOW = [
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
  },
  {
    step: '05',
    title: 'Developer Review',
    description: 'Inspect changes side-by-side, request adjustments, or approve.'
  },
  {
    step: '06',
    title: 'Implementation',
    description: 'Atomic file updates applied directly to your disk with git rollback safety.'
  }
];

export const AI_AGENT_WORKFLOW = [
  {
    phase: 'Ask',
    title: 'Ask',
    desc: 'Describe your goal in plain language or select code to inspect.',
    detail: 'Example: "Add authentication to this application."'
  },
  {
    phase: 'Understand',
    title: 'Understand',
    desc: 'The agent analyzes routes, database schemas, and current middleware.',
    detail: 'Scans models, routes, and security configurations.'
  },
  {
    phase: 'Plan',
    title: 'Plan',
    desc: 'CoreMind generates a structured multi-step plan of action.',
    detail: 'Outlines required packages, new files, and modified handlers.'
  },
  {
    phase: 'Modify',
    title: 'Modify',
    desc: 'Generates coordinated changes across all affected project files.',
    detail: 'Edits server routes, token helpers, and client headers.'
  },
  {
    phase: 'Test',
    title: 'Test',
    desc: 'Verifies syntax with language servers and runs test suites.',
    detail: 'Runs tests in the background to catch regressions early.'
  },
  {
    phase: 'Review',
    title: 'Review',
    desc: 'Developer reviews clean diffs before accepting changes.',
    detail: 'One-click accept or granular hunk-by-hunk approval.'
  }
];

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'main-editor',
    title: 'Main Editor',
    caption: 'High-performance code editing with intelligent type checking and syntax highlights.',
    category: 'Editor',
    placeholderText: 'CoreMind Main Editor — Lightweight Clean Canvas',
    features: ['Low latency input', 'Monaco editor foundation', 'Real-time diagnostic markers']
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant',
    caption: 'Context-aware conversation drawer for rapid code generation and reasoning.',
    category: 'AI Assistant',
    placeholderText: 'CoreMind AI Assistant — Context Drawer & Prompt Panel',
    features: ['File reference tagging (@file)', 'One-click diff application', 'Multi-turn memory']
  },
  {
    id: 'file-explorer',
    title: 'File Explorer',
    caption: 'Fast workspace navigation with visual git change statuses and symbol quick-jump.',
    category: 'Project Explorer',
    placeholderText: 'CoreMind Project Explorer — Tree View & File Management',
    features: ['Fuzzy file search (Cmd+P)', 'Git status colors', 'Folder outline trees']
  },
  {
    id: 'terminal',
    title: 'Integrated Terminal',
    caption: 'macOS native zsh shell with output inspection and error diagnosis.',
    category: 'Terminal',
    placeholderText: 'CoreMind Terminal — macOS zsh Session & Diagnostics',
    features: ['Split pane layout', 'Error click-to-fix', 'ANSI true color support']
  },
  {
    id: 'project-workflow',
    title: 'Project Workflow',
    caption: 'Multi-file coordinated changes displayed in an intuitive visual diff viewer.',
    category: 'Refactoring',
    placeholderText: 'CoreMind Multi-File Refactor — Side-by-Side Unified Diffs',
    features: ['Unified diff view', 'Hunk approval controls', 'Atomic file writes']
  },
  {
    id: 'settings',
    title: 'Settings',
    caption: 'Fine-grained configuration for model providers, editor keymaps, and project indexing.',
    category: 'Configuration',
    placeholderText: 'CoreMind Preferences — Keymaps & AI Configuration',
    features: ['Custom API endpoints', 'Keybinding presets', 'Index exclusion filters']
  }
];

export const DOCS_DATA: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the essentials of CoreMind and get up and running in minutes.',
    articles: [
      {
        slug: 'quickstart',
        title: 'Quickstart Guide',
        readTime: '3 min',
        summary: 'Overview of CoreMind concepts, workspace loading, and initial interaction.',
        content: `CoreMind is an AI-native desktop IDE specifically engineered for macOS. Unlike traditional editor extensions that bolt a chatbot onto a legacy editor, CoreMind is built from the ground up to synthesize codebase understanding with fast native editing.

To get started:
1. Launch CoreMind from your Applications directory.
2. Select File -> Open Folder (Cmd+O) and choose any local Git repository or code directory.
3. CoreMind automatically creates a local index of your symbols, dependencies, and file relationships.
4. Press Cmd+K anywhere in an open file to trigger inline AI assistance, or Cmd+L to open the dedicated AI Assistant panel.`
      },
      {
        slug: 'prerequisites',
        title: 'System Prerequisites',
        readTime: '2 min',
        summary: 'Hardware, operating system, and developer tooling requirements.',
        content: `CoreMind runs natively on Apple Silicon Macs. 

Requirements:
- macOS 12.0 Monterey or higher (macOS 14 Sonoma or macOS 15 Sequoia recommended)
- Apple Silicon chip (M1, M2, M3, M4 family)
- Xcode Command Line Tools installed (run 'xcode-select --install' in Terminal if not yet present)
- 8 GB RAM minimum`
      }
    ]
  },
  {
    id: 'installation',
    title: 'Installation',
    description: 'Detailed instructions for installing and setting up CoreMind on macOS.',
    articles: [
      {
        slug: 'macos-installation',
        title: 'Installing on macOS',
        readTime: '2 min',
        summary: 'Step-by-step setup using the official DMG distribution.',
        content: `CoreMind is distributed as an Apple Silicon disk image (.dmg).

Follow these steps:
1. Download the latest release from the Download page.
2. Locate 'CoreMind-0.1.0-arm64.dmg' in your Downloads folder and double-click it.
3. In the installer window, drag the CoreMind icon into the Applications shortcut.
4. Eject the DMG disk image.
5. Open Applications and launch CoreMind.

First Launch Security:
CoreMind is signed and notarized by Apple. If prompted by macOS Gatekeeper, confirm 'Open' to permit application launch.`
      },
      {
        slug: 'cli-helper',
        title: 'Command Line Launcher (coremind)',
        readTime: '2 min',
        summary: 'Install the terminal helper to open projects directly from zsh/bash.',
        content: `You can launch CoreMind directly from your shell by installing the terminal binary:

Open CoreMind, open the Command Palette (Cmd+Shift+P), and run:
'Shell Command: Install coremind command in PATH'

Once installed, navigate to any directory and run:
coremind .`
      }
    ]
  },
  {
    id: 'projects',
    title: 'Projects & Workspaces',
    description: 'How CoreMind manages project trees, workspace indexing, and file exclusions.',
    articles: [
      {
        slug: 'opening-workspaces',
        title: 'Opening Projects',
        readTime: '3 min',
        summary: 'Opening single folders, multi-root workspaces, and remote repositories.',
        content: `CoreMind treats every open directory as a distinct workspace context.

Key Features:
- Instant file tree navigation with file search (Cmd+P)
- Automatic respect for your existing .gitignore rules
- Background symbol parsing for TypeScript, JavaScript, Python, Go, Rust, and more
- Memory-efficient background indexing that pauses during intense CPU activities`
      },
      {
        slug: 'indexing-rules',
        title: 'Configuring Indexing Rules',
        readTime: '3 min',
        summary: 'Fine-tune what files and directories CoreMind indexes for AI context.',
        content: `CoreMind honors your project's .gitignore file by default. You can also create a '.coremindignore' file in the root of your project to exclude additional build artifacts, heavy test datasets, or private secrets:

# Example .coremindignore
dist/
build/
*.min.js
test-data/
*.sqlite`
      }
    ]
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant',
    description: 'Using inline suggestions, the chat drawer, and context references.',
    articles: [
      {
        slug: 'inline-assists',
        title: 'Inline AI Coding (Cmd+K)',
        readTime: '4 min',
        summary: 'Generate, refactor, and edit code in place with natural language prompts.',
        content: `Place your cursor or select a block of code, then press Cmd+K to summon the Inline Assist prompt.

Capabilities:
- 'Refactor this function to use async/await'
- 'Add comprehensive TypeScript types'
- 'Document this module with clear JSDoc comments'
- 'Handle error boundary edge cases'

The prompt produces a clean inline diff preview. Press Enter to accept, or Esc to reject.`
      },
      {
        slug: 'chat-panel',
        title: 'AI Chat Panel (Cmd+L)',
        readTime: '4 min',
        summary: 'Multi-turn conversations with repository context and file tagging.',
        content: `Press Cmd+L to reveal the AI Assistant drawer on the right.

You can reference specific files and symbols directly using the '@' symbol:
- '@file:src/auth.ts how does the token refresh work?'
- '@symbol:DatabaseService what migrations are currently pending?'

CoreMind injects only the relevant slices of code into the model context window to maximize speed and precision.`
      }
    ]
  },
  {
    id: 'ai-agent',
    title: 'AI Agent',
    description: 'Multi-file autonomous planning and coordinated implementation.',
    articles: [
      {
        slug: 'agent-overview',
        title: 'Autonomous Multi-file Agent',
        readTime: '5 min',
        summary: 'Execute complex multi-step development tasks across multiple files.',
        content: `The CoreMind AI Agent is designed for tasks that require modifying multiple related files:
- Adding an end-to-end API route with schema validation, controller logic, and unit tests
- Migrating database models and updating all calling endpoints
- Refactoring internal library interfaces

Workflow:
1. Request: Provide the task description in the Agent panel.
2. Plan: The agent scans the workspace and presents a numbered execution plan.
3. Review: You review the proposed plan before any file modifications take place.
4. Execution: CoreMind creates atomic file edits, checks diagnostics, and stages the diffs for your final signoff.`
      }
    ]
  },
  {
    id: 'terminal',
    title: 'Integrated Terminal',
    description: 'Native macOS shell execution, pane splits, and AI error analysis.',
    articles: [
      {
        slug: 'terminal-basics',
        title: 'Terminal Integration',
        readTime: '3 min',
        summary: 'Opening sessions, keyboard shortcuts, and shell configuration.',
        content: `CoreMind features a full-fledged native terminal emulator built on macOS pty.

Key Features:
- Toggle terminal: Ctrl+\` (Backtick)
- Split pane vertically: Cmd+\\
- Inherits your default macOS login shell (zsh or bash) along with your PATH, aliases, and environment variables
- Clickable file and URL links in terminal logs`
      }
    ]
  },
  {
    id: 'git',
    title: 'Git & Version Control',
    description: 'Source control, visual diffs, and AI-assisted commit messages.',
    articles: [
      {
        slug: 'git-tools',
        title: 'Source Control Workflow',
        readTime: '3 min',
        summary: 'Inspecting diffs, staging hunks, and committing.',
        content: `CoreMind includes first-class Git integration:
- Real-time gutter indicators show added, modified, and deleted lines
- Click any gutter marker to view the prior commit state and discard changes
- Use the Source Control sidebar (Cmd+Shift+G) to stage individual files or specific hunks
- Press the Sparkle button in the commit input to generate an accurate conventional commit message based on your staged diff`
      }
    ]
  },
  {
    id: 'settings',
    title: 'Settings & Keymaps',
    description: 'Customizing keybindings, fonts, editor options, and AI configurations.',
    articles: [
      {
        slug: 'customization',
        title: 'Preferences & Keymaps',
        readTime: '3 min',
        summary: 'Configuring editor behavior and custom shortcut combinations.',
        content: `Access settings at any time via Cmd+, (Comma).

Configurable Options:
- Editor font family and font size
- Tab size, word wrap, and line height
- Keymap presets (Default CoreMind, VS Code compatibility, or Vim emulation)
- Model latency vs reasoning depth presets`
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description: 'Diagnosing common issues, resetting cache, and diagnostic reports.',
    articles: [
      {
        slug: 'common-issues',
        title: 'Resolving Common Issues',
        readTime: '3 min',
        summary: 'Step-by-step solutions for indexing delays, permissions, and network errors.',
        content: `Troubleshooting quick links:
- Indexing stuck: Run 'CoreMind: Rebuild Workspace Index' in the Command Palette (Cmd+Shift+P).
- Permission issues: Ensure CoreMind has Full Disk Access permissions in macOS System Settings -> Privacy & Security if accessing files outside your home folder.
- Network timeouts: Verify your internet connection or proxy settings.`
      }
    ]
  }
];

export const CHANGELOG_DATA: ChangelogRelease[] = [
  {
    version: '0.1.0',
    date: 'September 2026',
    tag: 'v0.1.0',
    isLatest: true,
    summary:
      'Initial official release of CoreMind for macOS. Built from the ground up for software developers on Apple Silicon.',
    highlights: [
      'Native Apple Silicon desktop binary (.dmg)',
      'Lightweight Monaco-powered code editor core',
      'Local AST & semantic codebase indexing',
      'Contextual AI Assistant with inline prompt (Cmd+K)',
      'Multi-file AI Agent with approval checkpoints',
      'Native integrated macOS terminal with zsh/bash',
      'Integrated Git source control with visual diffs'
    ],
    sections: [
      {
        title: 'New Features',
        items: [
          'AI-native editor foundation with dedicated macOS window chrome and traffic light controls.',
          'Inline Code Assistant (Cmd+K) with instant multi-line code generation and refactoring.',
          'Workspace AI Assistant (Cmd+L) with @file and @symbol semantic context injection.',
          'Multi-file AI Agent capable of planning, executing, and validating coordinated file changes.',
          'Integrated native macOS terminal emulator with split views, session history, and error diagnostics.',
          'Git status gutter decorations, visual side-by-side diff review, and staging tools.'
        ]
      },
      {
        title: 'macOS Platform Optimizations',
        items: [
          'Native Apple Silicon (ARM64) binary for low CPU overhead and high battery efficiency.',
          'Full Retina display rendering with crisp typography on macOS 12+.',
          'macOS system keybindings and Spotlight command integration.'
        ]
      },
      {
        title: 'Security & Integrity',
        items: [
          'Zero telemetry collection on local proprietary codebase files.',
          'Strict confirmation prompts prior to executing multi-file disk writes.',
          'Apple notarized application bundle.'
        ]
      }
    ]
  }
];
