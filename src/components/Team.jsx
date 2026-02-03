import { motion } from 'framer-motion'
import { useState } from 'react'

const TEAM_MEMBERS = [
    {
        id: 1,
        name: 'Milad Bahari Qaragoz',
        role: 'Estimation & Web_Developement',
        status: 'active',
        image: '/team/milad.png',  // Add your image here
        linkedin: 'https://www.linkedin.com/in/milad-bahari-qarag%C3%B6z/',
        github: 'https://github.com/MiladBahariQaragoz'
    },
    {
        id: 2,
        name: 'Kazhal Shirvani',
        role: 'Control',
        status: 'active',
        image: '/team/kazhal.png',  // Add your image here
        linkedin: 'https://linkedin.com/in/username',
        github: 'https://github.com/username'
    },
    {
        id: 3,
        name: 'Mohammadsadegh Shoushtari',
        role: 'Perception',
        status: 'active',
        image: '/team/sadegh.png',  // Add your image here
        linkedin: 'https://linkedin.com/in/username',
        github: 'https://github.com/username'
    },
    {
        id: 4,
        name: 'Team Member 4',
        role: 'Control Lead',
        status: 'active',
        linkedin: 'https://linkedin.com/in/username',
        github: 'https://github.com/username'
    },
    {
        id: 5,
        name: 'Team Member 5',
        role: 'Integration Lead',
        status: 'active',
        linkedin: 'https://linkedin.com/in/username',
        github: 'https://github.com/username'
    },
]

// LinkedIn Icon
const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
)

// GitHub Icon
const GitHubIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
)

function TeamMemberCard({ member, index }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            className="card-hover carbon-fiber p-6 rounded-lg border-2 border-aluminum text-center relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Racing border on hover */}
            <div className="absolute inset-0 border-2 border-race-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />

            {/* Hexagonal avatar frame */}
            <div className="relative w-24 h-24 mx-auto mb-4">
                {/* Hexagon shape using clip-path */}
                <div
                    className="w-full h-full bg-speed-gradient flex items-center justify-center text-3xl font-display font-bold text-white overflow-hidden"
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    }}
                >
                    {member.image ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        member.name.charAt(0)
                    )}
                </div>

                {/* Status indicator */}
                {member.status === 'active' && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-data-green border-2 border-steel-gray animate-pulse" />
                )}
            </div>

            <h3 className="font-body text-base font-bold text-white mb-2">
                {member.name}
            </h3>

            <p className="telemetry-data text-xs text-gray-400 mb-4">
                {member.role}
            </p>

            {/* Social Icons - Only icons, no text */}
            <motion.div
                className="flex justify-center gap-3 overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isHovered ? 'auto' : 0,
                    opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
            >
                <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-telemetry-blue/20 border border-telemetry-blue rounded text-telemetry-blue hover:bg-telemetry-blue hover:text-carbon-black transition-all duration-200 pointer-events-auto"
                    aria-label="LinkedIn Profile"
                >
                    <LinkedInIcon />
                </a>
                <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-500/20 border border-gray-400 rounded text-gray-300 hover:bg-gray-300 hover:text-carbon-black transition-all duration-200 pointer-events-auto"
                    aria-label="GitHub Profile"
                >
                    <GitHubIcon />
                </a>
            </motion.div>
        </motion.div>
    )
}

export default function Team() {
    return (
        <section className="min-h-screen bg-titanium py-20 px-4 relative overflow-hidden">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                        OUR TEAM
                    </h2>
                    <p className="font-body text-gray-400">
                        Engineers behind RoboRacer
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {TEAM_MEMBERS.map((member, index) => (
                        <TeamMemberCard key={member.id} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
