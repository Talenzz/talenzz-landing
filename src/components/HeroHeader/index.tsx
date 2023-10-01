import { Header } from "../Header";
import { Image } from "../Image";
import logo from "../../assets/logo.svg";
import header_image from "../../assets/images/header_image.webp";
import header_image_fallback from "../../assets/images/header_image.jpg";
import { DefaultButton } from "../DefaultButton";
import { ScrollLink } from "../ScrollLink";

export function HeroHeader() {
    return (
        <div className="relative" id="hero">
            <Image
                src={header_image}
                fallback={header_image_fallback}
                alt="Background"
                className="absolute w-full h-full object-cover brightness-50 z-0"
            />

            <Header />

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center h-screen z-0">
                <h1 className="text-4xl md:text-6xl font-bold text-white flex flex-col items-center justify-center select-none">
                    <div className="flex items-center text-center">
                        <img
                            src={logo}
                            alt="logo"
                            className="md:h-20 h-12 w-auto mx-4 align-middle mt-2 md:mt-3"
                        />
                        <span>ist das erste</span>
                    </div>
                    <div className="text-center">
                        <span>Community Label.</span>
                    </div>
                </h1>
                {/* ADD SOME SPACING */}
                <div className="h-16"></div>
                <p className="text-xl md:text-2xl text-white mt-4 mb-8 text-center w-7/12">
                    Talenzz demokratisiert die Musiklandschaft. Werde vom Fan
                    zum Schlüsselpartner - 1000 echte Fans machen den
                    Unterschied. Entdecke neue Musik, empfehle Deine Topsongs
                    der Community und unterstütze Deine Lieblingskünstlerinnen.
                </p>
                <DefaultButton text={"Jetzt loslegen"} bgColor={"bg-white"} className="mb-8" onClick={() => {
                    // scroll to #apply-section when button is clicked
                    const applySection = document.getElementById("apply-section");
                    if (applySection) {
                        applySection.scrollIntoView({ behavior: "smooth" });
                    }
                }}  />
                <ScrollLink to="info-section" text="Wie funktioniert es?" />
            </div>
        </div>
    );
}
