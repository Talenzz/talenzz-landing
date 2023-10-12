interface SectionHeadlineProps {
    text: string;
    className?: string;
}

export function SectionHeadline({ text, className }: SectionHeadlineProps) {
    let align = className ? `lg:${className}` : "";

    return (
        <div className={align}>
            <h2 className="text-2xl md:text-4xl font-bold text-center lg:text-left">{text}</h2>
        </div>
    );
}
