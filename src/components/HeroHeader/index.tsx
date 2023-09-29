import { Header } from "../Header";
import header_image from "../../assets/images/header_image.jpg";
import logo from "../../assets/logo.svg";

export function HeroHeader() {
    return (
        <div className="relative">
            <img
                src={header_image}
                alt="Background"
                className="absolute w-full h-full object-cover brightness-50 z-0"
            />

            <Header
                links={[
                    { text: "AGB", url: "#" },
                    { text: "Impressum", url: "#" },
                    { text: "FAQs", url: "#" },
                ]}
            />

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center h-screen z-0">
                <h1 className="text-4xl md:text-6xl font-bold text-white flex flex-col items-center justify-center">
                    <div className="flex items-center text-center">
                        <img
                            src={logo}
                            alt="logo"
                            className="md:h-20 h-12 w-auto mx-2 align-middle mt-2 md:mt-3"
                        />
                        <span>ist das erste</span>
                    </div>
                    <div className="text-center">
                        <span>Community Label.</span>
                    </div>
                </h1>
                <p className="text-xl md:text-2xl text-white mt-4 mb-8 text-center w-7/12">
                    Talenzz demokratisiert die Musiklandschaft. Werde vom Fan
                    zum Schlüsselpartner - 1000 echte Fans machen den
                    Unterschied. Entdecke neue Musik, empfehle Deine Topsongs
                    der Community und unterstütze Deine Lieblingskünstlerinnen.
                </p>
                <a href="#some-anchor" className="text-blue-500 underline">
                    Go to Section
                </a>
            </div>
        </div>
    );
}
