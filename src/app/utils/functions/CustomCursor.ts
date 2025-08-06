import { useEffect } from "react";

export const useCustomCursor = () => {
    useEffect(() => {
        const cursorDot = document.createElement("div");
        cursorDot.className = "custom-cursor-dot";
        document.body.appendChild(cursorDot);

        const cursorOutline = document.createElement("div");
        cursorOutline.className = "custom-cursor-outline";
        document.body.appendChild(cursorOutline);

        const moveCursor = (e: MouseEvent) => {
            const { clientX: posX, clientY: posY } = e;
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        };

        const addLinkHover = () => cursorOutline.classList.add("hover");
        const removeLinkHover = () => cursorOutline.classList.remove("hover");

        document.addEventListener("mousemove", moveCursor);

        document
            .querySelectorAll("a, button, .cursor-pointer")
            .forEach((el) => {
                el.addEventListener("mouseenter", addLinkHover);
                el.addEventListener("mouseleave", removeLinkHover);
            });

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document
                .querySelectorAll("a, button, .cursor-pointer")
                .forEach((el) => {
                    el.removeEventListener("mouseenter", addLinkHover);
                    el.removeEventListener("mouseleave", removeLinkHover);
                });
            cursorDot.remove();
            cursorOutline.remove();
        };
    }, []);
};
