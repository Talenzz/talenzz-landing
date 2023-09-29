import { useState } from "react";
import logo from "../../assets/logo.svg";
import { DefaultButton } from "../DefaultButton";

type HeaderLink = {
    text: string;
    url: string;
};

interface HeaderProps {
    links: HeaderLink[];
}

export function Header({ links }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const hLinks = links.map((link) => (
        <a
            key={link.text}
            href={link.url}
            className={isOpen ? "block mb-2" : "text-white font-bold"}
        >
            {link.text}
        </a>
    ));

    return (
        <div className="absolute top-0 left-0 w-full p-4 z-10">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <img src={logo} className="logo" alt="Talenzz logo" />

                {/* Nav Links for Desktop */}
                <div className="hidden md:flex space-x-4">{hLinks}</div>

                {/* Button */}
                <DefaultButton text="Start free" bgColor="bg-sky" />


                {/* Burger Menu for Mobile */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="w-6 h-6"
                    >
                        <path d="M2.5 6h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2.5 11h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"></path>
                    </svg>
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-black text-white p-4">
                        {hLinks}
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Button
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
