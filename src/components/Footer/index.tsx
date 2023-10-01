import brainstorm_logo from "../../assets/images/brainstorm_logo.svg";
import emergenza_logo from "../../assets/images/emergenza_logo.svg";
import { DefaultButton } from "../DefaultButton";
import { InnerPageContainer } from "../InnerPageContainer";
import { PageContainer } from "../PageContainer";

export function Footer() {
    return (
        <>
            <div className="bg-sky">
                <PageContainer>
                    <InnerPageContainer>
                        <div className="flex flex-row pt-12 pb-12">
                            <img
                                src={brainstorm_logo}
                                alt="Brainstorm Logo"
                                className="pr-16"
                            />
                            <img src={emergenza_logo} alt="Emergenza Logo" />
                            <div className="flex flex-col ml-auto">
                                <p className="text-black text-2xl font-bold max-w-md">
                                    Möchten Sie eine Partnerschaft mit uns
                                    eingehen?
                                </p>
                                <DefaultButton
                                    text="Kontaktiere uns!"
                                    bgColor="bg-white"
                                />
                            </div>
                        </div>
                    </InnerPageContainer>
                </PageContainer>
            </div>
            <div className="bg-black grid grid-cols-2 md:grid-cols-4"></div>
        </>
    );
}
