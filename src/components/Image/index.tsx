interface ImageProps {
    src: string;
    fallback: string;
    alt: string;
    className?: string;
}

export function Image({ src, fallback, alt, className }: ImageProps) {
    return(
        <picture>
            <source srcSet={src} type="image/webp" />
            <img src={fallback} alt={alt} className={className} />
        </picture>
    );
}
