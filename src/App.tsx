import { InfoSection } from "./components/InfoSection";
import { HeroHeader } from "./components/HeroHeader";
import { PageContainer } from "./components/PageContainer";
import { Footer } from "./components/Footer";
import { StatsSection } from "./components/StatsSection";
import { GetPageText } from "./utils";
import { ApplySection } from "./components/ApplySection";
import { SectionHeadline } from "./components/SectionHeadline";

function App() {
    const text = GetPageText();

    return (
        <>
            <HeroHeader text={text.hero} />

            <div className="h-20 lg:h-12" />

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
                        src="https://a36683bd.sibforms.com/serve/MUIFAGAvr35q-uYbx2ltmVpk3LPRoTM9zgYhi2ffa08AD4-7M0HZCUY8jOTRZSZyZV9keROCtjkV3NoNY-3xyi1vz0X9T15_UQq_KNDrwdfPVRTVTJmT6nqkZxVtlXMouBb25sC33PPQ0yZtPO_2yln0IGg5aFcTIfrQoKpw2yE8HQZeFSC1LZ6jAwQj_rg2duq6MT4cOh4RlfJc"
                    />
                </div>
            </PageContainer>
            <Footer text={text.footer} />
        </>
    );
}

export default App;
