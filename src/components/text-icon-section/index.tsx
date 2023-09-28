interface TextIconSectionProps {
    text: string;
    icon: string;
    bgColor: string;
}

export function TextIconSection({
    text,
    icon,
    bgColor,
}: TextIconSectionProps) {
    return (
        <div className={`flex flex-col items-center ${bgColor} rounded-full`}>
            <img src={icon} className="max-w-sm" alt="React logo" />
            <p className="text-black text-center">{text}</p>
        </div>
    );
}
