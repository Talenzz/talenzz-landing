interface InnerPageContainerProps {
    children: React.ReactNode;
}

export function InnerPageContainer({ children }: InnerPageContainerProps) {
    return (
        <div className="text-center items-center justify-center mx-auto min-h-screen w-10/12">
            {children}
        </div>
    );
}
