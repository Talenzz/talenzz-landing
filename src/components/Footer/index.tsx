import brainstorm_logo from "../../assets/images/brainstorm_logo.svg";
import emergenza_logo from "../../assets/images/emergenza_logo.svg";
import { DefaultButton } from "../DefaultButton";
import { PageContainer } from "../PageContainer";
import { Footer as FooterType } from "../../types";

interface FooterProps {
    text: FooterType;
}

export function Footer({ text }: FooterProps) {
    return (
        <>
            <div className="bg-sky">
                <PageContainer>
                    <div className="flex flex-wrap flex-col md:flex-row gap-12 md:gap-0 justify-between pt-12 pb-12">
                        <a href="https://www.bmm-ag.de/">
                            <img
                                src={brainstorm_logo}
                                alt="Brainstorm Logo"
                                className="pr-16"
                            />
                        </a>
                        <a href="https://emergenza.live/">
                            <img src={emergenza_logo} alt="Emergenza Logo" />
                        </a>
                        <DefaultButton
                            text={text.partners.button.text}
                            bgColor="self-center bg-white text-xl"
                        />
                    </div>
                </PageContainer>
            </div>
            <div className="bg-black grid grid-cols-2 md:grid-cols-4"></div>
        </>
    );
}
