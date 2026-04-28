import {
    MapPin,
    Mail,
    Globe,
    Linkedin,
    Phone,
    ArrowUpRight,
} from "lucide-react";

const regionalOffices = [
    "Gurgaon",
    "Jammu",
    "Mumbai",
    "Bangalore",
    "Dehradun",
];

const quickLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Industries", href: "#industries" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer id="contact" className="bg-brand-blue text-white">
            {/* Contact CTA Banner */}
            <div className="border-b border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 sm:flex-row lg:px-8">
                    <div>
                        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                            Ready to Transform Your Enterprise?
                        </h2>
                        <p className="mt-2 text-base text-slate-300">
                            Connect with our experts for a tailored consultation.
                        </p>
                    </div>
                    <a
                        href="mailto:enquiry@winnovation.org"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-orange-dark hover:shadow-xl hover:shadow-brand-orange/25"
                    >
                        Schedule a Consultation
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </div>

            {/* Footer Grid */}
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div>
                        <div className="mb-6 flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-orange">
                                <span className="text-xs font-bold text-white">W</span>
                            </div>
                            <span className="text-base font-bold tracking-tight">
                                WinnoVation
                            </span>
                        </div>
                        <p className="mb-6 text-sm leading-relaxed text-slate-400">
                            Empowering enterprise security and next-generation technology
                            goals with state-of-the-art solutions and consulting services.
                        </p>
                        <div className="flex items-start gap-2 text-sm text-slate-300">
                            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" />
                            <div>
                                <p className="font-semibold">Headquarters & Support Center</p>
                                <p className="text-slate-400">Greater Noida, Uttar Pradesh</p>
                            </div>
                        </div>
                    </div>

                    {/* Regional Offices */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-400">
                            Regional Offices
                        </h3>
                        <ul className="space-y-3">
                            {regionalOffices.map((city) => (
                                <li key={city} className="flex items-center gap-2 text-sm text-slate-300">
                                    <MapPin className="h-3.5 w-3.5 text-brand-orange/70" />
                                    {city}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-400">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-slate-300 transition-colors hover:text-brand-orange"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-400">
                            Get In Touch
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:enquiry@winnovation.org"
                                    className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-brand-orange"
                                >
                                    <Mail className="h-4 w-4 text-brand-orange/70" />
                                    enquiry@winnovation.org
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.winnovation.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-brand-orange"
                                >
                                    <Globe className="h-4 w-4 text-brand-orange/70" />
                                    www.winnovation.org
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/company/winnovation"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-brand-orange"
                                >
                                    <Linkedin className="h-4 w-4 text-brand-orange/70" />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
                    <p className="text-xs text-slate-500">
                        &copy; {new Date().getFullYear()} WinnoVation Technology Solutions.
                        All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-500">
                        <a href="#" className="transition-colors hover:text-slate-300">
                            Privacy Policy
                        </a>
                        <a href="#" className="transition-colors hover:text-slate-300">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
