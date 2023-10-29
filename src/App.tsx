import "vanilla-cookieconsent/dist/cookieconsent.css";
import { CookieConsent } from "./components/CookieConsent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import ImprintPage from "./pages/Imprint";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";

function App() {
    const baseUrl = import.meta.env.VITE_BASE_URL ?? "/";
    const router = createBrowserRouter(
        [
            {
                path: "/",
                Component: HomePage,
                ErrorBoundary: ErrorPage,
            },
            {
                path: "/impressum",
                Component: ImprintPage,
            },
            {
                path: "/datenschutz",
                Component: PrivacyPolicyPage,
            },
        ],
        {
            basename: baseUrl,
        }
    );

    return (
        <>
            <CookieConsent />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
