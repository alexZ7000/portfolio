import { useThemeDetector } from "@functions/ThemeDetector.ts";
import { useTranslation } from "react-i18next";
import LogoWhite from "@assets/logoWhite.svg";
import LogoBlack from "@assets/logoBlack.svg";
import LanguageSwitcher from "@components/LanguageSwicther.tsx";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navSections = [
    { id: "home", translationKey: "navHome" },
    { id: "about-me", translationKey: "navAbout" },
    { id: "work-experience", translationKey: "navWork" },
    { id: "certificates", translationKey: "navCertificates" },
    { id: "contact", translationKey: "navContact" }
];

export default function Navbar() {
    const isDarkTheme = useThemeDetector();
    const { t } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollTo = (elementId: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(elementId);
        if (element) {
            const yOffset = -100;
            const y =
                element.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`w-full fixed z-50 backdrop-blur-xl transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white/80 dark:bg-black/80 shadow-lg" : "bg-transparent"} border-b border-white/10 dark:border-black/10 py-4 md:py-7 flex justify-center`}
        >
            <section className="w-full max-w-7xl ps-20 pe-4 sm:ps-20 md:ps-24 flex justify-between items-center">
                <div
                    className="text-xl font-bold text-gray-800 dark:text-gray-100 cursor-pointer"
                    onClick={() => handleScrollTo("home")}
                >
                    <img
                        className="h-12 md:max-h-16 scale-[400%] md:scale-[525%]"
                        src={isDarkTheme ? LogoWhite : LogoBlack}
                        alt="Alessandro Lima logo"
                    />
                </div>

                <div className="hidden lg:flex items-center gap-6 md:gap-8">
                    <ul className="flex gap-8 list-none p-0">
                        {navSections.map((section) => (
                            <li key={section.id}>
                                <button
                                    onClick={() => handleScrollTo(section.id)}
                                    className={`text-gray-600 dark:text-gray-300 ${
                                        isDarkTheme
                                            ? "hover:text-green-d"
                                            : "hover:text-green-l"
                                    } font-medium transition-all transform duration-300 hover:scale-105`}
                                >
                                    {t(section.translationKey)}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <LanguageSwitcher />
                </div>

                <div className="lg:hidden flex items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full h-screen bg-white/90 dark:bg-black/90 backdrop-blur-lg flex flex-col items-center justify-center">
                        <ul className="flex flex-col gap-8 items-center">
                            {navSections.map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() =>
                                            handleScrollTo(section.id)
                                        }
                                        className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
                                    >
                                        {t(section.translationKey)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <LanguageSwitcher />
                        </div>
                    </div>
                )}
            </section>
        </nav>
    );
}
