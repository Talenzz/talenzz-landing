import { Header } from "../Header";
import { Image } from "../Image";
import logo from "../../assets/logo.svg";
import header_image from "../../assets/images/header_image.webp";
import header_image_fallback from "../../assets/images/header_image.jpg";
import { DefaultButton } from "../DefaultButton";
import { HeroText } from "../../types";
import { BsArrowRight } from "react-icons/bs";

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
                className="absolute w-full h-full object-cover object-center brightness-25 z-0"
            />

            <Header />

            <div className="h-24"></div>

            <div className="relative flex flex-col items-center justify-center h-full z-0 pb-14">
                <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-white flex flex-col items-center justify-center select-none">
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="logo"
                            className="lg:h-24 md:h-14 h-9 w-auto mx-3 md:mx-4 align-middle mt-1 md:mt-2 lg:mt-4"
                        />
                        <span className="w-full">ist das erste</span>
                    </div>
                    <div className="text-center">
                        <span>Community Musiklabel.</span>
                    </div>
                </h1>
                <div className="h-4"></div>
                <p className="text-lg md:text-2xl text-white mt-4 mb-8 text-center w-7/12 lg:w-54p">
                    {text.subline}
                </p>
                <DefaultButton
                    text={text.button.text}
                    bgColor={"bg-white"}
                    className="mb-8 lg:text-xl"
                    Icon={<BsArrowRight />}
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
