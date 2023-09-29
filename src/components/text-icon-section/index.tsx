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
        <div className={`flex flex-col items-center ${bgColor} mr-2 ml-2 p-4 rounded-d-info`}>
            <img src={icon} className="text-icon" alt="React logo" />
            <p className="text-black text-center">{text}</p>
        </div>
    );
}
