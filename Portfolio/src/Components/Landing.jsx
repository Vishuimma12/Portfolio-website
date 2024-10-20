import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import '../Style/Landing.css';

const Landing = () => {
  const mountRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile
    setIsMobile(window.innerWidth < 768);

    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: false, // Disable antialiasing for better performance
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(1); // Set to 1 for better performance

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = isMobile ? 5000 : 10000; // Reduce particle count for mobile

    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.005 : 0.003, // Increase size for mobile for better visibility
      color: '#4db5ff',
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Animation
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      particlesMesh.rotation.y = elapsedTime * (isMobile ? 0.02 : 0.05); // Slower rotation on mobile
      particlesMesh.rotation.x = elapsedTime * (isMobile ? 0.01 : 0.03);

      // Add subtle wave motion (reduced for mobile)
      particlesMesh.position.y = Math.sin(elapsedTime * 0.5) * (isMobile ? 0.05 : 0.1);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(1); // Keep pixel ratio at 1 for performance

      // Update particle count and size based on new device type
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      scene.remove(particlesMesh);

      const newParticlesCount = newIsMobile ? 5000 : 10000;
      const newPosArray = new Float32Array(newParticlesCount * 3);
      for (let i = 0; i < newParticlesCount * 3; i++) {
        newPosArray[i] = (Math.random() - 0.5) * 10;
      }
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(newPosArray, 3));
      particlesMaterial.size = newIsMobile ? 0.005 : 0.003;
      const newParticlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(newParticlesMesh);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      cancelAnimationFrame(animationFrameId);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="landing-background"></div>
  );
};

export default Landing;
