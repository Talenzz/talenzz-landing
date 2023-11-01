import { FaFacebookF, FaInstagram, FaDiscord, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ActionIcon } from "../ActionIcon";
import { DefaultButton } from "../DefaultButton";
import { PageContainer } from "../PageContainer";
import { Footer as FooterType } from "../../types";
import brainstorm_logo from "../../assets/images/brainstorm_logo.svg";
import emergenza_logo from "../../assets/images/emergenza_logo.svg";
import microsoft_partner from "../../assets/images/MS_Startups_Celebration_Badge_Light.png";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

interface FooterProps {
    text: FooterType;
}

export function Footer({ text }: FooterProps) {
    const social = [
        {
            icon: <FaInstagram className="text-xl text-black" />,
            link: text.social.instagram,
        },
        {
            icon: <FaFacebookF className="text-xl text-black" />,
            link: text.social.facebook,
        },
        {
            icon: <FaXTwitter className="text-xl text-black" />,
            link: text.social.twitter,
        },
        {
            icon: <FaDiscord className="text-xl text-black" />,
            link: text.social.discord,
        },
        {
            icon: <FaTiktok className="text-xl text-black" />,
            link: text.social.tiktok,
        },
    ];

    const icons = social.map((s, i) => {
        return (
            <ActionIcon
                key={i}
                Icon={s.icon}
                bgColor={"bg-white"}
                href={s.link}
            />
        );
    });

    const logo_comp = (
        <img src={logo} alt="Talenzz Logo" className="max-h-12 lg:max-h-14" />
    );

    const texts = {
        company: (
            <>
                <div className="font-bold text-2xl">
                    {text.info.company.name}
                </div>
                <div>{text.info.company.slogan}</div>
            </>
        ),
        address: (
            <>
                <div>{text.info.address.street}</div>
                <div>{text.info.address.city}</div>
            </>
        ),
        contact: (
            <>
                <div>{text.info.contact.title}</div>
                <div>
                    <a href={`mailto:${text.info.contact.email}`}>
                        {text.info.contact.email}
                    </a>
                </div>
            </>
        ),
        terms: (
            <>
                <div>
                    <Link to={text.info.imprint.link}>
                        {text.info.imprint.text}
                    </Link>
                </div>
                <div>
                    <Link to={text.info.terms.link}>
                        {text.info.terms.text}
                    </Link>
                </div>
            </>
        ),
    };

    return (
        <>
            <div className="bg-sky">
                <PageContainer>
                    <div className="flex content-center items-center xl:content-normal flex-wrap flex-col xl:flex-row gap-12 xl:gap-0 justify-between pt-12 pb-12">
                        <a href="https://www.bmm-ag.de/">
                            <img src={brainstorm_logo} alt="Brainstorm Logo" />
                        </a>
                        <a href="https://emergenza.live/">
                            <img src={emergenza_logo} alt="Emergenza Logo" />
                        </a>
                        <a href="https://www.microsoft.com/en-us/startups">
                            <img
                                className="max-w-xs"
                                src={microsoft_partner}
                                alt="Microsoft Partner Logo"
                            />
                        </a>
                        <DefaultButton
                            text={text.partners.button.text}
                            bgColor="bg-white"
                            className="self-center text-xl lg:mr-auto lg:ml-auto lg:mt-8"
                            disabled
                            onClick={() =>
                                window.open(text.partners.button.link)
                            }
                        />
                    </div>
                </PageContainer>
            </div>

            <div className="bg-black text-white">
                <PageContainer>
                    <div className="py-10">
                        <div className="hidden xl:grid grid-rows-2 gap-8">
                            <div className="grid grid-cols-4 gap-4">
                                <div className="flex justify-start items-center">
                                    {logo_comp}
                                </div>
                                <div />
                                <div />
                                <div className="flex justify-end items-center space-x-2">
                                    {icons}
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4 text-1halfxl">
                                <div className="text-left space-y-2">
                                    {texts.company}
                                </div>
                                <div className="mx-auto text-left space-y-2">
                                    {texts.address}
                                </div>
                                <div className="ml-auto text-left space-y-2">
                                    {texts.contact}
                                </div>
                                <div className="ml-auto text-left space-y-2">
                                    {texts.terms}
                                </div>
                            </div>
                        </div>

                        <div className="hidden xl:hidden md:grid gap-4 text-center items-center">
                            <div className="flex flex-col gap-5 justify-start items-center mb-4">
                                {logo_comp}
                                <div className="flex space-x-4">{icons}</div>
                            </div>
                            <div>{texts.company}</div>
                            <div className="flex justify-between my-4">
                                <div className="text-left">{texts.address}</div>
                                <div className="text-left">{texts.contact}</div>
                                <div className="text-left">{texts.terms}</div>
                            </div>
                        </div>

                        <div className="md:hidden grid gap-4 text-center items-center">
                            <div className="flex flex-col gap-5 justify-start items-center mb-4">
                                {logo_comp}
                                <div className="flex space-x-4">{icons}</div>
                            </div>
                            <div>{texts.company}</div>
                            <div className="flex justify-between mb-4">
                                <div className="text-left">{texts.address}</div>
                                <div className="text-left">{texts.contact}</div>
                            </div>
                            <div>{texts.terms}</div>
                        </div>
                    </div>
                </PageContainer>
            </div>
        </>
    );
}
