import { useTranslation } from "react-i18next";
// ... outros imports
import DragonAnimation from "@components/DragonAnimation.tsx";
import Contact from "@components/Contact.tsx";
import WorkExperience from "@components/WorkExperience.tsx";
import AboutMe from "@components/AboutMe.tsx";
import Certificates from "@components/Certificates.tsx";
import "@styles/gradient.css";

export default function Home() {
    const { t } = useTranslation();

    return (
        <main className="flex flex-col items-center gap-24 md:gap-32 lg:gap-48">
            <section
                id="home"
                className="relative w-full min-h-screen flex items-center"
            >
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-1/2 lg:w-1/3 -z-10 opacity-30 md:opacity-100">
                    <DragonAnimation />
                </div>
                <div className="w-full flex justify-end">
                    <div className="w-full lg:w-3/5 text-center lg:text-left pr-4 lg:pr-16">
                        <h1
                            className={
                                "text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bluebright-d via-green-d to-green-d background-animate bg-[length:200%_100%]"
                            }
                        >
                            {t("heroTitle")}
                        </h1>
                    </div>
                </div>
            </section>

            <AboutMe />
            <WorkExperience />
            <Certificates />

            <footer id="contact" className="w-full max-w-7xl px-4">
                <div
                    className={
                        "flex flex-col gap-y-12 transition-all justify-center items-center"
                    }
                >
                    <h1 className={"text-5xl md:text-6xl font-bold"}>
                        {t("contactTitle")}
                    </h1>
                    <Contact />
                </div>
            </footer>
        </main>
    );
}
