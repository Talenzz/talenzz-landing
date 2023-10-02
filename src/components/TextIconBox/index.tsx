interface TextIconSectionProps {
    text: string;
    icon: string;
    bgColor: string;
    className?: string;
}

export function TextIconBox({
    text,
    icon,
    bgColor,
    className,
}: TextIconSectionProps) {
    return (
        <div className={`${className}`}>
            <div
                className={`flex flex-col items-center justify-center ${bgColor} px-10 md:px-4 py-10 rounded-d-info h-full max-w-24r mx-auto`}
            >
                <img src={icon} alt="React logo" style={{ width: "100px" }}  className="mb-10"/>
                <p className="text-black text-center mt-2 text-xl font-bold self-start leading-10">
                    {text}
                </p>
            </div>
        </div>
    );
}
