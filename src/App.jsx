import Hero3D from './components/Hero3D'
import LiveTimeline from './components/LiveTimeline'
import TechStack from './components/TechStack'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
    return (
        <div className="bg-carbon-black min-h-screen">
            <Hero3D />
            <LiveTimeline />
            <TechStack />
            <Team />
            <Footer />
        </div>
    )
}

export default App
