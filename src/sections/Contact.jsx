import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle,
    AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: Phone,
        label: "Call Us",
        value: "+91 8796290451",
        href: "tel:+918796290451",
    },
    {
        icon: Phone,
        label: "WhatsApp",
        value: "Chat on WhatsApp",
        href: "https://wa.me/918796290451",
    },
    {
        icon: Mail,
        label: "Email",
        value: "worldfire26@gmail.com",
        href: "mailto:worldfire26@gmail.com",
    },
    {
        icon: MapPin,
        label: "Office Address",
        value: "SHOP NO 3, DURGA DEVI PADA, OLD AMBERNATH GAON, Kailash Colony, Ambernath, Ulhasnagar, Maharashtra 421501",
        href: "https://maps.app.goo.gl/t8B4eKBrqfN9qPZr9?g_st=ic",
        target: "_blank",
        rel: "noopener noreferrer",
    },

];

export const Contact = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // 'success' or 'error'
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: "" });
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS configuration is missing. Please check your environment variables."
                );
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message: "Thank you! Our team will contact you shortly.",
            });
            setFormData({ name: "", phone: "", email: "", message: "" });

            navigate("/thank-you");
        } catch (err) {
            console.error("EmailJS error:", err);
            setSubmitStatus({
                type: "error",
                message:
                    err.text || err?.message || "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }



    };
    return (
        <section id="contact" className="py-32 relative overflow-hidden scroll-mt-32">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm uppercase">
                        Contact Us
                    </span>

                    <h2 className="text-2xl md:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6">
                        Request Fire Safety Service
                    </h2>

                    <p className="text-muted-foreground">
                        Get in touch for installation, refilling, inspection, or Fire NOC assistance.
                        Our team will respond quickly.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-6 md:gap-12 max-w-5xl mx-auto">

                    <div className="order-2 lg:order-1 glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    placeholder="Your name..."
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="pnumber"
                                    className="block text-sm font-medium mb-2">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    placeholder="+91 "
                                    inputMode="numeric"
                                    maxLength={14}
                                    onChange={(e) => {
                                        let value = e.target.value.replace(/\D/g, "");

                                        if (!value.startsWith("91")) value = "91";

                                        value = value.slice(0, 12);

                                        setFormData({
                                            ...formData,
                                            phone: value.length > 2
                                                ? `+91 ${value.slice(2)}`
                                                : "+91 ",
                                        });
                                    }}

                                    onFocus={() => {
                                        if (!formData.phone) {
                                            setFormData({ ...formData, phone: "+91 " });
                                        }
                                    }}
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                />
                            </div>


                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    placeholder="Tell us your requirement (Extinguisher / Hydrant / Alarm / NOC)"
                                    className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                />
                            </div>

                            <Button
                                className="w-full"
                                type="submit"
                                size="lg"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>Sending message...</>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </Button>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3
                     p-4 rounded-xl ${submitStatus.type === "success"
                                            ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                            : "bg-red-500/10 border border-red-500/20 text-red-400"
                                        }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="order-1 lg:order-2 space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                                    >
                                        <div className="w-9 h-9 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                        </div>

                                        <div>
                                            <div className="text-sm text-muted-foreground">
                                                {item.label}
                                            </div>
                                            <div className="text-[11px] md:text-xs font-medium wrap-break-word">
                                                {item.value}
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className="glass rounded-3xl p-8 border border-primary/30">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                <span className="font-medium">Emergency Support Available</span>
                            </div>
                            <p className="text-muted-foreground text-sm">
                                We provide quick response fire safety services including extinguisher refilling,
                                hydrant maintenance, alarm installation, and Fire NOC assistance.
                                Contact us today for inspection or quotation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};