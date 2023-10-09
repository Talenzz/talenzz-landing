import { ApplySection as IApplySection } from "../../types";
import guy from "../../assets/images/saxophone_guy.webp";
import guy_fallback from "../../assets/images/saxophone_guy.png";
import { Image } from "../Image";
import { DefaultButton } from "../DefaultButton";
import { BiLinkExternal } from "react-icons/bi";
import { SectionHeadline } from "../SectionHeadline";

interface ApplySectionProps {
    content: IApplySection;
}

export function ApplySection({ content }: ApplySectionProps) {
    const descriptionText = content.description.map((text, i) => {
        return (
            <p key={i} className="text-left text-lg py-4">
                {text}
            </p>
        );
    });

    return (
        <div
            id="apply-section"
            className="relative bg-icterine rounded-m-info md:rounded-d-info"
        >
            <div className="p-12 lg:py-16 lg:pl-16">
                <Image
                    src={guy}
                    fallback={guy_fallback}
                    alt="Complex Component Image"
                    className="hidden lg:block float-right max-w-md bottom-0"
                />

                <SectionHeadline text={content.title} />

                {descriptionText}

                <div className="h-8" />

                <DefaultButton
                    text={content.button.text}
                    className="self-center text-lg"
                    bgColor="bg-white"
                    Icon={<BiLinkExternal />}
                    onClick={() => window.open(content.button.link, "_blank")}
                />
            </div>
        </div>
    );
}
