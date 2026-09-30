# CoreMind — Official macOS Download & Marketing Website

This repository contains the official, production-ready marketing and download website for **CoreMind**, an AI-native desktop IDE for software developers.

## Design Philosophy

- **White Theme Only**: Consistent light aesthetics with white surfaces (`#ffffff`), subtle off-white backgrounds (`#fafafa`, `#f8fafc`), clean gray borders (`#e2e8f0`), and refined blue accents (`#2563eb`).
- **No Emojis**: Crisp, minimal vector iconography from Lucide Icons throughout all UI and copy.
- **Developer-Centric**: Clear technical specifications, keyboard shortcuts, code diff representations, and realistic desktop IDE previews.

---

## Supported Platform & Architecture

CoreMind is currently available exclusively for **macOS**:
- **Architecture**: Apple Silicon (M1, M2, M3, M4 series)
- **Minimum OS**: macOS 12.0 (Monterey) or later
- **Packaging**: macOS Disk Image (`.dmg`), Apple Notarized binary

### Future Platform Support

The download architecture is structured via `PlatformDownload` in [`src/data/product.ts`](file:///Users/manojsarya/Documents/My%20Projects/CoreMind/src/data/product.ts):

```typescript
export interface PlatformDownload {
  name: string;
  available: boolean;
  version?: string;
  url?: string;
  architecture?: string;
  minOS?: string;
  size?: string;
  sha256?: string;
}
```

To enable future Windows releases, simply update `DOWNLOAD_CONFIG.windows.available = true` and provide the corresponding `.msi`/`.exe` URL and architecture without needing to redesign the website.

---

## Website Routes

| Route | Description |
|---|---|
| `/` | Primary marketing homepage with Hero, IDE Preview, Features, AI Workflows, Product Gallery, and Download section |
| `/download` | Dedicated macOS download page with installation steps (1–5), system requirements, and SHA-256 verification |
| `/features` | Deep dive into all 8 CoreMind capabilities with code examples and architecture highlights |
| `/docs` | 3-column documentation reader with search filter, keyboard shortcuts, and categorized guides |
| `/changelog` | Chronological release history (Initial v0.1.0 macOS release) |

---

## Configuration & Assets

All release metadata, versions, download URLs, and feature copies are centrally managed in:
- [`src/data/product.ts`](file:///Users/manojsarya/Documents/My%20Projects/CoreMind/src/data/product.ts)

### Configuring the Real Download URL
In [`src/data/product.ts`](file:///Users/manojsarya/Documents/My%20Projects/CoreMind/src/data/product.ts):
```typescript
export const DOWNLOAD_CONFIG = {
  macos: {
    name: 'macOS',
    available: true,
    version: '0.1.0',
    url: 'https://releases.coremind.dev/v0.1.0/CoreMind-0.1.0-arm64.dmg', // Replace placeholder
    architecture: 'Apple Silicon',
    ...
  }
}
```

### Adding Real Desktop Screenshots
To replace the vector placeholder in the product gallery with actual application screenshots:
1. Place image files in `src/assets/screenshots/` (e.g., `main-editor.png`).
2. Update the `imagePath` property in `SCREENSHOTS` array in [`src/data/product.ts`](file:///Users/manojsarya/Documents/My%20Projects/CoreMind/src/data/product.ts).

---

## Development & Building

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linter
npm run lint

# Run production build & type checks
npm run build

# Preview production build
npm run preview
```

---

## CI / CD Pipelines

This repository is configured with automated GitHub Actions pipelines located in [`.github/workflows/`](file:///Users/manojsarya/Documents/My%20Projects/CoreMind/.github/workflows/):

### 1. Continuous Integration (CI) — [`ci.yml`](file:///Users/manojsarya/Documents/My%20Projects/CoreMind/.github/workflows/ci.yml)
- **Triggers**: Pull requests targeting `main`, pushes to feature branches, and manual dispatch.
- **Tasks**:
  - Sets up Node.js 20 LTS with npm dependency caching.
  - Runs `npm ci` for deterministic, clean installs.
  - Runs `npm run lint` (`oxlint`) to catch code style and React hook violations.
  - Runs `npm run build` (`tsc -b && vite build`) to enforce strict TypeScript safety and bundling integrity.
  - Automatically cancels redundant in-flight runs when new commits are pushed (`concurrency: cancel-in-progress: true`).

### 2. Continuous Deployment (CD) — [`cd.yml`](file:///Users/manojsarya/Documents/My%20Projects/CoreMind/.github/workflows/cd.yml)
- **Triggers**: Pushes to `main` branch and manual dispatch (`workflow_dispatch`).
- **Tasks**:
  - Builds the production distribution with customizable `BASE_PATH` (defaults to `/` or repository subpath).
  - Automatically generates `404.html` fallback for seamless client-side SPA routing on GitHub Pages.
  - Uploads the artifact using `@actions/upload-pages-artifact`.
  - Deploys automatically to **GitHub Pages** via `@actions/deploy-pages`.

#### Enabling GitHub Pages in your GitHub Repository:
1. Navigate to your repository on GitHub: `https://github.com/NVIDIA-CoreMind/CoreMind/settings/pages`
2. Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. Any push or pull request merge to `main` will automatically build and deploy the website.

