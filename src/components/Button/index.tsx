interface ButtonProps {
    text: string;
    bgColor: string;
    onClick?: () => void;
}

export function ToggleButton({
    text,
    bgColor,
    onClick,
}: ButtonProps) {
    return (
        <button
            className={`px-4 py-2 ${bgColor} text-black rounded-full font-bold uppercase`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
