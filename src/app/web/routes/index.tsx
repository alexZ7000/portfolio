import ErrorPage from "@screens/ErrorPage.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@screens/Home.tsx";
import Navbar from "@components/Navbar.tsx";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className={"pt-24 md:pt-32"} />
            <div className={"w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"}>
                <Routes>
                    <Route path={"/portfolio/"} element={<Home />} />
                    <Route path={"*"} element={<ErrorPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
