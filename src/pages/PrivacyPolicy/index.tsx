import { Link, ScrollRestoration } from "react-router-dom";
import Markdown from "react-markdown";
import { privacyPolicyContent } from "../../data/privacyPolicy";
import { PageContainer } from "../../components/PageContainer";
import logo from "../../assets/logo.svg";
import styles from "./index.module.css";

export default function PrivacyPolicyPage() {
    return (
        <>
            <ScrollRestoration />
            <PageContainer>
                <div>
                    <Link to="/">
                        <picture>
                            <img
                                src={logo}
                                className="logo mx-auto md:mx-0 bg-black"
                                alt="Talenzz logo"
                            />
                        </picture>
                    </Link>
                    <Markdown className={styles.privacyPolicy}>
                        {privacyPolicyContent}
                    </Markdown>
                </div>
            </PageContainer>
        </>
    );
}
