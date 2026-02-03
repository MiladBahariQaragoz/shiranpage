import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, useProgress, Html } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import SpeedLines from './SpeedLines'

// Real 3D Car Model from PLY with bright material
function Car3D() {
    const geometry = useLoader(PLYLoader, '/car.ply')
    const carRef = useRef()
    const outlineRef = useRef()

    // Subtle bobbing animation only
    useFrame((state, delta) => {
        if (carRef.current) {
            // Subtle bobbing animation
            carRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
        }
        if (outlineRef.current) {
            outlineRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
        }
    })

    // Center the geometry
    useEffect(() => {
        if (geometry) {
            geometry.center()
            geometry.computeVertexNormals()
        }
    }, [geometry])

    return (
        <group rotation={[Math.PI / 2 + Math.PI, 0, 0]}>
            {/* Outline/Glow effect */}
            <mesh ref={outlineRef} geometry={geometry} scale={15.6}>
                <meshBasicMaterial
                    color="#E10600"
                    transparent
                    opacity={0.1}
                    side={THREE.BackSide}
                />
            </mesh>

            {/* Main car model with 80% transparency */}
            <mesh ref={carRef} geometry={geometry} scale={15}>
                <meshStandardMaterial
                    color="#ffffff"
                    metalness={0.1}
                    roughness={0.5}
                    emissive="#ffffff"
                    emissiveIntensity={0.9}
                    transparent
                    opacity={0.2}
                />
            </mesh>
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

            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
                }}
            />
        </div>
    )
}
