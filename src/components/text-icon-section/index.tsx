interface TextIconSectionProps {
    text: string;
    icon: string;
    bgColor: string;
}

export function TextIconSection({ text, icon, bgColor }: TextIconSectionProps) {
    return (
        <div className="aspect-square relative">
            <div className={`grid grid-rows-2 items-center justify-center justify-items-center ${bgColor} p-4 rounded-d-info absolute inset-0 w-full h-full`}>
                <img src={icon} alt="React logo" />
                <p className="text-black text-center mt-2 text-2xl md:text-3xl font-bold self-start">{text}</p>
            </div>
        </div>
    );
}
