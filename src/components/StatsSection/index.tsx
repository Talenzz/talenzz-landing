interface StatsSectionProps {
    info: string;
    statsText: { title: string; text: string }[];
}

export function StatsSection({ info, statsText }: StatsSectionProps) {
    const statsTexts = statsText.map((text, index) => {
        return (
            <div key={index} className="flex flex-col w-64 text-center lg:text-left mt-12 lg:mt-0">
                <span className="text-8xl font-bold">{text.title}</span>
                <p className=" text-body2 font-bold">{text.text}</p>
            </div>
        );
    });

    return (
        <div className="flex flex-col items-center lg:flex-row lg:justify-between content-center border-y border-black py-4">
            <div className="lg:w-4/12 lg:my-auto">
                <p className="w-full font-bold text-2xl lg:text-3xl text-center lg:text-left">
                    {info}
                </p>
            </div>
            {statsTexts}
        </div>
    );
}
