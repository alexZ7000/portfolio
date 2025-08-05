import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        void i18n.changeLanguage(lng);
    };

    return (
        <div className="flex gap-2">
            <button
                onClick={() => changeLanguage("en")}
                className={`font-bold ${i18n.language === "en" ? "text-green-d" : ""}`}
            >
                EN
            </button>
            <span>/</span>
            <button
                onClick={() => changeLanguage("pt")}
                className={`font-bold ${i18n.language === "pt" ? "text-green-d" : ""}`}
            >
                PT
            </button>
        </div>
    );
}
