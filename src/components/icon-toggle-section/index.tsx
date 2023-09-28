import { useState } from "react";
import { ToggleButton } from "../Button";
import { TextIconSection } from "../text-icon-section";

import laptop from "../../assets/icons/laptop.svg";
import crowdfunding from "../../assets/icons/crowdfunding.svg";
import fans from "../../assets/icons/fans.svg";

export function IconToggleSection() {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div>
            <ToggleButton
                text="Button 1"
                bgColor={activeSection === 0 ? "bg-salmon" : "bg-gray-300"}
                onClick={() => setActiveSection(0)}
            />
            <ToggleButton
                text="Button 2"
                bgColor={activeSection === 1 ? "bg-sky" : "bg-gray-300"}
                onClick={() => setActiveSection(1)}
            />

            <div className="grid grid-cols-1 md:grid-cols-3">
                <TextIconSection
                    text={
                        activeSection === 0
                            ? "Get Funding for music through campaigns"
                            : "SignUpp/Invest in Campaigns"
                    }
                    icon={crowdfunding}
                    bgColor={activeSection === 0 ? "bg-salmon" : "bg-sky"}
                />
                <TextIconSection
                    text={
                        activeSection === 0
                            ? "Produce and release it without giving rights away"
                            : "Get royalities of the song you supported"
                    }
                    icon={laptop}
                    bgColor={activeSection === 0 ? "bg-salmon" : "bg-sky"}
                />
                <TextIconSection
                    text={
                        activeSection === 0
                            ? "Connect with fans throughh the power of web3. Get paid"
                            : "Get special rewards, connect with your artists"
                    }
                    icon={fans}
                    bgColor={activeSection === 0 ? "bg-salmon" : "bg-sky"}
                />
            </div>
        </div>
    );
}
