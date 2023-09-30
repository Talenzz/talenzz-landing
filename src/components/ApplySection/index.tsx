import { ApplySection as IApplySection } from "../../types";
import guy from "../../assets/images/saxophone_guy.webp";
import guy_fallback from "../../assets/images/saxophone_guy.png";
import { Image } from "../Image";
import { DefaultButton } from "../DefaultButton";

interface ApplySectionProps {
    content: IApplySection;
}

export function ApplySection({ content }: ApplySectionProps) {
    return (
        <div className="bg-icterine md:rounded-d-info flex items-end">
            <div className="flex-1 flex flex-col justify-center mb-auto p-24">
                <h2 className="text-left text-4xl md:text-6xl mb-4 md:mb-0 font-bold">{content.title}</h2>
                <p className="text-base mb-2">{content.description}</p>
                <p className="text-sm mb-4">{content.text}</p>
                <DefaultButton text={content.button.text} className="mb-4" bgColor="bg-white" />
            </div>
            <div className="flex justify-end items-end mt-24 mr-24">
                <Image
                    src={guy}
                    fallback={guy_fallback}
                    alt="Complex Component Image"
                    className="h-auto"
                />
            </div>
        </div>
    );
}
