"use client";

import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    if (!mounted) {
        return null;
    }

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Works", href: "/works" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight hover:text-teal-600 dark:hover:text-[#A8DADC] transition-colors">
                    Ayush Srivastava
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-[#A8DADC] ${pathname === link.href
                                ? "text-teal-600 dark:text-[#A8DADC]"
                                : "text-zinc-600 dark:text-zinc-400"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 mr-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="px-6 py-4 space-y-4 flex flex-col">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-sm font-medium transition-colors hover:text-teal-600 dark:hover:text-teal-400 ${pathname === link.href
                                    ? "text-teal-600 dark:text-teal-400"
                                    : "text-zinc-600 dark:text-zinc-400"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
