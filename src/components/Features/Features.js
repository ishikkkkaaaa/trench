import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './Features.css';

const Features = () => {
  const mountRef = useRef(null);
  const sphereRef = useRef(null);

  useEffect(() => {
    // Three.js scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create wireframe sphere
    const geometry = new THREE.SphereGeometry(6, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x333333,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    sphereRef.current = sphere;

    camera.position.z = 10;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      // Add null check before removing child
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const features = [
    {
      title: 'Visual Agent Builder',
      description: 'Build trading agents easily using our intuitive DAG/node editor - no complex coding required.',
      icon: '☀️'
    },
    {
      title: 'Real-time Data Streams',
      description: 'Listen to diverse sources like X accounts, trader wallets, and Telegram channels for market signals.',
      icon: '✖️'
    },
    {
      title: 'Orchestrate Agents',
      description: 'Orchestrate multiple agents to determine and execute your trading strategy.',
      icon: '📚'
    },
    {
      title: 'Lightning Execution',
      description: 'Execute trades with minimal latency through our optimized transaction pipeline.',
      icon: '⚡'
    }
  ];

  return (
    <section className="features">
      <div className="sphere-background" ref={mountRef}></div>
      <div className="features-container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <div className="feature-content">
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;