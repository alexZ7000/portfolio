import { Github, Linkedin, Mail, Copy } from "lucide-react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const { t } = useTranslation();
    const email = "alessandrolimafilho@gmail.com";
    const contactRef = useRef(null);

    const handleEmailClick = () => {
        void navigator.clipboard.writeText(email);
        toast.success(t("copySuccess"));
    };

    useEffect(() => {
        gsap.fromTo(
            contactRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: contactRef.current,
                    start: "top 80%"
                }
            }
        );
    }, []);

    return (
        <div ref={contactRef} className={"flex mb-20 w-full"}>
            <div
                className={
                    "w-full px-10 py-10 rounded-2xl drop-shadow-2xl items-center flex flex-col md:flex-row gap-8 bg-green-500/20 dark:bg-green-900/30 backdrop-blur-md"
                }
            >
                <img
                    className={
                        "rounded-full shadow-2xl w-48 h-48 md:w-60 md:h-60 object-cover"
                    }
                    src={"https://github.com/alexZ7000.png"}
                    alt={"alexZ7000 github profile photo"}
                />
                <div
                    className={
                        "flex flex-col justify-center items-center md:items-start text-center md:text-left"
                    }
                >
                    <h1 className={"text-4xl font-bold"}>Alessandro Lima</h1>
                    <h2 className={"text-2xl mb-4"}>{t("jobTitle")}</h2>
                    <div className={"flex gap-6 items-center"}>
                        <a
                            href={"https://www.github.com/alexz7000/"}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="transform transition-transform hover:scale-110"
                        >
                            <Github size={32} />
                        </a>
                        <a
                            href={"https://linkedin.com/in/alelimafilho"}
                            target={"_blank"}
                            rel={"noreferrer"}
                            className="transform transition-transform hover:scale-110"
                        >
                            <Linkedin size={32} />
                        </a>
                        <a
                            href={`mailto:${email}`}
                            className="transform transition-transform hover:scale-110"
                        >
                            <Mail size={32} />
                        </a>
                        <button
                            onClick={handleEmailClick}
                            className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-lg transform transition-transform hover:scale-110"
                            aria-label={t("copyButton")}
                        >
                            <Copy size={20} />
                            <span className="font-mono text-sm hidden sm:inline">
                                {email}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
