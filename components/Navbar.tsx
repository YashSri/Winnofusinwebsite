"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Industries", href: "#industries" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass shadow-lg shadow-brand-blue/5"
                    : "bg-transparent"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-blue">
                        <span className="text-sm font-bold text-white">W</span>
                    </div>
                    <span
                        className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isScrolled ? "text-brand-blue" : "text-brand-blue"
                            }`}
                    >
                        WinnoVation
                        <span className="text-brand-orange"> Technology Solutions</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="relative text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-brand-orange after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/25"
                    >
                        Consult an Expert
                        <ChevronRight className="h-4 w-4" />
                    </a>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
                    aria-label="Toggle navigation menu"
                >
                    {isMobileOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileOpen && (
                <div className="border-t border-slate-200/60 bg-white px-6 py-4 lg:hidden">
                    <nav className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileOpen(false)}
                                className="rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-orange-50 hover:text-brand-orange"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsMobileOpen(false)}
                            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-orange-dark"
                        >
                            Consult an Expert
                            <ChevronRight className="h-4 w-4" />
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
