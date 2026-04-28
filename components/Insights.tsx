"use client";

import { useEffect, useRef } from "react";
import { insights } from "@/data/insights";
import { Clock, ArrowRight, Download } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function getTypeBadgeStyle(type: string) {
    switch (type) {
        case "Research Paper":
            return "bg-blue-50 text-blue-700 border-blue-200";
        case "Blog Post":
            return "bg-emerald-50 text-emerald-700 border-emerald-200";
        case "Case Study":
            return "bg-amber-50 text-amber-700 border-amber-200";
        default:
            return "bg-slate-50 text-slate-700 border-slate-200";
    }
}

function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function Insights() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".insights-header", {
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

            gsap.from(".insight-card", {
                opacity: 0,
                y: 50,
                duration: 0.7,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".insights-grid",
                    start: "top 82%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="insights"
            ref={sectionRef}
            className="bg-white py-24 lg:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="insights-header mx-auto mb-16 max-w-3xl text-center">
                    <span className="mb-4 inline-block rounded-full bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                        Insights
                    </span>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Research &{" "}
                        <span className="text-brand-orange">Thought Leadership</span>
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-slate-500">
                        Stay ahead with our latest research papers, case studies, and
                        expert insights on enterprise security and productivity.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="insights-grid grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {insights.map((item) => (
                        <article
                            key={item.id}
                            className="insight-card card-hover group flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:shadow-xl"
                        >
                            {/* Placeholder image */}
                            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-brand-blue/10 via-slate-100 to-brand-orange/10">
                                <div className="flex h-full items-center justify-center">
                                    <span className="text-4xl font-extrabold text-brand-blue/8">
                                        {item.type === "Research Paper"
                                            ? "RP"
                                            : item.type === "Blog Post"
                                                ? "BP"
                                                : "CS"}
                                    </span>
                                </div>
                                {/* Type badge overlay */}
                                <div className="absolute top-4 left-4">
                                    <span
                                        className={`rounded-full border px-3 py-1 text-[11px] font-semibold ${getTypeBadgeStyle(item.type)}`}
                                    >
                                        {item.type}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6">
                                <div className="mb-3 flex items-center gap-4 text-xs text-slate-400">
                                    <span>{formatDate(item.publishDate)}</span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        {item.readTimeMinutes} min read
                                    </span>
                                </div>
                                <h3 className="mb-3 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-blue">
                                    {item.title}
                                </h3>
                                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-500">
                                    {item.excerpt}
                                </p>

                                {/* Tags */}
                                <div className="mb-4 flex flex-wrap gap-1.5">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-500"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                                    <span className="text-xs font-medium text-slate-400">
                                        By {item.author}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        {item.pdfDownloadUrl && (
                                            <a
                                                href={item.pdfDownloadUrl}
                                                download
                                                className="flex items-center gap-1 text-xs font-medium text-brand-blue transition-colors hover:text-brand-orange"
                                                aria-label={`Download ${item.title}`}
                                            >
                                                <Download className="h-3.5 w-3.5" />
                                                PDF
                                            </a>
                                        )}
                                        <button
                                            type="button"
                                            className="flex items-center gap-1 text-xs font-medium text-brand-orange transition-colors hover:text-brand-orange-dark"
                                        >
                                            Read More
                                            <ArrowRight className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
