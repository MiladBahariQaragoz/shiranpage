# RoboRacer Shiran Landing Page

A stunning, interactive landing page for the RoboRacer autonomous driving project at FAU Erlangen-Nürnberg. Built with modern web technologies and featuring a cyberpunk racing aesthetic with real-time 3D visualization.

[Live Preview](https://shiranpage.vercel.app/)

## System Overview

For a complete breakdown of the system architecture and its subsystems, please refer to [system.md](./system.md).

## Features

### Interactive 3D Hero Section
* Real 3D Car Model: High-quality GLB model with dynamic lighting
* Cinematic Camera: Orbital controls with smooth interactions
* Advanced Lighting: Multi-source lighting setup with rim lights and environment mapping
* Telemetry HUD: Racing-inspired heads-up display with project status
* Speed Lines: Animated background effects for dynamic feel

### Live Project Timeline
* Dynamic Week Tracking: Automatically calculates current project week from start date
* Visual State Indicators: Active, completed, and upcoming milestones with distinct styling
* Progress Animations: Smooth transitions and progress bars for active phases
* Major Milestones: From setup to hardware implementation

### Technical Architecture Display
* Core Modules: Perception, Estimation, Planning, and Control
* Professional Icons: Custom SVG icons for each module
* Interactive Cards: Hover effects with racing-themed borders
* Status Indicators: Real-time operational status for each module

### Team Showcase
* Team Roster: Complete team roster with roles
* Hexagonal Avatars: Unique geometric avatar frames with status indicators
* Social Integration: Sliding LinkedIn and GitHub links on hover
* Racing Aesthetics: Red border animations and gradient effects

## Tech Stack

### Core Framework
* React 18: Modern UI library with hooks
* Vite: Lightning-fast build tool and dev server

### 3D Graphics
* Three.js: WebGL 3D graphics library
* React Three Fiber: React renderer for Three.js
* @react-three/drei: Useful helpers and abstractions for R3F
* @react-three/gltf: GLTF model loader

### Styling and Animation
* Tailwind CSS: Utility-first CSS framework
* Framer Motion: Production-ready animation library
* PostCSS: CSS transformations
* Autoprefixer: Automatic vendor prefixes

## Getting Started

### Prerequisites
* Node.js 16.x or higher
* npm 7.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/farhadvaseghi/RoboRacer-Shiran.git
   cd RoboRacer-Shiran
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Build Commands

* `npm run dev`: Start development server with hot reload
* `npm run build`: Build production bundle to `dist/`
* `npm run preview`: Preview production build locally

## Configuration

The project uses a central configuration file located at `src/config.js` to manage data without changing component logic. You can update the timeline, technical stack details, and team members directly in this file. Theme colors can be customized in `tailwind.config.js`.

## Deployment

Build for production using `npm run build`. This creates an optimized production build in the `dist/` directory. You can easily deploy this using Vercel or Netlify.

## License

Copyright 2026 RoboRacer Team. All rights reserved.
