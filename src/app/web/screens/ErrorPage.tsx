import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ErrorPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div
            className={
                "w-full flex flex-col h-screen text-center items-center justify-center"
            }
        >
            <h1 className={"text-red-400 font-bold text-8xl"}>ERROR 404</h1>
            <p className={"text-red-500"}>{t("errorText")}</p>
            <button
                onClick={() => navigate("/portfolio/")}
                className={
                    "mt-8 px-8 py-3 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                }
            >
                {t("errorButton")}
            </button>
        </div>
    );
}
