interface ButtonProps {
    text: string;
    bgColor: string;
    className?: string;
    uppercase?: boolean;
    bold?: boolean;
    onClick?: () => void;
}

export function DefaultButton({
    text,
    bgColor,
    className,
    uppercase = false,
    bold = true,
    onClick,
}: ButtonProps) {
    const b = bold ? "font-bold" : "";
    const u = uppercase ? "uppercase" : "";

    return (
        <button
            className={`px-10 py-4 ${bgColor} text-black rounded-full ${b} ${u} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
