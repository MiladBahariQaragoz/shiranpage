import { motion } from 'framer-motion'
import { TECH_STACK } from '../config'

// Professional SVG Icons (replacing emojis)
const Icons = {
    Perception: () => (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
    ),
    Estimation: () => (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    ),
    Planning: () => (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
    ),
    Control: () => (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
    ),
}

export default function TechStack() {
    return (
        <section className="min-h-screen bg-carbon-black py-20 px-4 relative overflow-hidden">
            {/* Diagonal speed lines */}
            <div className="absolute inset-0 opacity-10">
                <div className="speed-line" style={{ top: '20%', width: '100%' }} />
                <div className="speed-line" style={{ top: '50%', width: '100%' }} />
                <div className="speed-line" style={{ top: '80%', width: '100%' }} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                        TECHNICAL ARCHITECTURE
                    </h2>
                    <p className="font-body text-gray-400">
                        Four core modules powering autonomous driving
                    </p>
                </motion.div>

                {/* Fixed Grid Layout - All cards same size */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {TECH_STACK.map((module, index) => {
                        const IconComponent = Icons[module.name]

                        return (
                            <motion.div
                                key={module.id}
                                className="card-hover carbon-fiber p-8 rounded-lg border-2 border-aluminum relative overflow-hidden group"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                {/* Diagonal accent */}
                                <div className="diagonal-accent" />

                                {/* Racing border on hover */}
                                <div className="absolute inset-0 border-2 border-race-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

                                {/* Icon */}
                                <div className="text-race-red mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {IconComponent && <IconComponent />}
                                </div>

                                {/* Module label */}
                                <div className="telemetry-data text-xs mb-3 text-gray-500">
                                    MODULE {module.id.toString().padStart(2, '0')}
                                </div>

                                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                    {module.name}
                                </h3>

                                <p className="font-body text-gray-400 leading-relaxed">
                                    {module.description}
                                </p>

                                {/* Status indicator */}
                                <div className="mt-6 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-data-green animate-pulse" />
                                    <span className="telemetry-data text-xs text-data-green">OPERATIONAL</span>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
