import { motion } from 'framer-motion'
import { MILESTONES, getCurrentProjectWeek } from '../config'

export default function LiveTimeline() {
    const currentWeek = getCurrentProjectWeek()

    // Determine the state of each milestone
    const getPhaseState = (milestone) => {
        if (currentWeek >= milestone.weekStart && currentWeek <= milestone.weekEnd) {
            return 'active'
        } else if (currentWeek > milestone.weekEnd) {
            return 'completed'
        }
        return 'upcoming'
    }

    return (
        <section className="min-h-screen bg-titanium py-20 px-4 relative overflow-hidden">
            {/* Background grid pattern */}
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
                        PROJECT TIMELINE
                    </h2>
                    <div className="telemetry-data text-center">
                        CURRENT WEEK: {currentWeek.toString().padStart(2, '0')}
                    </div>
                </motion.div>

                <div className="space-y-8">
                    {MILESTONES.map((milestone, index) => {
                        const state = getPhaseState(milestone)

                        return (
                            <motion.div
                                key={milestone.id}
                                className={`
                  relative p-8 rounded-lg border-2 transition-all duration-300 racing-border carbon-fiber
                  ${state === 'active' ? 'glow-active bg-steel-gray border-race-red' : ''}
                  ${state === 'completed' ? 'bg-carbon-black border-aluminum opacity-60' : ''}
                  ${state === 'upcoming' ? 'bg-steel-gray border-aluminum' : ''}
                `}
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                            >
                                {/* Diagonal accent line */}
                                <div className="diagonal-accent" />

                                {/* Milestone number badge */}
                                <div className={`
                  absolute -left-6 top-8 w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-xl border-2
                  ${state === 'active' ? 'bg-race-red text-white border-race-red shadow-lg shadow-race-red/50' : ''}
                  ${state === 'completed' ? 'bg-data-green text-carbon-black border-data-green' : ''}
                  ${state === 'upcoming' ? 'bg-steel-gray text-gray-400 border-aluminum' : ''}
                `}>
                                    {milestone.id}
                                </div>

                                <div className="ml-8">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className={`
                      font-display text-2xl md:text-3xl font-bold tracking-tight
                      ${state === 'active' ? 'text-race-red' : 'text-white'}
                    `}>
                                            {milestone.title}
                                        </h3>
                                        <span className={`
                      telemetry-data text-xs px-4 py-2 rounded border
                      ${state === 'active' ? 'bg-race-red/20 border-race-red text-race-red' : ''}
                      ${state === 'completed' ? 'bg-data-green/20 border-data-green text-data-green' : ''}
                      ${state === 'upcoming' ? 'bg-aluminum/20 border-aluminum text-gray-400' : ''}
                    `}>
                                            {state === 'active' ? '● IN PROGRESS' : ''}
                                            {state === 'completed' ? '✓ COMPLETED' : ''}
                                            {state === 'upcoming' ? '○ UPCOMING' : ''}
                                        </span>
                                    </div>

                                    <div className="telemetry-data text-xs mb-3 text-gray-400">
                                        WEEKS {milestone.weekStart.toString().padStart(2, '0')}–{milestone.weekEnd === 999 ? '∞' : milestone.weekEnd.toString().padStart(2, '0')}
                                    </div>

                                    <p className="font-body text-lg text-gray-300 mb-2 font-medium">
                                        {milestone.description}
                                    </p>

                                    <p className="font-body text-sm text-gray-500">
                                        {milestone.details}
                                    </p>

                                    {/* Progress bar for active milestone */}
                                    {state === 'active' && (
                                        <div className="mt-4 h-1 bg-aluminum rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-speed-gradient"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '40%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
