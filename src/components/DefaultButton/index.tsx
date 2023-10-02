import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
    text: string;
    bgColor: string;
    className?: string;
    uppercase?: boolean;
    bold?: boolean;
    icon?: IconDefinition;
    onClick?: () => void;
}

export function DefaultButton({
    text,
    bgColor,
    className,
    uppercase = false,
    bold = true,
    icon,
    onClick,
}: ButtonProps) {
    const b = bold ? "font-bold" : "";
    const u = uppercase ? "uppercase" : "";

    return (
        <button
            className={`px-10 py-4 ${bgColor} text-black rounded-full ${b} ${u} ${className}`}
            onClick={onClick}
        >
            <span className="flex items-center justify-between">
                {text}
                {icon && <FontAwesomeIcon icon={icon} className="ml-4" />}
            </span>
        </button>
    );
}
