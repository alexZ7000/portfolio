import { useTranslation } from "react-i18next";

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
    return (
        <section
            id="certificates"
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/5 dark:bg-black/20 p-6 rounded-lg shadow-lg backdrop-blur-sm
                                   transform transition-transform duration-300 hover:-translate-y-2"
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
