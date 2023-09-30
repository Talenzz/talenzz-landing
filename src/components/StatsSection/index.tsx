interface StatsSectionProps {
    info: string;
    statsText: { title: string; text: string }[];
}

export function StatsSection({ info, statsText }: StatsSectionProps) {
    const statsTexts = statsText.map((text, index) => {
        return (
            <div key={index} className="flex flex-col w-64 text-center md:text-left mt-12 md:mt-0">
                <span className="text-8xl font-bold">{text.title}</span>
                <p className=" text-body2 font-bold">{text.text}</p>
            </div>
        );
    });

    return (
        <div className="flex flex-col items-center md:flex-row md:justify-between content-center border-y border-black py-4">
            <div className="md:w-4/12 md:my-auto">
                <p className="w-full font-bold text-2xl md:text-3xl text-center md:text-left">
                    {info}
                </p>
            </div>
            {statsTexts}
        </div>
    );
}
