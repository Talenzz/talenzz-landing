import { useRouteError, Link } from "react-router-dom";
import { DefaultButton } from "../../components/DefaultButton";

export default function ErrorPage() {
    const error = useRouteError() as any;
    console.error(error);

    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4">Oops!</h1>
                <p className="text-lg mb-4">
                    Es scheint, als würde diese Seite nicht existieren!
                </p>
                <p className="text-lg mb-4">
                    <code className="bg-gray-200 rounded-md p-1">
                        {error.statusText || error.message}
                    </code>
                </p>
                <Link to="/">
                    <DefaultButton bgColor="bg-sky" text="Zurück zur Seite" />
                </Link>
            </div>
        </>
    );
}
