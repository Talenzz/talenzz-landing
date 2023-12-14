import "vanilla-cookieconsent/dist/cookieconsent.css";
import { CookieConsent } from "./components/CookieConsent";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import ImprintPage from "./pages/Imprint";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";

function App() {
    return (
        <>
            <CookieConsent />
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/impressum" element={<ImprintPage />} />
                    <Route path="/datenschutz" element={<PrivacyPolicyPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
