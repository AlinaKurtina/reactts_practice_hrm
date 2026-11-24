## Description

A beta-version of an HRM application that allows users to explore (search for and filter based on preferences) different courses, lectures, quizzes and employees that completed them. Employee table is exportable to Excel. Users can also communicate via WebSocket connection (only one-sided communication is available so far due to task specification constraints). 

## Tech Stack & Dependencies

### Core & Build Tooling
* **React 19 (`react`, `react-dom`)** — Core UI library with **React Compiler (`babel-plugin-react-compiler`)** enabled for automatic memoization and render optimization.
* **TypeScript (`typescript` ~7.0)** — End-to-end static type safety across components, hooks, and API layers.
* **Vite (`vite` v8, `@vitejs/plugin-react`, `@rolldown/plugin-babel`)** — Fast development server and production bundler.
* **Oxc Tooling (`oxlint`, `oxfmt`)** — Rust-powered linting (`npm run lint`) and code formatting (`npm run fmt`).

### Routing, Data Fetching & State Management
* **TanStack Router (`@tanstack/react-router`, `@tanstack/router-plugin`, `@tanstack/react-router-devtools`)** — Type-safe client-side routing with automatic route generation and dev inspection tools.
* **TanStack Query (`@tanstack/react-query`)** — Asynchronous server-state caching, background synchronization, and query invalidation for Firestore data.
* **Zustand (`zustand`)** — Lightweight global client-state management (authentication session state, active filter stores).

### Backend & Services
* **Firebase (`firebase` v13)** — Cloud Firestore for employee and educational content collections (`courses`, `lectures`, `quizzes`), plus Firebase Authentication for user login and session persistence.

### UI, Styling & Utilities
* **Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`, `tw-animate-css`)** — Utility-first CSS framework with custom animations.
* **shadcn/ui & Base UI (`@shadcn/react`, `shadcn`, `@base-ui/react`)** — Accessible, unstyled headless primitives and composable UI components (tables, tabs, skeletons, avatars, inputs).
* **Styling & Typography (`class-variance-authority`, `cn`, `@fontsource-variable/inter`, `lucide-react`)** — Variant-driven component styling, class merging, self-hosted Inter variable font, and crisp SVG icons.
* **Data Export (`react-export-table-to-excel`)** — Client-side export of employee table records to Excel spreadsheets.

## How to build

### Prerequisites
* **Node.js** (v20 or higher) and **npm**
* A **Firebase** project with:
  * **Email/Password Authentication** enabled
  * **Cloud Firestore** database with `users`, `employees`, `courses`, `lectures`, and `quizzes` collections

### Installation & Setup

1. **Clone the repository and install dependencies:**
   ```bash
   git clone https://github.com/AlinaKurtina/reactts_practice_hrm/tree/main/app
   cd <project-folder>
   npm install

## Deployment

### Vercel
https://reactts-practice-hrm.vercel.app/