interface ButtonProps {
    text: string;
    bgColor: string;
    uppercase?: boolean;
    bold?: boolean;
    onClick?: () => void;
}

export function DefaultButton({
    text,
    bgColor,
    uppercase = false,
    bold = true,
    onClick,
}: ButtonProps) {
    const b = bold ? "font-bold" : "";
    const u = uppercase ? "uppercase" : "";

    return (
        <button
            className={`px-4 py-2 ${bgColor} text-black rounded-full ${b} ${u}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
