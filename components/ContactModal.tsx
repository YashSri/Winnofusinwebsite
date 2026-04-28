"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

type ContactModalProps = {
    open: boolean;
    onClose: () => void;
};

type FormValues = {
    name: string;
    email: string;
    organization: string;
    designation: string;
    phone: string;
    city: string;
    partnershipType: string;
    message: string;
};

type FormErrors = Partial<Pick<FormValues, "name" | "email" | "phone">>;

const initialValues: FormValues = {
    name: "",
    email: "",
    organization: "",
    designation: "",
    phone: "",
    city: "",
    partnershipType: "",
    message: "",
};

const partnershipTypes = [
    "Enterprise Solutions",
    "Cybersecurity",
    "Mobility",
    "IT Operations",
    "Employee Productivity",
    "Strategic Partnership",
];

const focusableSelector =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function ContactModal({ open, onClose }: ContactModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (!open) {
            return;
        }

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        requestAnimationFrame(() => {
            const firstFocusable = modalRef.current?.querySelector<HTMLElement>(focusableSelector);
            firstFocusable?.focus();
        });

        const handleKeyDown = (event: globalThis.KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [open, onClose]);

    const validate = () => {
        const nextErrors: FormErrors = {};

        if (!values.name.trim()) {
            nextErrors.name = "Full name is required.";
        }

        if (!values.email.trim()) {
            nextErrors.email = "Work email is required.";
        }

        if (!values.phone.trim()) {
            nextErrors.phone = "Phone number is required.";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validate()) {
            return;
        }

        setSubmitted(true);
        setValues(initialValues);
    };

    const handleChange = (
        field: keyof FormValues,
        value: string,
    ) => {
        setValues((current) => ({ ...current, [field]: value }));
        if (field === "name" || field === "email" || field === "phone") {
            setErrors((current) => ({ ...current, [field]: undefined }));
        }
    };

    const handleTrapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== "Tab") {
            return;
        }

        const focusable = Array.from(
            modalRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
        ).filter((element) => !element.hasAttribute("disabled"));

        if (focusable.length === 0) {
            return;
        }

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        }

        if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    };

    const inputClass =
        "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-orange-500 focus:shadow-[0_0_0_3px_rgba(255,138,0,0.22)]";

    const labelClass = "mb-2 block text-sm font-medium text-white/80";
    const errorClass = "mt-1 text-xs font-medium text-orange-200";

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 py-8 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseDown={onClose}
                >
                    <motion.div
                        ref={modalRef}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-modal-title"
                        aria-describedby="contact-modal-subtitle"
                        tabIndex={-1}
                        onKeyDown={handleTrapFocus}
                        onMouseDown={(event) => event.stopPropagation()}
                        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0B3A63] p-6 shadow-2xl backdrop-blur-xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                        <div className="mb-6 flex items-start justify-between gap-4">
                            <div>
                                <h2 id="contact-modal-title" className="text-2xl font-bold text-white">
                                    Start Your Project
                                </h2>
                                <p id="contact-modal-subtitle" className="mt-2 text-sm text-white/65">
                                    Tell us what you're building. We'll help you scale it.
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                                aria-label="Close contact form"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {submitted ? (
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-sm font-semibold text-white">
                                Thanks! We'll get back to you soon.
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className={labelClass}>
                                        Full Name <span className="text-orange-300">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        value={values.name}
                                        onChange={(event) => handleChange("name", event.target.value)}
                                        className={inputClass}
                                        placeholder="Your name"
                                        required
                                    />
                                    {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
                                </div>

                                <div>
                                    <label htmlFor="email" className={labelClass}>
                                        Work Email <span className="text-orange-300">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={values.email}
                                        onChange={(event) => handleChange("email", event.target.value)}
                                        className={inputClass}
                                        placeholder="name@company.com"
                                        required
                                    />
                                    {errors.email ? <p className={errorClass}>{errors.email}</p> : null}
                                </div>

                                <div>
                                    <label htmlFor="organization" className={labelClass}>
                                        Organization
                                    </label>
                                    <input
                                        id="organization"
                                        value={values.organization}
                                        onChange={(event) => handleChange("organization", event.target.value)}
                                        className={inputClass}
                                        placeholder="Company name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="designation" className={labelClass}>
                                        Designation
                                    </label>
                                    <input
                                        id="designation"
                                        value={values.designation}
                                        onChange={(event) => handleChange("designation", event.target.value)}
                                        className={inputClass}
                                        placeholder="Your role"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className={labelClass}>
                                        Phone Number <span className="text-orange-300">*</span>
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={values.phone}
                                        onChange={(event) => handleChange("phone", event.target.value)}
                                        className={inputClass}
                                        placeholder="+91 98765 43210"
                                        required
                                    />
                                    {errors.phone ? <p className={errorClass}>{errors.phone}</p> : null}
                                </div>

                                <div>
                                    <label htmlFor="city" className={labelClass}>
                                        City
                                    </label>
                                    <input
                                        id="city"
                                        value={values.city}
                                        onChange={(event) => handleChange("city", event.target.value)}
                                        className={inputClass}
                                        placeholder="City"
                                    />
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="partnershipType" className={labelClass}>
                                        Partnership Type
                                    </label>
                                    <select
                                        id="partnershipType"
                                        value={values.partnershipType}
                                        onChange={(event) => handleChange("partnershipType", event.target.value)}
                                        className={inputClass}
                                    >
                                        <option value="" className="bg-[#0B3A63]">
                                            Select a partnership type
                                        </option>
                                        {partnershipTypes.map((type) => (
                                            <option key={type} value={type} className="bg-[#0B3A63]">
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label htmlFor="message" className={labelClass}>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={values.message}
                                        onChange={(event) => handleChange("message", event.target.value)}
                                        className={`${inputClass} min-h-28 resize-y`}
                                        placeholder="Tell us about your project"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-full bg-gradient-to-r from-[#FF8A00] to-[#FF4D00] py-3 text-sm font-semibold text-white transition hover:scale-105 hover:shadow-[0_18px_40px_-18px_rgba(255,105,0,0.95)]"
                            >
                                Send Inquiry →
                            </button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
