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
    let align = className ? `lg:${className}` : "";

    return (
        <div className={align}>
            <div
                className={`flex flex-col items-center justify-center ${bgColor} px-4 md:px-6 lg:px-4 py-8 lg:py-10 rounded-d-info h-full md:max-w-18r xl:max-w-20r mx-auto`}
            >
                <img src={icon} alt="React logo" style={{ height: "100px" }} />
                <p className="text-black text-center mt-2 md:mt-4 lg:mt-6 text-md font-bold self-start leading-6">
                    {text}
                </p>
            </div>
        </div>
    );
}
