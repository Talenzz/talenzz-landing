import { ApplySection as IApplySection } from "../../types";
import guy from "../../assets/images/saxophone_guy.webp";
import guy_fallback from "../../assets/images/saxophone_guy.png";
import { Image } from "../Image";
import { DefaultButton } from "../DefaultButton";
import { BiLinkExternal } from "react-icons/bi";

interface ApplySectionProps {
    content: IApplySection;
}

export function ApplySection({ content }: ApplySectionProps) {
    const descriptionText = content.description.map((text, i) => {
        return (
            <p key={i} className="text-left text-xl py-4">
                {text}
            </p>
        );
    });

    return (
        <div
            id="apply-section"
            className="bg-icterine rounded-m-info md:rounded-d-info flex"
        >
            <div className="flex-1 flex flex-col p-12 lg:py-16 lg:pl-16 lg:pr-0">
                <h2 className="text-center md:text-left text-4xl md:text-5xl mb-4 font-bold">
                    {content.title}
                </h2>
                {descriptionText}
                <div className="h-8" />
                <DefaultButton
                    text={content.button.text}
                    className="self-center text-lg"
                    bgColor="bg-white"
                    Icon={<BiLinkExternal />}
                />
            </div>
            <div className="hidden lg:flex justify-end items-end pt-16 pr-16">
                <Image
                    src={guy}
                    fallback={guy_fallback}
                    alt="Complex Component Image"
                    className="h-auto max-w-md"
                />
            </div>
        </div>
    );
}
