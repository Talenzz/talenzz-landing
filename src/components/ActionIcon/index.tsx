interface ActionIconProps {
    Icon: React.ReactNode;
    bgColor: string;
    className?: string;
    href?: string;
    onClick?: () => void;
}

export function ActionIcon({
    Icon,
    bgColor,
    className,
    href,
    onClick,
}: ActionIconProps) {
    if(href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`p-2 ${bgColor} rounded-full ${className}`}
            >
                {Icon}
            </a>
        );
    }
    
    return (
        <button
            className={`p-2 ${bgColor} rounded-full ${className}`}
            onClick={onClick}
        >
            {Icon}
        </button>
    );
}
