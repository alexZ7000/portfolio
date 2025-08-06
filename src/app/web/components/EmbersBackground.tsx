import React from "react";

export default function EmbersBackground() {
    const embersCount = 50;

    const embers = Array.from({ length: embersCount }).map((_, i) => {
        const style = {
            left: `${Math.random() * 100}%`,
            width: `${1 + Math.random() * 3}px`,
            height: `${1 + Math.random() * 3}px`,
            animationDuration: `${10 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 10}s`
        };
        return (
            <div
                key={i}
                className="ember"
                style={style as React.CSSProperties}
            />
        );
    });

    return <div className="embers-bg">{embers}</div>;
}
