import { useState } from "react";
import { DefaultButton } from "../DefaultButton";
import { TextIconSection } from "../text-icon-section";

import laptop from "../../assets/icons/laptop.svg";
import crowdfunding from "../../assets/icons/crowdfunding.svg";
import fans from "../../assets/icons/fans.svg";

export function IconToggleSection() {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div>
            <DefaultButton
                text="Artists"
                uppercase
                bgColor={activeSection === 0 ? "bg-salmon" : "bg-gray-300"}
                onClick={() => setActiveSection(0)}
            />
            <DefaultButton
                text="Fans"
                uppercase
                bgColor={activeSection === 1 ? "bg-sky" : "bg-gray-300"}
                onClick={() => setActiveSection(1)}
            />

            <div className="grid grid-cols-1 md:grid-cols-3">
                <TextIconSection
                    text={
                        activeSection === 0
                            ? "Finanzierung eines Musikprojekts durch Fans"
                            : "Anmelden & Unterstützen eines Projekts"
                    }
                    icon={crowdfunding}
                    bgColor={activeSection === 0 ? "bg-salmon" : "bg-sky"}
                />
                <TextIconSection
                    text={
                        activeSection === 0
                            ? "Mit der Fundingsumme die Single, oder das Album produzieren und über Talenzz digital veröffentlichen"
                            : "Crowdfunding+: Durch Deine Unterstützung wirst Du an den Streamingeinnahmen der Produktion beteiligt"
                    }
                    icon={laptop}
                    bgColor={activeSection === 0 ? "bg-salmon" : "bg-sky"}
                />
                <TextIconSection
                    text={
                        activeSection === 0
                            ? "Unabhängig bleiben, UnterstützerInnen für ihren Support belohnen und Fanbase erweitern"
                            : "Spezielle Fanrewards erhalten und MusikerInnen/ Bands helfen von ihrer Kunst zu leben"
                    }
                    icon={fans}
                    bgColor={activeSection === 0 ? "bg-salmon" : "bg-sky"}
                />
            </div>
        </div>
    );
}
