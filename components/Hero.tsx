"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, FileText, Clock } from "lucide-react";
import { insights } from "@/data/insights";
import gsap from "gsap";

type HeroProps = {
    onOpenContact: () => void;
};

export default function Hero({ onOpenContact }: HeroProps) {
    const feedRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Hero entrance animation
        const ctx = gsap.context(() => {
            gsap.from(".hero-title", {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power3.out",
            });
            gsap.from(".hero-subtitle", {
                opacity: 0,
                y: 40,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
            });
            gsap.from(".hero-cta", {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 0.4,
                ease: "power3.out",
            });
            gsap.from(".hero-feed", {
                opacity: 0,
                x: 80,
                duration: 1,
                delay: 0.3,
                ease: "power3.out",
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Duplicate insights for seamless scroll
    const feedItems = [...insights, ...insights];

    function getTypeBadgeStyle(type: string) {
        switch (type) {
            case "Research Paper":
                return "bg-blue-500/20 text-blue-300 border-blue-400/30";
            case "Blog Post":
                return "bg-emerald-500/20 text-emerald-300 border-emerald-400/30";
            case "Case Study":
                return "bg-amber-500/20 text-amber-300 border-amber-400/30";
            default:
                return "bg-slate-500/20 text-slate-300 border-slate-400/30";
        }
    }

    return (
        <section
            ref={heroRef}
            className="relative flex min-h-screen items-center overflow-hidden bg-brand-blue pt-20"
        >
            {/* Background elements */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-brand-orange/8 blur-[120px]" />
                <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/5 blur-[80px]" />
            </div>

            <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
                {/* Left: Content */}
                <div className="flex flex-col justify-center">
                    <div className="hero-title">
                        <span className="mb-4 inline-block rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-orange-light">
                            Enterprise Technology Partner
                        </span>
                        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Empowering Enterprise Security &{" "}
                            <span className="text-brand-orange">Next-Generation</span>{" "}
                            Technology Goals
                        </h1>
                    </div>
                    <p className="hero-subtitle mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
                        From project envisioning to consulting, designing, implementing, and
                        going live, we deliver state-of-the-art solutions.
                    </p>
                    <div className="hero-cta mt-10 flex flex-wrap gap-4">
                        <a
                            href="#solutions"
                            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-orange-dark hover:shadow-xl hover:shadow-brand-orange/25"
                        >
                            Explore Our Solutions
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <button
                            type="button"
                            onClick={onOpenContact}
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Right: Auto-scrolling research feed */}
                <div className="hero-feed relative flex items-center justify-center">
                    <div className="relative h-[480px] w-full max-w-md overflow-hidden rounded-2xl lg:h-[540px]">
                        {/* Gradient overlays for fade effect */}
                        <div className="pointer-events-none absolute top-0 right-0 left-0 z-10 h-20 bg-gradient-to-b from-brand-blue to-transparent" />
                        <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-20 bg-gradient-to-t from-brand-blue to-transparent" />

                        <div className="flex items-center gap-2 pb-4">
                            <FileText className="h-4 w-4 text-brand-orange" />
                            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                                Recent Research & Insights
                            </span>
                        </div>

                        <div
                            ref={feedRef}
                            className="animate-scroll-feed flex flex-col gap-4"
                        >
                            {feedItems.map((item, index) => (
                                <a
                                    key={`${item.id}-${index}`}
                                    href="#insights"
                                    className="glass-card group cursor-pointer rounded-xl p-5 transition-all duration-300 hover:border-brand-orange/30 hover:bg-white/12"
                                >
                                    <div className="mb-3 flex items-center gap-3">
                                        <span
                                            className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${getTypeBadgeStyle(item.type)}`}
                                        >
                                            {item.type}
                                        </span>
                                        <span className="flex items-center gap-1 text-[11px] text-slate-500">
                                            <Clock className="h-3 w-3" />
                                            {item.readTimeMinutes} min read
                                        </span>
                                    </div>
                                    <h3 className="mb-2 text-sm font-semibold leading-snug text-white transition-colors group-hover:text-brand-orange">
                                        {item.title}
                                    </h3>
                                    <p className="line-clamp-2 text-xs leading-relaxed text-slate-400">
                                        {item.excerpt}
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {item.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
