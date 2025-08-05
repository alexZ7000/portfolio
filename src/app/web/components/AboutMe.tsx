import { useTranslation } from "react-i18next";

export default function AboutMe() {
    const { t } = useTranslation();
    const skills = [
        "React",
        "TypeScript",
        "Node.js",
        "Jest",
        "TailwindCSS",
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Scrum"
    ];

    return (
        <section
            id="about-me"
            className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-16 px-4"
        >
            <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-4xl font-bold mb-6">{t("aboutTitle")}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {t("aboutText")}
                </p>
            </div>
            <div className="lg:w-1/2">
                <h3 className="text-3xl font-bold mb-6 text-center lg:text-left">
                    {t("skillsTitle")}
                </h3>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-full font-medium"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
