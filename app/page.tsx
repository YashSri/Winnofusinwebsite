"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import PartnerMarquee from "@/components/PartnerMarquee";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import Insights from "@/components/Insights";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar onOpenContact={() => setOpen(true)} />
      <main>
        <Hero onOpenContact={() => setOpen(true)} />
        <StatsBar />
        <PartnerMarquee />
        <Solutions />
        <Industries />
        <Insights />
      </main>
      <Footer onOpenContact={() => setOpen(true)} />
      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
