import { Button } from "@/components/Button"
import { Menu, X, Flame } from "lucide-react"
import { useEffect, useState } from "react";


const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#vision", label: "Vision & Mission" },
    { href: "#contact", label: "Contact" },
];




export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isScrolled
            ? "bg-white/95 backdrop-blur border-b border-border shadow-sm py-3"
            : "bg-transparent py-5"
            } z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a
                    href="/"
                    onClick={() => setIsMobileOpen(false)}
                    className="flex items-center gap-2 md:gap-3 leading-none font-logo font-bold tracking-wide text-primary transition hover:opacity-90"
                >
                    <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10">
                        <Flame className="text-orange-500 w-4 h-4 md:w-6 md:h-6" />
                    </div>

                    <span className="whitespace-nowrap text-sm md:text-xl">
                        WORLD <span className="text-secondary">FIRE</span>
                        <span className="block text-[10px] md:text-xs tracking-widest text-muted-foreground">
                            SAFETY SYSTEM
                        </span>
                    </span>
                </a>





                {/* Destop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index}
                                className="px-4 py-2 text-sm text-foreground hover:text-primary rounded-full hover:bg-muted transition">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm" onClick={() => { window.location.hash = "contact"; }}>
                        Contact Us
                    </Button>

                </div>


                {/* MObile Menu Button */}
                <button className="md:hidden p-2 text-foreground cursor-pointer"
                    onClick={() => setIsMobileOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

            </nav>


            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-border animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                onClick={() => setIsMobileOpen(false)}
                                className="text-lg text-foreground hover:text-primary py-2 transition rounded-full ">
                                {link.label}
                            </a>
                        ))}
                        <Button
                            size="sm"
                            onClick={() => {
                                setIsMobileOpen(false);
                                window.location.hash = "contact";
                            }}
                        >
                            Contact Us
                        </Button>


                    </div>
                </div>
            )}

        </header>
    );
};
