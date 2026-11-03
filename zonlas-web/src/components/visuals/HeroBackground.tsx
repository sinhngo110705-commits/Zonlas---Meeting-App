"use client";

import React from "react";

export function HeroBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Center Subtle Ambient Wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] ambient-glow-light" />

      {/* Gentle Executive Background Grid Pattern */}
      <div className="absolute inset-0 bg-subtle-mesh opacity-70" />
    </div>
  );
}
