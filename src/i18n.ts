import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation: {
            // Home
            subText:
                "Software Developer | React Specialist | Creative Solutions",
            contactButton: "Contact Me",

            // Navbar
            navHome: "Home",
            navAbout: "About Me",
            navWork: "Experience",
            navCertificates: "Certificates",
            navContact: "Contact",

            // Hero Section
            heroTitle:
                "Unleashing powerful solutions with precision and mastery.",

            // About Me Section
            aboutTitle: "About Me",
            aboutText:
                "I am a passionate software developer dedicated to creating innovative and efficient solutions. With experience in web development, I always seek to learn new technologies and improve my skills to deliver high-quality products that solve real problems.",
            skillsTitle: "My Skills",

            // Work Experience Section
            workExperienceTitle: "Work Experience",
            tabProfessional: "Professional",
            tabAcademic: "Academic",
            tabPersonal: "Personal",

            // -- Experiences (use keys like exp1, exp2 for easy management)
            exp1Title: "Senior Front-end Developer",
            exp1Company: "Awesome Inc.",
            exp1Period: "JAN 2022 - Present",
            exp1Description:
                "Development and maintenance of large-scale web applications using React and TypeScript, focusing on performance and user experience.",

            exp2Title: "Academic Management System",
            exp2Company: "Example University",
            exp2Period: "2021",
            exp2Description:
                "Final course project for a grade and enrollment management system, developed in a team using agile methodologies.",

            exp3Title: "This Portfolio",
            exp3Company: "Personal Project",
            exp3Period: "2024",
            exp3Description:
                "My personal portfolio built with the most modern technologies in the React ecosystem to showcase my skills.",

            // Certificates Section
            certificatesTitle: "Certificates",

            // Contact Section
            contactTitle: "Contact",
            jobTitle: "Software Developer",
            copySuccess: "Email copied to clipboard!",
            copyButton: "Copy email to clipboard",

            // 404
            errorText:
                "This endpoint doesn't match any other in our server. Please enter a valid endpoint to continue",
            errorButton: "Click here to go back to the home page"
        }
    },
    pt: {
        translation: {
            // Home
            subText:
                "Desenvolvedor de Software | Especialista em React | Soluções Criativas",
            contactButton: "Entre em Contato",

            // Navbar
            navHome: "Início",
            navAbout: "Sobre Mim",
            navWork: "Experiência",
            navCertificates: "Certificados",
            navContact: "Contato",

            // Hero Section
            heroTitle: "Liberando soluções poderosas com precisão e maestria.",

            // About Me Section
            aboutTitle: "Sobre Mim",
            aboutText:
                "Sou um desenvolvedor de software apaixonado por criar soluções inovadoras e eficientes. Com experiência em desenvolvimento web, busco sempre aprender novas tecnologias e aprimorar minhas habilidades para entregar produtos de alta qualidade que resolvem problemas reais.",
            skillsTitle: "Minhas Habilidades",

            // Work Experience Section
            workExperienceTitle: "Experiência Profissional",
            tabProfessional: "Profissional",
            tabAcademic: "Acadêmicos",
            tabPersonal: "Pessoais",

            // -- Experiências
            exp1Title: "Desenvolvedor Front-end Pleno",
            exp1Company: "Empresa Incrível",
            exp1Period: "JAN 2022 - Presente",
            exp1Description:
                "Desenvolvimento e manutenção de aplicações web de larga escala utilizando React e TypeScript, focado em performance e experiência do usuário.",

            exp2Title: "Sistema de Gerenciamento Acadêmico",
            exp2Company: "Universidade Exemplo",
            exp2Period: "2021",
            exp2Description:
                "Projeto de conclusão de curso para um sistema de gerenciamento de notas e matrículas, desenvolvido em equipe utilizando metodologias ágeis.",

            exp3Title: "Este Portfólio",
            exp3Company: "Projeto Pessoal",
            exp3Period: "2024",
            exp3Description:
                "Meu portfólio pessoal construído com as tecnologias mais modernas do ecossistema React para demonstrar minhas habilidades.",

            // Certificates Section
            certificatesTitle: "Certificados",

            // Contact Section
            contactTitle: "Contato",
            jobTitle: "Desenvolvedor de Software",
            copySuccess: "Email copiado para a área de transferência!",
            copyButton: "Copiar e-mail para a área de transferência",

            // 404
            errorText:
                "Este endpoint não corresponde a nenhum outro em nosso servidor. Por favor, insira um endpoint válido para continuar",
            errorButton: "Clique aqui para voltar à página inicial"
        }
    }
};

void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ["navigator", "htmlTag", "path", "subdomain"],
            caches: []
        }
    });
