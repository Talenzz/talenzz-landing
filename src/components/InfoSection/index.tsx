import { useState } from "react";
import { DefaultButton } from "../DefaultButton";
import { TextIconBox } from "../TextIconBox";

import laptop from "../../assets/icons/laptop.svg";
import crowdfunding from "../../assets/icons/crowdfunding.svg";
import fans from "../../assets/icons/fans.svg";

interface InfoSectionProps {
    title: string;
    buttons: string[];
    steps: { artist: string; fan: string }[];
}

export function InfoSection({ title, buttons, steps }: InfoSectionProps) {
    const [activeSection, setActiveSection] = useState(0);

    const icons = [crowdfunding, laptop, fans];

    const iconSections = steps.map((t, i) => {
        let c = '';

        if(i === 0) {
            c = 'justify-self-start';
        } else if (i === steps.length - 1) {
            c = 'justify-self-end';
        }

        return (
            <TextIconBox
                key={i}
                text={activeSection === 0 ? t.artist : t.fan}
                icon={icons[i]}
                bgColor={activeSection === 0 ? "bg-salmon" : "bg-sky"}
                className={c}
            />
        );
    });

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
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center content-center">
                <p className="text-center text-5xl mb-4 lg:mb-0 font-bold">
                    {title}
                </p>
                <div className="flex justify-center lg:block">{allButtons}</div>
            </div>

            <div className="h-10" />

            <div className="grid grid-cols-1 lg:grid-cols-3 self-stretch gap-12 lg:gap-0">
                {iconSections}
            </div>
        </div>
    );
}
