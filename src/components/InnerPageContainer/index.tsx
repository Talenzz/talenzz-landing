interface InnerPageContainerProps {
    children: React.ReactNode;
}

export function InnerPageContainer({ children }: InnerPageContainerProps) {
    return (
        <div className="text-center items-center justify-center mx-auto w-11/12">
            {children}
        </div>
    );
}
