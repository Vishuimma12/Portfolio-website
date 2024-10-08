import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../Style/Skills.css'
import * as THREE from 'three';

const RotatingCube = ({ icon }) => {
  const meshRef = useRef();
  const texture = useMemo(() => new THREE.TextureLoader().load(icon), [icon]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      {[...Array(6)].map((_, index) => (
        <meshBasicMaterial attachArray="material" key={index} map={texture} transparent={true} />
      ))}
    </mesh>
  );
};

const Skill = ({ name, icon }) => {
  return (
    
    <div className="skill-container">
      <div className="skill-animation" style={{ width: '200px', height: '200px' }}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <OrbitControls enableZoom={false} />
          <RotatingCube icon={icon} />
        </Canvas>
      </div>
      <div className="skill-name">{name}</div>
    </div>
  );
};

export default Skill;
