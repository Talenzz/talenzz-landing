import { useEffect } from "react";
import "vanilla-cookieconsent";
import pluginConfig from "./config";

function handlePrivacyLinkClick() {
    window.location.hash = '#datenschutz';
    window.CC.hideSettings();
}
window.handlePrivacyLinkClick = handlePrivacyLinkClick;

export function CookieConsent() {
    useEffect(() => {
        /**
         * useEffect is executed twice (React 18+),
         * make sure the plugin is initialized and executed once
         */
        if (!document.getElementById("cc--main")) {
            window.CC = window.initCookieConsent();
            window.CC.run(pluginConfig);
        }
    }, []);

    return null;
}
