import { Header } from "../Header";
import { Image } from "../Image";
import logo from "../../assets/logo.svg";
import header_image from "../../assets/images/header_image.webp";
import header_image_fallback from "../../assets/images/header_image.jpg";
import { DefaultButton } from "../DefaultButton";
import { HeroText } from "../../types";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface HeroHeaderProps {
    text: HeroText;
}

export function HeroHeader({ text }: HeroHeaderProps) {
    return (
        <div className="relative" id="hero">
            <Image
                src={header_image}
                fallback={header_image_fallback}
                alt="Background"
                className="absolute w-full h-full object-cover brightness-25 z-0"
            />

            <Header />

            <div className="h-48 lg:h-72"></div>

            <div className="relative flex flex-col items-center justify-center h-full z-0 pb-14">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white flex flex-col items-center justify-center select-none">
                    <div className="flex items-center text-center">
                        <img
                            src={logo}
                            alt="logo"
                            className="lg:h-24 md:h-20 h-12 w-auto mx-4 align-middle mt-2 md:mt-3 lg:mt-4"
                        />
                        <span>ist das erste</span>
                    </div>
                    <div className="text-center">
                        <span>Community Label.</span>
                    </div>
                </h1>
                <div className="h-4"></div>
                <p className="text-xl md:text-2xl text-white mt-4 mb-8 text-center w-7/12 lg:w-54p">
                    {text.subline}
                </p>
                <DefaultButton
                    text={text.button.text}
                    bgColor={"bg-white"}
                    className="mb-8 lg:text-xl"
                    icon={faArrowRight}
                    onClick={() => {
                        // scroll to #apply-section when button is clicked
                        const applySection =
                            document.getElementById(text.button.link);
                        if (applySection) {
                            applySection.scrollIntoView({ behavior: "smooth" });
                        }
                    }}
                />
            </div>
        </div>
    );
}
