"use client";

import { useEffect, useRef } from "react";
import { partners } from "@/data/partners";
import gsap from "gsap";

export default function PartnerMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade-in
            gsap.from(sectionRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 90%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const allPartners = [...partners, ...partners, ...partners, ...partners];

    return (
        <section ref={sectionRef} className="bg-slate-50 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
                    Trusted Technology Partners
                </p>
            </div>
            <div className="relative overflow-hidden">
                {/* Fade edges */}
                <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
                <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-slate-50 to-transparent" />

                <div ref={marqueeRef} className="animate-marquee flex w-max gap-16">
                    {allPartners.map((partner, i) => (
                        <div
                            key={`${partner}-${i}`}
                            className="flex h-16 items-center justify-center px-4"
                        >
                            <span className="whitespace-nowrap text-2xl font-bold tracking-tight text-slate-300 transition-colors duration-300 hover:text-brand-blue">
                                {partner}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
