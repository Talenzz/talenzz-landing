interface StatsSectionProps {
    info: string;
    statsText: { title: string; text: string }[];
}

export function StatsSection({ info, statsText }: StatsSectionProps) {
    const statsTexts = statsText.map((text, index) => {
        return (
            <div
                key={index}
                style={{ gridColumn: index + 1 }}
                className="max-w-xs text-center lg:text-left mt-12 lg:mt-0"
            >
                <span className="text-4xl md:text-6xl font-bold">{text.title}</span>
                <p className="font-bold text-md">{text.text}</p>
            </div>
        );
    });

    return (
        <div className="flex flex-col items-center lg:flex-row lg:justify-between content-center border-y border-black py-4">
            <div className="lg:w-4/12 lg:my-auto lg:mr-12">
                <p className="w-full font-bold text-xl lg:text-lg text-center lg:text-left">
                    {info}
                </p>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:grid-rows-1">{statsTexts}</div>
        </div>
    );
}
