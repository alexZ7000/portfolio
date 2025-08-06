import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import { SiTypescript, SiJest, SiTailwindcss, SiGnubash } from "react-icons/si";
import { GrCycle } from "react-icons/gr";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const skillsRef = useRef<(HTMLDivElement | null)[]>([]);

    const skills = [
        { name: "React", icon: <FaReact size={24} /> },
        { name: "TypeScript", icon: <SiTypescript size={24} /> },
        { name: "Node.js", icon: <FaNodeJs size={24} /> },
        { name: "Jest", icon: <SiJest size={24} /> },
        { name: "TailwindCSS", icon: <SiTailwindcss size={24} /> },
        { name: "Git", icon: <FaGitAlt size={24} /> },
        { name: "Docker", icon: <FaDocker size={24} /> },
        { name: "AWS", icon: <FaAws size={24} /> },
        { name: "CI/CD", icon: <GrCycle size={24} /> },
        { name: "Scrum", icon: <SiGnubash size={24} /> }
    ];

    useEffect(() => {
        const section = sectionRef.current;
        const skillsElements = skillsRef.current;

        gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%"
                }
            }
        );

        gsap.fromTo(
            skillsElements,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%"
                }
            }
        );
    }, []);

    return (
        <section
            id="about-me"
            ref={sectionRef}
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
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            ref={(el) => (skillsRef.current[index] = el)}
                            className="flex items-center gap-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:bg-green-d/80 dark:hover:bg-green-d/80 hover:text-white"
                        >
                            {skill.icon}
                            <span>{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
