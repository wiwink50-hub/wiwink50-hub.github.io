# Project Information

## Overview
This is an e-commerce web application built with Vite, React, TypeScript, and Tailwind CSS. The project was migrated from Lovable to Replit on October 30, 2025.

## Tech Stack
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.19
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Form Handling**: React Hook Form + Zod
- **UI Components**: Radix UI primitives

## Project Structure
```
├── src/
│   ├── pages/          # Route pages (Index, Shop, Cart, etc.)
│   ├── components/     # Reusable UI components
│   │   └── ui/        # shadcn/ui components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   └── App.tsx        # Main application component
├── public/            # Static assets
└── vite.config.ts     # Vite configuration
```

## Development
- **Dev Server**: Runs on port 5000
- **Command**: `npm run dev`
- The workflow "Start application" is configured to automatically start the development server

## Deployment

### GitHub Pages Deployment
This project is configured for automatic deployment to GitHub Pages:

1. **Automatic Deployment**: 
   - Push to the `main` branch triggers automatic deployment
   - GitHub Actions workflow (`.github/workflows/deploy.yml`) handles the build and deployment
   
2. **GitHub Pages Setup**:
   - Go to your repository Settings → Pages
   - Under "Build and deployment", set Source to "GitHub Actions"
   - The workflow will automatically build and deploy your site

3. **Vite Configuration**:
   - Base URL is set to `/` for root directory deployment
   - Perfect for custom domains or `username.github.io` deployments
   - If deploying to `username.github.io/repo-name/`, update `base: '/repo-name/'` in `vite.config.ts`

4. **Manual Build**:
   ```bash
   npm run build        # Build for production
   npm run preview      # Preview production build locally
   ```

## Recent Changes (Oct 30, 2025)
- Migrated from Lovable to Replit
- Updated Vite config: Changed port from 8080 to 5000, host to 0.0.0.0
- Set base URL to `/` for GitHub Pages deployment
- Created GitHub Actions workflow for automatic deployment
- Configured Replit workflow to run development server
- Updated .gitignore with Replit-specific files

## Environment
- Node.js 20
- Package Manager: npm (with bun available as alternative)
