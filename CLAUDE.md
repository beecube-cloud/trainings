# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Training and consultancy website for "Esthoj Training & Consultancy" built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Static content site with WhatsApp integration for course inquiries.

## Commands

```bash
pnpm dev        # Start dev server (localhost:3000)
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

Package manager is **pnpm** (v9.12.3).

## Architecture

- **App Router**: Pages in `app/` using Next.js file-based routing. Server Components by default; `"use client"` directive for interactive components.
- **Section-based composition**: Pages compose reusable section components from `components/sections/` (hero, courses, contact, past trainings, etc.).
- **UI layer**: shadcn/ui (New York style) in `components/ui/` with Radix UI primitives. Button variants use Class Variance Authority (CVA).
- **Static data**: All course data, navigation links, and content live in `lib/consts.ts`. No database or external API.
- **Types**: Shared interfaces in `lib/types.ts`.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss`. Custom theme colors defined as CSS variables in `app/globals.css` (primary: `#000099`, secondary: `#ed1c25`).
- **Animations**: Framer Motion for transitions and viewport-triggered animations. Custom `useScrollParallax` hook in `hooks/`.

## Key Conventions

- Path alias: `@/*` maps to project root
- Component files: kebab-case (`hero-section.tsx`), component names: PascalCase
- Images go in `public/assets/` (hero, training, projects) or `public/images/courses/`
- Use Next.js `<Image>` component for all images
- Adding shadcn components: `npx shadcn@latest add <component>`
