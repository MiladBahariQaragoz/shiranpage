# RoboRacer Landing Page - System Architecture and Overview

This document provides a detailed explanation of the RoboRacer landing page system, detailing its purpose, functionality, and internal subsystems.

## 1. System Overview
The RoboRacer landing page is a specialized web application built to showcase the autonomous driving project at FAU Erlangen-Nürnberg. It acts as an interactive, real-time dashboard and promotional site, combining 3D graphics, dynamic data tracking, and a premium "cyberpunk racing" design system.

### Purpose
- **Project Visualization**: Presents the autonomous vehicle project using an interactive 3D model.
- **Progress Tracking**: Tracks the ongoing timeline and milestones of the project dynamically.
- **Technical Showcase**: Highlights the core software architecture (Perception, Estimation, Planning, Control).
- **Team Introduction**: Displays the team members, their roles, and professional links.

### How it Works
The application is built as a Single Page Application (SPA) using React 18 and Vite. It leverages modern web technologies to render 3D scenes (Three.js via React Three Fiber) and animate DOM elements (Framer Motion). The data driving the timeline and team members is decoupled into a configuration file (`src/config.js`), allowing easy updates without altering component logic.

## 2. Core Subsystems

### 2.1. 3D Rendering Subsystem (`Hero3D.jsx`)
This subsystem is responsible for the visual centerpiece of the application:
- **Engine**: Uses `@react-three/fiber` to wrap Three.js functionality into React components, and `@react-three/drei` for helpful abstractions (like camera controls and environment maps).
- **Asset Loading**: Loads a GLB 3D model of the vehicle.
- **Lighting and Environment**: Implements a multi-source lighting setup (ambient, directional, point, and spot lights) and applies an environment map for realistic reflections and a premium aesthetic.
- **Interaction**: Provides orbital camera controls allowing users to pan, zoom, and rotate around the vehicle.

### 2.2. Dynamic Timeline Tracking Subsystem (`LiveTimeline.jsx`)
This module manages the project's chronological progress:
- **Time Calculation**: Calculates the current project week relative to a defined start date (`PROJECT_START_DATE` in `config.js`).
- **State Management**: Categorizes milestones into three states: "Active", "Completed", and "Upcoming".
- **Visual Feedback**: Renders progress bars, glowing indicators, and distinct styling based on the current state of each milestone, providing an automated, living timeline.

### 2.3. Technical Architecture Display Subsystem (`TechStack.jsx`)
This section visualizes the core modules of the autonomous driving software stack:
- **Modules**: Perception, Estimation, Planning, and Control.
- **Data Driven**: Reads from the `TECH_STACK` array in the configuration.
- **UI/UX**: Uses interactive cards with hover effects, custom SVG icons, and real-time operational status indicators to represent complex software components in an accessible format.

### 2.4. Team Showcase Subsystem (`Team.jsx`)
Manages the presentation of the project contributors:
- **Profiles**: Renders individual team member cards with their names, roles, and status.
- **Geometric Avatars**: Uses CSS `clip-path` to create hexagonal avatar frames, fitting the high-tech theme.
- **Interactions**: Features sliding social links (LinkedIn, GitHub) and animated racing borders on hover.

### 2.5. Styling and Animation Engine
The visual language and motion design are handled globally:
- **Tailwind CSS**: Provides utility-first styling, enabling rapid layout building and custom theme variable injection (e.g., custom colors like Race Red and Carbon Black).
- **Framer Motion**: Powers complex, smooth animations like speed lines, card transitions, and scroll-triggered reveals.
- **Custom CSS (`index.css`)**: Contains specific, non-standard visual effects such as carbon fiber textures, gradient text, and glow states.

## 3. Data Management and Configuration
The system isolates content from presentation. The `src/config.js` file acts as a local database containing:
- Project start dates
- Milestone definitions
- Technical stack details
- Team member information
This architecture ensures that non-technical team members can update project details by modifying a single file without needing to understand the underlying React components.
