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
                            className="solution-card group relative overflow-hidden rounded-2xl border border-white/15 bg-brand-blue p-8 shadow-xl shadow-brand-blue/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-blue/20 lg:p-10"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage: `url("${sol.backgroundImageUrl}")`,
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/95 via-brand-blue/82 to-brand-blue/55" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />

                            {/* Accent bar */}
                            <div
                                className="absolute top-0 left-0 z-10 h-1 w-full"
                                style={{ backgroundColor: sol.accentColor }}
                            />

                            {/* Header */}
                            <div className="relative z-10 mb-6 flex items-start justify-between">
                                <div className="flex items-center gap-4">
                                    <div
                                        className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg"
                                        style={{ backgroundColor: sol.accentColor }}
                                    >
                                        {pillarIcons[sol.pillar]}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">
                                            {sol.pillar}
                                        </h3>
                                        <p className="text-sm font-medium text-white/65">
                                            {sol.partnerName}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Problem & Solution */}
                            <div className="relative z-10 mb-6 space-y-4">
                                <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-200">
                                        Challenge
                                    </p>
                                    <p className="text-sm leading-relaxed text-white/85">
                                        {sol.problem}
                                    </p>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-emerald-200">
                                        Solution
                                    </p>
                                    <p className="text-sm leading-relaxed text-white/85">
                                        {sol.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Products */}
                            <div className="relative z-10 space-y-3 border-t border-white/15 pt-6">
                                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/60">
                                    Key Products
                                </p>
                                {sol.products.map((product) => (
                                    <div
                                        key={product.name}
                                        className="group/product flex items-start gap-3 rounded-lg bg-white/8 p-2.5 transition-colors hover:bg-white/14"
                                    >
                                        <ChevronRight
                                            className="mt-0.5 h-4 w-4 flex-shrink-0 transition-colors"
                                            style={{ color: sol.accentColor }}
                                        />
                                        <div>
                                            <p className="text-sm font-semibold text-white">
                                                {product.name}
                                            </p>
                                            <p className="mt-0.5 text-xs leading-relaxed text-white/70">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* View Insights Button */}
                            {sol.pdfDownloadUrl && (
                                <a
                                    href={sol.pdfDownloadUrl}
                                    download
                                    className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
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
