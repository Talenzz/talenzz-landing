interface ScrollLinkProps {
    to: string;
    text: string;
}

export function ScrollLink({ to, text }: ScrollLinkProps) {
    // use scrollIntoView and behavior: smooth to scroll to the section
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const element = document.getElementById(to);
        element?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <a
            href={`#${to}`}
            onClick={handleClick}
            className="text-white underline"
        >
            {text}
        </a>
    );
}