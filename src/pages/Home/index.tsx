import { InfoSection } from "../../components/InfoSection";
import { HeroHeader } from "../../components/HeroHeader";
import { PageContainer } from "../../components/PageContainer";
import { Footer } from "../../components/Footer";
import { StatsSection } from "../../components/StatsSection";
import { GetPageText } from "../../utils";
import { ApplySection } from "../../components/ApplySection";
import { SectionHeadline } from "../../components/SectionHeadline";
import { ScrollRestoration } from "react-router-dom";

export default function HomePage() {
    const text = GetPageText();

    return (
        <>
            <ScrollRestoration />
            <HeroHeader text={text.hero} />

            <div className="h-12" />

            <PageContainer>
                <StatsSection
                    info={text.stats.description}
                    statsText={text.stats.statsText}
                />
                <InfoSection
                    title={text.info.title}
                    buttons={text.info.buttons}
                    steps={text.info.steps}
                />

                <div>
                    <SectionHeadline text={text.transition.title} />
                    <div className="h-8" />
                    <p className="text-lg text-left">
                        {text.transition.description}
                    </p>
                </div>

                <ApplySection content={text.apply} />

                <div>
                    <p className="text-xl text-left font-bold">
                        Tretet unserem Newsletter bei, um mit uns die Zukunft
                        der Musikbranche mitzugestalten! Bleibt über alle
                        Entwicklungen informiert und verpasst keine News. Die
                        ersten 100 Anmeldungen kriegen einen Gutschein zum
                        Launch der Plattform im Januar 2024.
                    </p>

                    <iframe
                        width="100%"
                        height="850px"
                        src="https://a36683bd.sibforms.com/serve/MUIFALDG4Xq-mF3_qH-0aOOG3CPA8BQTYZsTTI340Q3BhM7RPeg4JBBBuHjWkZmRWH7py0kQsKAUzjsX5SejdjachwUOZH69Sn7yPGOPm4Q5rBR1h_R_I-lwRtOHC1QL5KqifWJ6KCkE_eGq0oalMWK6j0AWWxdD1SmsTpXvo-cnNMZFiX0jJcLrjQGPwKrFADJWPDR_hXTheLhT"
                    />
                </div>
            </PageContainer>
            <Footer text={text.footer} />
        </>
    );
}
