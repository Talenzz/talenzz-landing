interface ButtonProps {
    text: string;
    bgColor: string;
    className?: string;
    uppercase?: boolean;
    bold?: boolean;
    Icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

export function DefaultButton({
    text,
    bgColor,
    className,
    uppercase = false,
    bold = true,
    Icon,
    disabled = false,
    onClick,
}: ButtonProps) {
    const b = bold ? "font-bold" : "";
    const u = uppercase ? "uppercase" : "";
    const c = disabled ? "cursor-not-allowed" : "";

    return (
        <button
            className={`px-10 py-4 ${bgColor} text-black rounded-full ${b} ${u} ${className} ${c}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="flex items-center justify-between">
                {text}
                {Icon && <span className="ml-4">{Icon}</span>}
            </span>
        </button>
    );
}
