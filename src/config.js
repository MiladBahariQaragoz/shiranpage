// Project start date: February 3, 2026
export const PROJECT_START_DATE = new Date("2026-02-03");

/**
 * Calculate the current project week based on the start date
 * @returns {number} Current week number (1-indexed)
 */
export const getCurrentProjectWeek = () => {
    const now = new Date();
    const diffTime = Math.abs(now - PROJECT_START_DATE);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const weekNumber = Math.ceil(diffDays / 7);

    // Return at least week 1
    return Math.max(1, weekNumber);
};

/**
 * Milestone data structure with week ranges
 */
export const MILESTONES = [
    {
        id: 0,
        title: "Project Setup & Alignment",
        weekStart: 0,
        weekEnd: 1,
        description: "ROS2, Git, Architecture",
        details: "Setting up the development environment, version control, and defining the system architecture."
    },
    {
        id: 1,
        title: "Module Prototypes",
        weekStart: 2,
        weekEnd: 5,
        description: "Perception, Estimation, Planning, Control",
        details: "Developing initial prototypes for each core module of the autonomous driving system."
    },
    {
        id: 2,
        title: "Full-Stack Integration",
        weekStart: 6,
        weekEnd: 8,
        description: "Simulated Lap",
        details: "Integrating all modules and testing the complete system in simulation."
    },
    {
        id: 3,
        title: "Optimization & Robustness",
        weekStart: 9,
        weekEnd: 11,
        description: "Performance Tuning",
        details: "Optimizing algorithms, improving robustness, and handling edge cases."
    },
    {
        id: 4,
        title: "Hardware Implementation & Racing",
        weekStart: 12,
        weekEnd: 20,
        description: "Real-World Testing",
        details: "Deploying to physical hardware and competing in autonomous racing events."
    }
];

/**
 * Tech stack modules for the project
 */
export const TECH_STACK = [
    {
        id: 1,
        name: "Perception",
        description: "Environment modeling and sensor data processing",
        icon: "👁️",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 2,
        name: "Estimation",
        description: "Localization, state estimation, and uncertainty handling",
        icon: "📍",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 3,
        name: "Planning",
        description: "Trajectory generation and decision-making",
        icon: "🗺️",
        color: "from-green-500 to-emerald-500"
    },
    {
        id: 4,
        name: "Control",
        description: "Motion control, stability, and tracking",
        icon: "🎮",
        color: "from-orange-500 to-red-500"
    }
];
