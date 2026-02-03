/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'display': ['Orbitron', 'sans-serif'],
                'body': ['Space Grotesk', 'sans-serif'],
                'mono': ['JetBrains Mono', 'monospace'],
            },
            colors: {
                // Racing Telemetry Palette
                'race-red': '#E10600',
                'velocity-orange': '#FF6B00',
                'carbon-black': '#0D0D0D',
                'titanium': '#1A1A1A',
                'steel-gray': '#2A2A2A',
                'aluminum': '#3F3F3F',
                'data-green': '#00FF41',
                'warning-amber': '#FFB800',
                'telemetry-blue': '#00D9FF',
            },
            backgroundImage: {
                'speed-gradient': 'linear-gradient(135deg, #E10600 0%, #FF6B00 100%)',
                'depth-gradient': 'linear-gradient(180deg, #0D0D0D 0%, #1A1A1A 100%)',
                'glow-gradient': 'radial-gradient(circle, rgba(225,6,0,0.3) 0%, transparent 70%)',
            },
            animation: {
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
                'slide-in-right': 'slide-in-right 0.6s ease-out',
                'fade-in': 'fade-in 0.4s ease-out',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': {
                        boxShadow: '0 0 20px rgba(225, 6, 0, 0.5), 0 0 40px rgba(225, 6, 0, 0.3)',
                    },
                    '50%': {
                        boxShadow: '0 0 40px rgba(225, 6, 0, 0.8), 0 0 60px rgba(225, 6, 0, 0.5)',
                    },
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(100px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
