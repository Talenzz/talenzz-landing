interface TextIconSectionProps {
    text: string;
    icon: string;
    bgColor: string;
}

export function TextIconSection({ text, icon, bgColor }: TextIconSectionProps) {
    return (
        <div
            className={`grid grid-rows-2 items-center justify-center justify-items-center ${bgColor} p-4 rounded-d-info h-full max-w-xs mx-auto`}
        >
            <img src={icon} alt="React logo" style={{ width: "100px" }} />
            <p className="text-black text-center mt-2 text-xl font-bold self-start">
                {text}
            </p>
        </div>
    );
}
