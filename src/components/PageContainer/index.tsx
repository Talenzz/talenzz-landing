interface PageContainerProps {
    children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
    return (
        // <div className="text-center items-center justify-center mx-auto w-10/12 lg:w-pc">
        //     {children}
        // </div>
        <main className="flex flex-col min-h-full items-center content-center">
            <div className="flex flex-col items-stretch gap-12 lg:gap-16 max-w-40r lg:max-w-pc w-full px-8">
                {children}
            </div>
        </main>
    );
}
