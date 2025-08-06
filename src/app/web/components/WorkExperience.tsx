import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
    type: "professional" | "academic" | "personal";
    title: string;
    companyOrContext: string;
    period: string;
    description: string;
    technologies: string[];
}

const experiences: Experience[] = [
    {
        type: "professional",
        title: "Desenvolvedor Front-end Pleno",
        companyOrContext: "Empresa Incrível",
        period: "JAN 2022 - Presente",
        description:
            "Desenvolvimento e manutenção de aplicações web de larga escala utilizando React e TypeScript, focado em performance e experiência do usuário.",
        technologies: ["React", "TypeScript", "Redux", "Jest"]
    },
    {
        type: "academic",
        title: "Sistema de Gerenciamento Acadêmico",
        companyOrContext: "Universidade Exemplo",
        period: "2021",
        description:
            "Projeto de conclusão de curso para um sistema de gerenciamento de notas e matrículas, desenvolvido em equipe utilizando metodologias ágeis.",
        technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"]
    },
    {
        type: "personal",
        title: "Este Portfólio",
        companyOrContext: "Projeto Pessoal",
        period: "2024",
        description:
            "Meu portfólio pessoal construído com as tecnologias mais modernas do ecossistema React para demonstrar minhas habilidades.",
        technologies: ["Vite", "React", "TypeScript", "TailwindCSS"]
    }
];

export default function WorkExperience() {
    const [activeTab, setActiveTab] =
        useState<Experience["type"]>("professional");
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const experiencesContainerRef = useRef(null);

    const filteredExperiences = experiences.filter(
        (exp) => exp.type === activeTab
    );

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            }
        );
    }, []);

    useEffect(() => {
        if (experiencesContainerRef.current) {
            const cards = (experiencesContainerRef.current as HTMLElement)
                .children;
            gsap.fromTo(
                cards,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    delay: 0.2
                }
            );
        }
    }, [activeTab]);

    const handleTabChange = (tab: Experience["type"]) => {
        if (tab === activeTab) return;

        if (experiencesContainerRef.current) {
            const cards = (experiencesContainerRef.current as HTMLElement)
                .children;
            gsap.to(cards, {
                opacity: 0,
                y: -20,
                duration: 0.2,
                stagger: 0.1,
                onComplete: () => {
                    setActiveTab(tab);
                }
            });
        }
    };

    return (
        <section
            id="work-experience"
            ref={sectionRef}
            className="flex flex-col items-center justify-center py-16 px-4 w-full max-w-7xl"
        >
            <h1 className="text-4xl font-bold text-center mb-12">
                {t("workExperienceTitle")}
            </h1>
            <div className="w-full">
                <ul className="flex justify-center border-b border-gray-300 dark:border-gray-600 mb-8">
                    <li
                        className={`cursor-pointer transition-all duration-300 px-6 py-2 text-lg font-medium ${
                            activeTab === "professional"
                                ? "border-b-2 border-green-d text-green-d"
                                : "text-gray-600 dark:text-gray-400"
                        }`}
                        onClick={() => handleTabChange("professional")}
                    >
                        {t("tabProfessional")}
                    </li>
                    <li
                        className={`cursor-pointer px-6 py-2 text-lg font-medium ${
                            activeTab === "academic"
                                ? "border-b-2 border-green-d text-green-d"
                                : "text-gray-600 dark:text-gray-400"
                        }`}
                        onClick={() => handleTabChange("academic")}
                    >
                        {t("tabAcademic")}
                    </li>
                    <li
                        className={`cursor-pointer px-6 py-2 text-lg font-medium ${
                            activeTab === "personal"
                                ? "border-b-2 border-green-d text-green-d"
                                : "text-gray-600 dark:text-gray-400"
                        }`}
                        onClick={() => handleTabChange("personal")}
                    >
                        {t("tabPersonal")}
                    </li>
                </ul>
                <div
                    ref={experiencesContainerRef}
                    className="transition-all duration-300 space-y-8"
                >
                    {filteredExperiences.map((exp, index) => (
                        <div
                            key={`${activeTab}-${index}`}
                            className="bg-white/5 dark:bg-black/20 p-6 rounded-lg shadow-lg backdrop-blur-sm"
                        >
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-semibold">
                                    {t(`exp${index + 1}Title`)}
                                </h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {t(`exp${index + 1}Period`)}
                                </span>
                            </div>
                            <h4 className="text-lg font-medium text-green-d mb-4">
                                {t(`exp${index + 1}Company`)}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {t(`exp${index + 1}Description`)}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-gray-200 dark:bg-gray-700 text-sm py-1 px-3 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
