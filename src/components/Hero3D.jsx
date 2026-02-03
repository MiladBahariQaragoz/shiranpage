import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, useProgress, Html } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import SpeedLines from './SpeedLines'

// Real 3D Car Model from GLB with internal lighting
function Car3D() {
    const { scene } = useGLTF('/car.glb')
    const carRef = useRef()
    const innerLightRef = useRef()

    // Subtle bobbing animation only
    useFrame((state, delta) => {
        if (carRef.current) {
            // Subtle bobbing animation
            carRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
        }
        if (innerLightRef.current) {
            innerLightRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
        }
    })

    // Clone and prepare model
    const carModel = scene.clone()

    // Center the model and apply materials
    useEffect(() => {
        // Setup main car model - preserve original colors
        carModel.traverse((child) => {
            if (child.isMesh) {
                child.geometry.center()
                // Keep the original material and just enhance it
                if (child.material) {
                    // Don't replace the material, just modify its properties
                    child.material.transparent = true
                    child.material.opacity = 0.9
                    child.material.metalness = 0.5
                    child.material.roughness = 0.4
                    child.material.needsUpdate = true
                }
            }
        })
    }, [carModel])

    return (
        <group>
            {/* Internal point light to illuminate from within */}
            <pointLight
                ref={innerLightRef}
                position={[0, 0, 0]}
                intensity={3}
                distance={10}
                color="#ffffff"
            />

            {/* Main car model */}
            <primitive
                ref={carRef}
                object={carModel}
                scale={15}
            />
        </group>
    )
}

// Loading component
function Loader() {
    const { progress } = useProgress()
    return (
        <Html center>
            <div className="telemetry-data">
                LOADING {progress.toFixed(0)}%
            </div>
        </Html>
    )
}

export default function Hero3D() {
    return (
        <div className="h-screen relative overflow-hidden">
            {/* Speed Lines Background */}
            <SpeedLines />

            {/* 3D Canvas */}
            <Canvas className="canvas-container">
                <Suspense fallback={<Loader />}>
                    <PerspectiveCamera makeDefault position={[8, 4, 8]} />

                    {/* Standard Lighting setup */}
                    <ambientLight intensity={0.5} />

                    {/* Main key light */}
                    <directionalLight
                        position={[5, 8, 5]}
                        intensity={1}
                        castShadow
                    />

                    {/* Fill lights */}
                    <pointLight position={[10, 5, 10]} intensity={0.8} color="#ffffff" />
                    <pointLight position={[-10, 5, -10]} intensity={0.6} color="#ffffff" />

                    {/* Rim lights for edge definition */}
                    <spotLight
                        position={[-8, 3, -8]}
                        angle={0.3}
                        intensity={0.8}
                        color="#00D9FF"
                    />
                    <spotLight
                        position={[8, 3, -8]}
                        angle={0.3}
                        intensity={0.8}
                        color="#FF6B00"
                    />

                    <Car3D />

                    <OrbitControls
                        enableZoom={false}
                        autoRotate={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 4}
                    />

                    <Environment preset="sunset" intensity={1.5} />
                </Suspense>
            </Canvas>

            {/* Telemetry HUD Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center px-4 relative">
                    {/* Semi-transparent background box */}
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-lg -m-8"
                        style={{ transform: 'translateZ(0)' }}
                    />

                    {/* Content - positioned above background */}
                    <div className="relative z-10">
                        {/* Main Title */}
                        <h1 className="font-display text-6xl md:text-8xl font-bold text-white mb-4 gradient-text tracking-tight">
                            ROBORACER - SHIRAN
                        </h1>

                        {/* Subtitle */}
                        <p className="font-body text-xl md:text-2xl text-telemetry-blue mb-6">
                            Autonomous Driving at FAU Erlangen-Nürnberg
                        </p>

                        {/* Telemetry Data */}
                        <div className="flex justify-center gap-8 mb-8">
                            <div className="telemetry-data">
                                <div className="text-xs text-gray-500">WEEK</div>
                                <div className="text-2xl font-mono">01</div>
                            </div>
                            <div className="telemetry-data">
                                <div className="text-xs text-gray-500">STATUS</div>
                                <div className="text-2xl font-mono">ACTIVE</div>
                            </div>
                            <div className="telemetry-data">
                                <div className="text-xs text-gray-500">PHASE</div>
                                <div className="text-2xl font-mono">SETUP</div>
                            </div>
                        </div>

                        {/* Scroll Indicator */}
                        <p className="font-body text-sm md:text-base text-gray-400 mt-8 animate-pulse">
                            ↓ SCROLL TO EXPLORE
                        </p>
                    </div>
                </div>
            </div>

            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
                }}
            />
        </div>
    )
}
