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
        <div className="bg-icterine rounded-m-info md:rounded-d-info flex">
            <div className="flex-1 flex flex-col p-12 md:p-24">
                <h2 className="text-center md:text-left text-4xl md:text-5xl mb-4 md:mb-0 font-bold">{content.title}</h2>
                <p className="text-left text-xl font-bold py-8">{content.description}</p>
                <p className="text-center md:text-left text-xl mb-4">{content.text}</p>
                <DefaultButton text={content.button.text} className="mb-4 self-center mt-auto" bgColor="bg-white" />
            </div>
            <div className="hidden md:flex justify-end items-end pt-16 pr-16">
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
