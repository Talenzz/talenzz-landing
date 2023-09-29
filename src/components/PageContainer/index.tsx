interface PageContainerProps {
    children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
    return (
        <div className="text-center items-center justify-center mx-auto min-h-screen w-10/12">
            {children}
        </div>
    );
}
