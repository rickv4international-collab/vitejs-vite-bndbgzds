# CLAUDE.md

## Project Overview

SCI Executive Briefing — a React + TypeScript + Vite single-page presentation app styled with Tailwind CSS.

## Tech Stack

- **Framework**: React 17
- **Language**: TypeScript 4.5
- **Bundler**: Vite 2.7
- **Styling**: Tailwind CSS 3
- **Routing**: React Router DOM 6
- **Icons**: Lucide React

## Project Structure

```
src/
  App.tsx          # Main app with all slides/sections
  main.tsx         # Entry point
  tailwind.css     # Global styles
  view/
    Home.tsx       # Home view
  favicon.svg
  logo.svg
```

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development Notes

- All presentation slides/sections are in `src/App.tsx`
- Tailwind utility classes are used throughout — avoid writing custom CSS unless necessary
- The app uses React Router for navigation between views
- TypeScript interfaces are defined at the top of `App.tsx` for slide data shapes
