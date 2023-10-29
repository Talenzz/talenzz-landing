import Markdown from "react-markdown";
import { imprintContent } from "../../data/imprint";
import styles from "./index.module.css";
import { PageContainer } from "../../components/PageContainer";
import logo from "../../assets/logo.svg";
import { Link, ScrollRestoration } from "react-router-dom";

export default function ImprintPage() {
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
                    <Markdown className={styles.imprint}>
                        {imprintContent}
                    </Markdown>
                </div>
            </PageContainer>
        </>
    );
}
