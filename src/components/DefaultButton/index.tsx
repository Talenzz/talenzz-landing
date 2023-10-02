interface ButtonProps {
    text: string;
    bgColor: string;
    className?: string;
    uppercase?: boolean;
    bold?: boolean;
    Icon?: React.ReactNode;
    onClick?: () => void;
}

export function DefaultButton({
    text,
    bgColor,
    className,
    uppercase = false,
    bold = true,
    Icon,
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
                {Icon && <span className="ml-4">{Icon}</span>}
            </span>
        </button>
    );
}
