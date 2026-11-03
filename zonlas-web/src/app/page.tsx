"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { TargetAudienceProof } from "@/components/sections/TargetAudienceProof";
import { CorePillarsSection } from "@/components/sections/CorePillarsSection";
import { AudioCompareSection } from "@/components/sections/AudioCompareSection";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Footer } from "@/components/layout/Footer";
import { DemoBookingModal } from "@/components/sections/DemoBookingModal";

export default function HomePage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenDemoModal = (plan?: string) => {
    setSelectedPlan(plan);
    setDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setDemoModalOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFD] text-slate-900 selection:bg-[#C41230] selection:text-white">
      {/* Floating Modern Header */}
      <Navbar onOpenDemoModal={() => handleOpenDemoModal()} />

      {/* Main Experience Stream */}
      <main>
        {/* Interactive Studio Hero */}
        <HeroSection onOpenDemoModal={() => handleOpenDemoModal()} />

        {/* 4 Core Target Audiences (Agency, B2B, Master Trainer, Association) */}
        <TargetAudienceProof />

        {/* 4 Core Platform Pillars from Zonlas System Architecture:
            Module 1: Virtual Production Studio
            Module 2: Branding & Sponsor Expo
            Module 3: AI-Native Event Engine
            Module 4: Gamification & Deep Engagement */}
        <CorePillarsSection onOpenDemoModal={() => handleOpenDemoModal()} />

        {/* Dual-Layer Sound Engine & Live Soundboard Studio */}
        <AudioCompareSection />

        {/* Honest Architectural Specification Matrix: Zonlas vs Zoom vs RingCentral (Hopin) */}
        <ComparisonTable />

        {/* Transparent Enterprise Pricing Plans */}
        <PricingSection onSelectPlan={(plan) => handleOpenDemoModal(plan)} />

        {/* Practical Governance & Technical Q&A */}
        <FAQSection />

        {/* Closing Technical Rehearsal Banner */}
        <ClosingCta onOpenDemoModal={() => handleOpenDemoModal()} />
      </main>

      {/* Modern Clean Footer */}
      <Footer />

      {/* 1:1 Technical Rehearsal Booking Modal */}
      <DemoBookingModal
        isOpen={demoModalOpen}
        onClose={handleCloseDemoModal}
        preselectedPlan={selectedPlan}
      />
    </div>
  );
}
