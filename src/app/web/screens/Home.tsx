import DragonAnimation from "@components/Generic/DragonAnimation.tsx";
import Contact from "@components/Generic/Contact.tsx";

export default function Home() {
    return (
        <section>
            <div className={"fixed -z-10 left-32"}>
                <DragonAnimation />
            </div>
            <section className={"flex justify-center items-center"}>
                <h1>Welcome</h1>
            </section>
            <section className={"flex justify-center items-center"}>
                <h1>Work Experience</h1>
            </section>
            <section className={"flex justify-center items-center"}>
                <h1>About me</h1>
            </section>
            <footer>
                <Contact />
            </footer>
        </section>
    );
}
