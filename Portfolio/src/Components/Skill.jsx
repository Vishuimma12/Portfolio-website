import React, { useState, useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls } from '@react-three/drei';
import '../Style/Skills.css';

const RotatingCube = ({ icon }) => {
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, icon);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      {[...Array(6)].map((_, index) => (
        <meshBasicMaterial attachArray="material" key={index} map={texture} transparent={true} />
      ))}
    </mesh>
  );
};

const Skill = ({ name, icon }) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div ref={skillRef} className="skill-container">
      <div className="skill-animation" style={{ width: '150px', height: '150px' }}>
        {isVisible && (
          <Suspense fallback={<div className="loading-placeholder">Loading...</div>}>
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <OrbitControls enableZoom={false} enablePan={false} />
              <RotatingCube icon={icon} />
            </Canvas>
          </Suspense>
        )}
      </div>
      <div className="skill-name">{name}</div>
    </div>
  );
};

export default Skill;
