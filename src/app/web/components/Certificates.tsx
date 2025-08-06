import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Certificate {
    title: string;
    issuer: string;
    year: number;
    link: string;
}

const certificates: Certificate[] = [
    {
        title: "React - The Complete Guide",
        issuer: "Udemy",
        year: 2023,
        link: "#"
    },
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        year: 2024,
        link: "#"
    }
];

export default function Certificates() {
    const { t } = useTranslation();
    const sectionRef = useRef(null);
    const certificatesRef = useRef<(HTMLAnchorElement | null)[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        const certificates = certificatesRef.current;

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

        certificates.forEach((cert) => {
            if (cert) {
                gsap.fromTo(
                    cert,
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        scrollTrigger: {
                            trigger: cert,
                            start: "top 90%"
                        }
                    }
                );
            }
        });
    }, []);

    return (
        <section
            id="certificates"
            ref={sectionRef}
            className="w-full max-w-7xl flex flex-col items-center justify-center py-16 px-4"
        >
            <h2 className="text-4xl font-bold mb-12 text-center">
                {t("certificatesTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                {certificates.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.link}
                        ref={(el) => (certificatesRef.current[index] = el)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                    >
                        <h3 className="text-xl font-semibold mb-2">
                            {cert.title}
                        </h3>
                        <p className="text-green-d font-medium">
                            {cert.issuer}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 mt-2">
                            {cert.year}
                        </p>
                    </a>
                ))}
            </div>
        </section>
    );
}
