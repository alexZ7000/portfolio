import AppRoutes from "@routes/index";
import ToasterContainer from "@components/ToasterContainer.tsx";
import { useThemeDetector } from "@functions/ThemeDetector.ts";
import { useState, useEffect } from "react";
import Preloader from "@components/Preloader.tsx";
import { useCustomCursor } from "@functions/CustomCursor.ts";
import EmbersBackground from "@components/EmbersBackground.tsx";

export default function App() {
    useCustomCursor();
    const isDarkTheme = useThemeDetector();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        if (!loading) {
            document.body.style.overflow = "auto";
        }
    }, [loading]);

    useEffect(() => {
        const favicon = document.getElementById(
            "favicon"
        ) as HTMLLinkElement | null;
        if (favicon)
            favicon.href = isDarkTheme
                ? "/portfolio/dragonWhite.svg"
                : "/portfolio/dragonBlack.svg";
    }, [isDarkTheme]);

    return (
        <>
            <EmbersBackground />

            {loading && <Preloader onComplete={() => setLoading(false)} />}

            <ToasterContainer />
            <AppRoutes />
        </>
    );
}
