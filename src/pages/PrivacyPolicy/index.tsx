import { Link, ScrollRestoration } from "react-router-dom";
import Markdown from "react-markdown";
import { privacyPolicyContent } from "../../data/privacyPolicy";
import { PageContainer } from "../../components/PageContainer";
import logo from "../../assets/logo_black.svg";
import styles from "./index.module.css";

export default function PrivacyPolicyPage() {
    return (
        <>
            <ScrollRestoration />
            <div
                id="header-container"
                className="top-0 left-0 w-full p-4 z-10 pt-8"
            >
                <header id="header" className="md:w-9/12 w-11/12 mx-auto">
                    <Link to="/">
                        <picture>
                            <img
                                src={logo}
                                className="logo mx-auto md:mx-0"
                                alt="Talenzz logo"
                            />
                        </picture>
                    </Link>
                </header>
            </div>
            <PageContainer>
                <Markdown className={styles.privacyPolicy}>
                    {privacyPolicyContent}
                </Markdown>
            </PageContainer>
        </>
    );
}
