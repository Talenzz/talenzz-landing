import { useState } from "react";
import { DefaultButton } from "../DefaultButton";
import { TextIconSection } from "../text-icon-section";

import laptop from "../../assets/icons/laptop.svg";
import crowdfunding from "../../assets/icons/crowdfunding.svg";
import fans from "../../assets/icons/fans.svg";

interface IconToggleSectionProps {
    title: string;
    buttons: string[];
    steps: { artist: string; fan: string }[];
}

export function IconToggleSection({
    title,
    buttons,
    steps,
}: IconToggleSectionProps) {
    const [activeSection, setActiveSection] = useState(0);

    const icons = [crowdfunding, laptop, fans];

    const iconSections = steps.map((t, i) => (
        <TextIconSection
            key={i}
            text={activeSection === 0 ? t.artist : t.fan}
            icon={icons[i]}
            bgColor={activeSection === 0 ? "bg-salmon" : "bg-sky"}
        />
    ));

    const allButtons = buttons.map((text, index) => {
        const mainColor = index === 0 ? "bg-salmon" : "bg-sky";
        return (
            <DefaultButton
                key={index}
                text={text}
                uppercase
                className="mx-2"
                bgColor={activeSection === index ? mainColor : "bg-gray-300"}
                onClick={() => setActiveSection(index)}
            />
        );
    });

    return (
        <div id="info-section">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center content-center">
                <p className="text-center text-6xl md:text-8xl mb-4 md:mb-0 font-bold">{title}</p>
                <div>{allButtons}</div>
            </div>

            <div className="h-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {iconSections}
            </div>
        </div>
    );
}
