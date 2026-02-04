# 🏎️ RoboRacer - Shiran

A stunning, interactive landing page for the **RoboRacer** autonomous driving project at **FAU Erlangen-Nürnberg**. Built with modern web technologies and featuring a cyberpunk racing aesthetic with real-time 3D visualization.

🌐 **[Live Preview](https://shiranpage.vercel.app/)** - View the deployed site

[![Project Status](https://img.shields.io/badge/Status-Active-success)](https://github.com/farhadvaseghi/RoboRacer-Shiran)
[![Start Date](https://img.shields.io/badge/Start%20Date-Feb%203%2C%202026-blue)](https://github.com/farhadvaseghi/RoboRacer-Shiran)
[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://shiranpage.vercel.app/)

---

## ✨ Features

### 🎮 Interactive 3D Hero Section
- **Real 3D Car Model**: High-quality GLB model with dynamic lighting
- **Cinematic Camera**: Orbital controls with smooth interactions
- **Advanced Lighting**: Multi-source lighting setup with rim lights and environment mapping
- **Telemetry HUD**: Racing-inspired heads-up display with project status
- **Speed Lines**: Animated background effects for dynamic feel

### 📅 Live Project Timeline
- **Dynamic Week Tracking**: Automatically calculates current project week from start date
- **Visual State Indicators**: Active, completed, and upcoming milestones with distinct styling
- **Progress Animations**: Smooth transitions and progress bars for active phases
- **5 Major Milestones**: From setup to hardware implementation (Weeks 0-20)

### 🏗️ Technical Architecture Display
- **4 Core Modules**: Perception, Estimation, Planning, and Control
- **Professional Icons**: Custom SVG icons for each module
- **Interactive Cards**: Hover effects with racing-themed borders
- **Status Indicators**: Real-time operational status for each module

### 👥 Team Showcase
- **5 Team Members**: Complete team roster with roles
- **Hexagonal Avatars**: Unique geometric avatar frames with status indicators
- **Social Integration**: Sliding LinkedIn and GitHub links on hover
- **Racing Aesthetics**: Red border animations and gradient effects

### 🎨 Premium Design System
- **Custom Color Palette**: Racing-inspired colors (Race Red, Velocity Orange, Telemetry Blue)
- **Professional Typography**: Orbitron, Space Grotesk, and JetBrains Mono fonts
- **Gradient System**: Speed gradients, depth gradients, and glow effects
- **Carbon Fiber Textures**: Realistic material effects
- **Responsive Layout**: Optimized for all screen sizes

---

## 🛠️ Tech Stack

### Core Framework
- **[React 18](https://react.dev/)** - Modern UI library with hooks
- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server

### 3D Graphics
- **[Three.js](https://threejs.org/)** - WebGL 3D graphics library
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers and abstractions for R3F
- **[@react-three/gltf](https://github.com/pmndrs/gltfjsx)** - GLTF model loader

### Styling & Animation
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library
- **[PostCSS](https://postcss.org/)** - CSS transformations
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - Automatic vendor prefixes

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16.x or higher
- **npm** 7.x or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/farhadvaseghi/RoboRacer-Shiran.git
   cd RoboRacer-Shiran
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

### Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview production build locally |

---

## 📁 Project Structure

```
ShiranPage/
├── public/
│   ├── car.glb              # 3D car model (GLB format)
│   ├── car.ply              # Legacy 3D car model (PLY format)
│   └── team/                # Team member profile images
│       ├── milad.png
│       ├── kazhal.png
│       ├── sadegh.png
│       ├── barabadi.png
│       └── farhad.png
├── src/
│   ├── components/
│   │   ├── Hero3D.jsx       # 3D hero section with car model
│   │   ├── LiveTimeline.jsx # Dynamic project timeline
│   │   ├── TechStack.jsx    # Technical architecture cards
│   │   ├── Team.jsx         # Team member showcase
│   │   ├── Footer.jsx       # Footer with links and info
│   │   └── SpeedLines.jsx   # Animated background effect
│   ├── App.jsx              # Main application component
│   ├── config.js            # Project configuration and data
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles and custom classes
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # This file
```

---

## ⚙️ Configuration

### Project Timeline

Edit `src/config.js` to update the project start date:

```javascript
export const PROJECT_START_DATE = new Date("2026-02-03");
```

### Milestones

Modify the `MILESTONES` array in `src/config.js`:

```javascript
export const MILESTONES = [
  {
    id: 0,
    title: "Project Setup & Alignment",
    weekStart: 0,
    weekEnd: 1,
    description: "ROS2, Git, Architecture",
    details: "Setting up the development environment..."
  },
  // ... more milestones
];
```

### Tech Stack Modules

Update the `TECH_STACK` array in `src/config.js`:

```javascript
export const TECH_STACK = [
  {
    id: 1,
    name: "Perception",
    description: "Environment modeling and sensor data processing",
    icon: "👁️",
    color: "from-blue-500 to-cyan-500"
  },
  // ... more modules
];
```

### Team Members

Edit the `TEAM_MEMBERS` array in `src/components/Team.jsx`:

```javascript
const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Milad Bahari Qaragoz',
    role: 'Estimation & Web_Developement',
    status: 'active',
    image: '/team/milad.png',
    linkedin: 'https://www.linkedin.com/in/milad-bahari-qaragöz/',
    github: 'https://github.com/MiladBahariQaragoz'
  },
  // ... more team members
];
```

### Custom Theme Colors

Modify `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  'race-red': '#E10600',
  'velocity-orange': '#FF6B00',
  'carbon-black': '#0D0D0D',
  'titanium': '#1A1A1A',
  'steel-gray': '#2A2A2A',
  'aluminum': '#3F3F3F',
  'data-green': '#00FF41',
  'warning-amber': '#FFB800',
  'telemetry-blue': '#00D9FF',
}
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Race Red | `#E10600` | Primary accent, active states |
| Velocity Orange | `#FF6B00` | Secondary accent, gradients |
| Carbon Black | `#0D0D0D` | Main background |
| Titanium | `#1A1A1A` | Section backgrounds |
| Steel Gray | `#2A2A2A` | Card backgrounds |
| Aluminum | `#3F3F3F` | Borders, dividers |
| Data Green | `#00FF41` | Success, active indicators |
| Warning Amber | `#FFB800` | Warnings, alerts |
| Telemetry Blue | `#00D9FF` | Info, links, highlights |

### Typography

- **Display Font**: Orbitron (700, 900) - Headers and titles
- **Body Font**: Space Grotesk (400-700) - Body text and descriptions
- **Mono Font**: JetBrains Mono (400-600) - Telemetry data and code

### Custom CSS Classes

```css
.gradient-text          /* Animated gradient text effect */
.telemetry-data         /* Monospace data display */
.card-hover             /* Interactive card hover effects */
.carbon-fiber           /* Carbon fiber texture background */
.racing-border          /* Animated racing border */
.diagonal-accent        /* Diagonal accent line */
.glow-active            /* Glowing active state */
.speed-line             /* Animated speed line */
```

---

## 🎯 Key Features Explained

### Dynamic Timeline System

The timeline automatically calculates the current project week based on the start date and applies visual states:

- **Active** (🔴): Current milestone with glowing red border and progress bar
- **Completed** (✅): Past milestones with green checkmark and dimmed appearance
- **Upcoming** (○): Future milestones with default gray styling

### 3D Car Visualization

The hero section features a high-quality 3D car model with:
- **GLB Model**: Optimized 3D model loaded via `useGLTF`
- **Dynamic Lighting**: Multi-source setup with ambient, directional, point, and spot lights
- **Subtle Animation**: Gentle bobbing motion for visual interest
- **Internal Illumination**: Point light inside the model for glow effect
- **Environment Mapping**: Sunset preset for realistic reflections

### Interactive Team Cards

Team member cards feature sophisticated hover interactions:
- **Hexagonal Frames**: Unique geometric avatars using CSS `clip-path`
- **Status Indicators**: Animated pulse dots for active members
- **Sliding Social Links**: LinkedIn and GitHub icons slide in on hover
- **Racing Borders**: Red border animation on hover

---

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

---

## 👥 Team

| Name | Role | Links |
|------|------|-------|
| **Milad Bahari Qaragoz** | Estimation & Web Development | [LinkedIn](https://www.linkedin.com/in/milad-bahari-qaragöz/) • [GitHub](https://github.com/MiladBahariQaragoz) |
| **Kazhal Shirvani** | Control | [LinkedIn](https://www.linkedin.com/in/kazhal-shirvani-67376b1b8/) • [GitHub](https://github.com/kazhalshirvani) |
| **Mohammadsadegh Shoushtari** | Perception | [LinkedIn](https://www.linkedin.com/in/sadegh-sh) • [GitHub](https://github.com/sadeghshoushtari) |
| **Mohammad Barabadi** | Planning | [LinkedIn](https://www.linkedin.com/in/mohammadbrd/) • [GitHub](https://github.com/mohammadbrd) |
| **Farhad Vaseghi** | Perception | [LinkedIn](https://www.linkedin.com/in/farhad-vaseghi-0986953a8/) • [GitHub](https://github.com/farhadvaseghi) |

---

## 📄 License

© 2026 RoboRacer Team. All rights reserved.

---

## 🔗 Links

- **GitHub Repository**: [RoboRacer-Shiran](https://github.com/farhadvaseghi/RoboRacer-Shiran)
- **FAU Chair of Automatic Control**: [ac.tf.fau.eu](https://www.ac.tf.fau.eu/)
- **FAU Erlangen-Nürnberg**: [fau.eu](https://www.fau.eu)

---

## 🙏 Acknowledgments

- **FAU Erlangen-Nürnberg** - For supporting this autonomous driving research project
- **Chair of Automatic Control** - For providing resources and guidance
- **React Three Fiber Community** - For excellent 3D web development tools

---

<div align="center">

**Built with ❤️ by the Milad Bahari Qaragoz**

*Project Start: February 3, 2026*

</div>
