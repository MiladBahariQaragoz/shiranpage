export default function Footer() {
    return (
        <footer className="bg-carbon-black border-t-2 border-race-red py-12 px-4 relative overflow-hidden">
            {/* Diagonal background accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-speed-gradient opacity-5 transform skew-x-12" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Project Info */}
                    <div>
                        <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight">
                            ROBORACER
                        </h3>
                        <p className="font-body text-gray-400 text-sm leading-relaxed">
                            Autonomous driving research project at FAU Erlangen-Nürnberg
                        </p>
                        <div className="mt-4 telemetry-data text-xs text-data-green">
                            STATUS: ACTIVE
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight">
                            LINKS
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://github.com/farhadvaseghi/RoboRacer-Shiran"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-body text-race-red hover:text-velocity-orange transition-colors flex items-center gap-2 group"
                                >
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    GitHub Repository
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.ac.tf.fau.eu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-body text-race-red hover:text-velocity-orange transition-colors flex items-center gap-2 group"
                                >
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    FAU Chair of Automatic Control
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight">
                            CONTACT
                        </h3>
                        <p className="font-body text-gray-400 text-sm leading-relaxed">
                            Friedrich-Alexander-Universität<br />
                            Erlangen-Nürnberg<br />
                            Germany
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-aluminum pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="telemetry-data text-xs text-gray-500">
                            © 2026 ROBORACER TEAM. ALL RIGHTS RESERVED.
                        </p>
                        <p className="telemetry-data text-xs text-gray-500">
                            PROJECT START: 03.02.2026
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
