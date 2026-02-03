# RoboRacer Landing Page

A modern, immersive landing page for the RoboRacer autonomous driving project at FAU Erlangen-Nürnberg.

## Features

- **3D Hero Section**: Interactive 3D car model using React Three Fiber
- **Dynamic Timeline**: Automatically highlights current project phase based on start date (Feb 3, 2026)
- **Tech Stack Overview**: Four core modules with animated cards
- **Team Section**: Meet the engineering team
- **Dark Theme**: Cyberpunk-inspired design with cyan accents

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Three.js** - 3D graphics library

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
ShiranPage/
├── src/
│   ├── components/
│   │   ├── Hero3D.jsx          # 3D hero section with car model
│   │   ├── LiveTimeline.jsx    # Dynamic project timeline
│   │   ├── TechStack.jsx       # Technical architecture cards
│   │   ├── Team.jsx            # Team member cards
│   │   └── Footer.jsx          # Footer with links
│   ├── App.jsx                 # Main application component
│   ├── config.js               # Project configuration and data
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── postcss.config.js           # PostCSS configuration
```

## Key Features Explained

### Dynamic Timeline

The timeline automatically calculates the current project week based on the start date (February 3, 2026) and applies visual states:

- **Active**: Current milestone with glowing border
- **Completed**: Past milestones with dimmed appearance
- **Upcoming**: Future milestones with default styling

### 3D Visualization

The hero section features a 3D car model built with simple geometric shapes:
- Auto-rotating camera for dynamic presentation
- Night environment preset for dark theme consistency
- Optimized for performance on both desktop and mobile

## Customization

### Update Project Start Date

Edit `src/config.js`:

```javascript
export const PROJECT_START_DATE = new Date("2026-02-03");
```

### Modify Milestones

Edit the `MILESTONES` array in `src/config.js`

### Update Tech Stack

Edit the `TECH_STACK` array in `src/config.js`

### Customize Team Members

Edit the `TEAM_MEMBERS` array in `src/components/Team.jsx`

## License

© 2026 RoboRacer Team. All rights reserved.

## Links

- [FAU Erlangen-Nürnberg](https://www.fau.eu)
