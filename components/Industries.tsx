"use client";

import { industries } from "@/data/industries";
import {
    Factory,
    Landmark,
    Truck,
    HeartPulse,
    Cloud,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    Factory: <Factory className="h-7 w-7" />,
    Landmark: <Landmark className="h-7 w-7" />,
    Truck: <Truck className="h-7 w-7" />,
    HeartPulse: <HeartPulse className="h-7 w-7" />,
    Cloud: <Cloud className="h-7 w-7" />,
};

export default function Industries() {
    const handleViewInsights = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        const insightsSection = document.getElementById("insights");
        if (insightsSection) {
            insightsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="industries"
            className="bg-slate-50 py-10 lg:py-14"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="ind-header mx-auto mb-8 max-w-3xl text-center">
                    <span className="mb-3 inline-block rounded-full bg-brand-blue/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-blue">
                        Industries
                    </span>
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        Industries We <span className="text-brand-orange">Serve</span>
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-500">
                        Specialized digital capabilities aligned to high-impact Indian
                        sectors.
                    </p>
                </div>

                {/* Grid */}
                <div className="ind-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {industries.map((ind, index) => (
                        <div
                            key={ind.id}
                            className="ind-card group relative h-56 animate-[industry-card-in_0.55s_ease-out_both] overflow-hidden rounded-2xl border border-white/70 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl hover:shadow-brand-blue/10"
                            style={{
                                animationDelay: `${index * 80}ms`,
                                borderColor: `${ind.accentColor}26`,
                            }}
                        >
                            <div
                                className="pointer-events-none absolute -inset-4 rounded-[2rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                                style={{
                                    background: `linear-gradient(135deg, ${ind.accentColor}33, transparent 45%, rgba(10, 31, 68, 0.18))`,
                                }}
                            />

                            {/* Background Image with Blur Overlay */}
                            {ind.imageUrl && (
                                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{
                                            backgroundImage: `url('${ind.imageUrl}')`,
                                            filter: "saturate(1.12) contrast(1.04) brightness(0.92)",
                                        }}
                                    />
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: `linear-gradient(180deg, ${ind.accentColor}99 0%, rgba(10, 31, 68, 0.62) 52%, rgba(10, 31, 68, 0.94) 100%)`,
                                        }}
                                    />
                                </div>
                            )}

                            {/* Content Overlay */}
                            <div className="relative z-10 flex h-full flex-col">
                                {/* Icon */}
                                <div
                                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 shadow-sm transition-all duration-300 group-hover:scale-105 backdrop-blur-sm"
                                    style={{ color: ind.accentColor }}
                                >
                                    {iconMap[ind.iconName]}
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-bold text-white drop-shadow-md">
                                    {ind.name}
                                </h3>

                                {/* Minimal text */}
                                <p className="mt-2 flex-1 text-sm leading-snug text-white/85 drop-shadow-md">
                                    {ind.description}
                                </p>

                                <button
                                    type="button"
                                    onClick={handleViewInsights}
                                    className="mt-3 inline-flex items-center justify-center self-start rounded-lg px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                                    style={{
                                        backgroundColor: ind.accentColor,
                                        boxShadow: `0 12px 24px -16px ${ind.accentColor}`,
                                    }}
                                >
                                    View Insights
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
