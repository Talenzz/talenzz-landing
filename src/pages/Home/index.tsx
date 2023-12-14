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

                <div id="newsletter">
                    <p className="text-xl text-left font-bold">
                        Tretet unserem Newsletter bei, um mit uns die Zukunft
                        der Musikbranche mitzugestalten! Bleibt über alle
                        Entwicklungen informiert und verpasst keine News. Die
                        ersten 100 Anmeldungen bekommen eine Überraschung zum
                        Launch der Plattform Anfang 2024.
                    </p>

                    <iframe
                        width="100%"
                        height="850px"
                        src="https://a36683bd.sibforms.com/serve/MUIFAGn5CgWzfroKsnqQ6IIDaNTrtDjUAzMUohfFT5IjRoUUs9niFFHxL1vaJjCfM38pesGy9iaPw26ddWKKOAIDLonv4AxI50mKcVJXnz-v4ckPucBWV0L4cwbyTVZei8MrfNHiqwS8nmOj3930DFgbXBIsIG_tR9yYDbl7Wqs9gnlm2J8Q7zTfMMHGNdirLdnKgULCjO4WsZiq"
                    />
                </div>
            </PageContainer>
            <Footer text={text.footer} />
        </>
    );
}
