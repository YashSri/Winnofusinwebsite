"use client";

import { useEffect, useRef } from "react";
import { solutions } from "@/data/solutions";
import { Shield, Smartphone, BarChart3, Network, ChevronRight, Download } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillarIcons: Record<string, React.ReactNode> = {
    "Enterprise Mobility": <Smartphone className="h-6 w-6" />,
    Cybersecurity: <Shield className="h-6 w-6" />,
    "Employee Productivity": <BarChart3 className="h-6 w-6" />,
    "Unified IT Operations": <Network className="h-6 w-6" />,
};

function getPillarCode(pillar: string) {
    return pillar
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 3)
        .toUpperCase();
}

export default function Solutions() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".solution-header", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    once: true,
                },
            });

            gsap.from(".solution-card", {
                opacity: 0,
                y: 50,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".solution-grid",
                    start: "top 82%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="solutions"
            ref={sectionRef}
            className="bg-white py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="solution-header mx-auto mb-16 max-w-3xl text-center">
                    <span className="mb-4 inline-block rounded-full bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                        Core Domains
                    </span>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Enterprise Solutions That{" "}
                        <span className="text-brand-orange">Drive Results</span>
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-slate-500">
                        Our comprehensive suite of solutions addresses mission-critical
                        challenges across cybersecurity, mobility, productivity, and IT
                        operations.
                    </p>
                </div>

                {/* Solution Cards Grid */}
                <div className="solution-grid grid grid-cols-1 gap-8 md:grid-cols-2">
                    {solutions.map((sol) => (
                        <div
                            key={sol.id}
                            className="solution-card group relative min-h-[620px] overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50 p-8 shadow-[0_24px_70px_-45px_rgba(10,31,68,0.65)] transition-all duration-500 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_30px_90px_-45px_rgba(10,31,68,0.8)] lg:p-10"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-70 transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage: `url("${sol.backgroundImageUrl}")`,
                                }}
                            />
                            <div className="absolute inset-0 bg-white/58 backdrop-blur-[1px]" />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.72) 48%, ${sol.accentColor}1f 100%)`,
                                }}
                            />
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/88 to-transparent" />

                            {/* Accent bar */}
                            <div
                                className="absolute top-0 left-0 z-10 h-1 w-full opacity-70"
                                style={{ backgroundColor: sol.accentColor }}
                            />

                            {/* Header */}
                            <div className="relative z-10 mb-6 flex items-start justify-between gap-4">
                                <div>
                                    <div
                                        className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                                        style={{
                                            backgroundColor: `${sol.accentColor}1f`,
                                            color: sol.accentColor,
                                        }}
                                    >
                                        {pillarIcons[sol.pillar]}
                                    </div>
                                    <h3 className="text-3xl font-extrabold leading-tight text-slate-950">
                                        {sol.pillar}
                                    </h3>
                                    <p className="mt-2 text-sm font-semibold text-slate-500">
                                        {sol.partnerName}
                                    </p>
                                </div>
                                <span className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-600">
                                    {getPillarCode(sol.pillar)}
                                </span>
                            </div>

                            {/* Problem & Solution */}
                            <div className="relative z-10 mb-6 space-y-4">
                                <div className="rounded-2xl border border-white/70 bg-white/48 p-4 shadow-sm backdrop-blur-md">
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-600">
                                        Challenge
                                    </p>
                                    <p className="text-sm leading-relaxed text-slate-700">
                                        {sol.problem}
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-white/70 bg-white/48 p-4 shadow-sm backdrop-blur-md">
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                                        Solution
                                    </p>
                                    <p className="text-sm leading-relaxed text-slate-700">
                                        {sol.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Products */}
                            <div className="relative z-10 space-y-3 border-t border-slate-900/10 pt-6">
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                                    Key Products
                                </p>
                                {sol.products.map((product) => (
                                    <div
                                        key={product.name}
                                        className="group/product flex items-start gap-3 rounded-xl bg-white/42 p-2.5 transition-colors hover:bg-white/70"
                                    >
                                        <ChevronRight
                                            className="mt-0.5 h-4 w-4 flex-shrink-0 transition-colors"
                                            style={{ color: sol.accentColor }}
                                        />
                                        <div>
                                            <p className="text-sm font-semibold text-slate-900">
                                                {product.name}
                                            </p>
                                            <p className="mt-0.5 text-xs leading-relaxed text-slate-600">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                <div className="pt-4">
                                    <div className="h-px bg-slate-900/12" />
                                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
                                        Integrated Enterprise Solution
                                    </p>
                                </div>
                            </div>

                            {/* View Insights Button */}
                            {sol.pdfDownloadUrl && (
                                <a
                                    href={sol.pdfDownloadUrl}
                                    download
                                    className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                    style={{
                                        backgroundColor: sol.accentColor,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.opacity = "0.9";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.opacity = "1";
                                    }}
                                >
                                    <Download className="h-4 w-4" />
                                    View Insights
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
