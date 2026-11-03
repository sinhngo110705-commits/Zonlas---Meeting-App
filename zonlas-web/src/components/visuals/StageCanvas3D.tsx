"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function StageCanvas3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || 600;
    let height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // 1. Digital Stage Rings (Torus rings with Zonlas Red & Gold)
    const ringGeo1 = new THREE.TorusGeometry(8, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xc41230,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.3;
    stageGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(6, 0.03, 16, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xc9a84c,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 2.1;
    ring2.rotation.y = Math.PI / 8;
    stageGroup.add(ring2);

    const ringGeo3 = new THREE.TorusGeometry(10, 0.02, 16, 120);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xff2d4e,
      transparent: true,
      opacity: 0.35,
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.x = Math.PI / 2.5;
    ring3.rotation.y = -Math.PI / 10;
    stageGroup.add(ring3);

    // 2. Center Stage Core (Sphere Wireframe)
    const sphereGeo = new THREE.IcosahedronGeometry(3.5, 2);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0xc41230,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const centerSphere = new THREE.Mesh(sphereGeo, sphereMat);
    stageGroup.add(centerSphere);

    // Inner glowing core
    const innerGeo = new THREE.IcosahedronGeometry(2, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xf0c84a,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerCore = new THREE.Mesh(innerGeo, innerMat);
    stageGroup.add(innerCore);

    // 3. Network Particle Cloud
    const particleCount = 220;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorRed = new THREE.Color("#FF2D4E");
    const colorGold = new THREE.Color("#F0C84A");
    const colorWhite = new THREE.Color("#FFFFFF");

    for (let i = 0; i < particleCount; i++) {
      const radius = 4 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (radius * Math.sin(phi) * Math.sin(theta)) * 0.45; // flatter disk
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const r = Math.random();
      const chosenColor = r > 0.6 ? colorRed : r > 0.3 ? colorGold : colorWhite;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.22,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    stageGroup.add(particles);

    // 4. Floating Stage Nodes (Keynote speakers, host, attendees)
    const nodeGeos = [
      { pos: [0, 0, 0], color: 0xff2d4e, size: 0.35 },
      { pos: [-5, 1.2, 3], color: 0xf0c84a, size: 0.25 },
      { pos: [5.2, -0.8, -2], color: 0xf0c84a, size: 0.25 },
      { pos: [3.5, 2, 4], color: 0xff2d4e, size: 0.22 },
      { pos: [-4, -1.8, -3], color: 0xffffff, size: 0.2 },
    ];

    nodeGeos.forEach((n) => {
      const nodeMesh = new THREE.Mesh(
        new THREE.SphereGeometry(n.size, 16, 16),
        new THREE.MeshBasicMaterial({ color: n.color })
      );
      nodeMesh.position.set(n.pos[0], n.pos[1], n.pos[2]);
      stageGroup.add(nodeMesh);
    });

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = (y / rect.height) * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = (performance.now() - startTime) / 1000;

      // Damped mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      stageGroup.rotation.y = elapsedTime * 0.12 + mouseX * 0.6;
      stageGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.08 - mouseY * 0.4;

      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.12;
      ring3.rotation.z = elapsedTime * 0.08;

      centerSphere.rotation.y = -elapsedTime * 0.2;
      innerCore.rotation.x = elapsedTime * 0.3;

      // Pulse particle positions subtly
      particles.rotation.y = -elapsedTime * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[460px] relative cursor-grab active:cursor-grabbing flex items-center justify-center"
      aria-label="Interactive 3D Stage Visualizer"
    />
  );
}
