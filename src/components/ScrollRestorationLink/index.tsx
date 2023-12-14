import { Link } from "react-router-dom";

interface ScrollRestorationLinkProps {
    to: string;
    children: React.ReactNode;
}

export function ScrollRestorationLink({ to, children }: ScrollRestorationLinkProps) {
    return(
        <Link to={to} onClick={() => window.scrollTo(0,0)}>
            {children}
        </Link>
    );
}