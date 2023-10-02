interface PageContainerProps {
    children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
    return (
        <div className="text-center items-center justify-center mx-auto w-10/12 lg:w-9/12">
            {children}
        </div>
    );
}
