import { useThemeDetector } from "@functions/ThemeDetector.ts";
import { useTranslation } from "react-i18next";
import LogoWhite from "@assets/logoWhite.svg";
import LogoBlack from "@assets/logoBlack.svg";
import LanguageSwitcher from "@components/LanguageSwicther.tsx";

const navSections = [
    { id: "home", translationKey: "navHome" },
    { id: "about-me", translationKey: "navAbout" },
    { id: "work-experience", translationKey: "navWork" },
    { id: "certificates", translationKey: "navCertificates" }, // Adicionado certificados
    { id: "contact", translationKey: "navContact" }
];

export default function Navbar() {
    const isDarkTheme = useThemeDetector();
    const { t } = useTranslation();

    const handleScrollTo = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav className="w-full fixed z-50 backdrop-blur-lg bg-white/50 dark:bg-black/50 shadow-lg py-4 flex justify-center">
            <section className="w-full max-w-7xl px-6 py-2 flex justify-between items-center">
                <div
                    className="text-xl font-bold text-gray-800 dark:text-gray-100 cursor-pointer"
                    onClick={() => handleScrollTo("home")}
                >
                    <img
                        className={
                            "max-h-12 md:max-h-16 scale-[400%] md:scale-[525%]"
                        }
                        src={isDarkTheme ? LogoWhite : LogoBlack}
                        alt="Alessandro Lima logo"
                    />
                </div>

                <div className="flex items-center gap-6 md:gap-8">
                    <ul className="hidden md:flex gap-8 list-none p-0">
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
            </section>
        </nav>
    );
}
