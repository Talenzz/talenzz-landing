import Markdown from "react-markdown";
import { imprintContent } from "../../data/imprint";
import styles from "./index.module.css";
import { PageContainer } from "../../components/PageContainer";
import logo from "../../assets/logo_black.svg";
import { Link, ScrollRestoration } from "react-router-dom";

export default function ImprintPage() {
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
                <Markdown className={styles.imprint}>{imprintContent}</Markdown>
            </PageContainer>
        </>
    );
}
