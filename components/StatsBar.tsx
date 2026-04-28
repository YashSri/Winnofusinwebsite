"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/data/stats";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsBar() {
    const sectionRef = useRef<HTMLElement>(null);
    const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            counterRefs.current.forEach((el, i) => {
                if (!el) return;
                const target = stats[i].value;
                const obj = { val: 0 };

                gsap.to(obj, {
                    val: target,
                    duration: 2,
                    delay: i * 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        once: true,
                    },
                    onUpdate: () => {
                        el.textContent = Math.round(obj.val).toLocaleString();
                    },
                });
            });

            // Fade-in the whole section
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

    return (
        <section
            ref={sectionRef}
            className="relative bg-gradient-to-r from-brand-blue via-brand-blue-light to-brand-blue py-16"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(242,101,34,0.06),transparent_70%)]" />
            <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
                {stats.map((stat, i) => (
                    <div key={stat.id} className="flex flex-col items-center text-center">
                        <div className="flex items-baseline gap-0.5">
                            <span
                                ref={(el) => {
                                    counterRefs.current[i] = el;
                                }}
                                className="text-4xl font-extrabold text-white lg:text-5xl"
                            >
                                0
                            </span>
                            {stat.suffix && (
                                <span className="text-2xl font-bold text-brand-orange lg:text-3xl">
                                    {stat.suffix}
                                </span>
                            )}
                        </div>
                        <span className="mt-2 text-sm font-medium tracking-wide text-slate-300">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
