import { useTranslation } from "react-i18next";
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
                className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 pt-24 lg:pt-0"
            >
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-8">
                    <div className="w-full max-w-sm sm:max-w-md lg:max-w-none">
                        <DragonAnimation />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left px-4 lg:px-0 lg:pl-8">
                    <h1
                        className={
                            "text-4xl md:text-6xl xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bluebright-d via-green-d to-green-d background-animate bg-[length:200%_100%]"
                        }
                    >
                        {t("heroTitle")}
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300">
                        {t("subText")}
                    </p>
                    <button
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="mt-8 px-8 py-3 bg-green-d text-white font-bold rounded-full hover:bg-green-l transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    >
                        {t("contactButton")}
                    </button>
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
