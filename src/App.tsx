import { InfoSection } from "./components/InfoSection";
import { HeroHeader } from "./components/HeroHeader";
import { PageContainer } from "./components/PageContainer";
import { Footer } from "./components/Footer";
import { StatsSection } from "./components/StatsSection";
import { GetPageText } from "./utils";
import { InnerPageContainer } from "./components/InnerPageContainer";
import { ApplySection } from "./components/ApplySection";

function App() {
    const text = GetPageText();

    return (
        <>
            <HeroHeader text={text.hero} />
            <PageContainer>
                <div className="h-20" />

                <StatsSection
                    info={text.stats.description}
                    statsText={text.stats.statsText}
                />

                <div className="h-20" />

                <InfoSection
                    title={text.info.title}
                    buttons={text.info.buttons}
                    steps={text.info.steps}
                />

                <div className="h-20" />

                <h2 className="text-5xl font-bold text-center lg:text-left">
                    {text.transition.title}
                </h2>
                <div className="h-8" />
                <p className="text-xl text-left">
                    {text.transition.description}
                </p>

                <div className="h-20" />

                <ApplySection content={text.apply} />

                <div className="h-20" />

                <InnerPageContainer>
                    <p className="text-xl text-left">
                        Tretet unserem Newsletter bei, um mit uns die Zukunft
                        der Musikbranche mitzugestalten! Bleibt über alle
                        Entwicklungen informiert und verpasst keine News. Die
                        ersten 100 Anmeldungen kriegen einen Gutschein zum
                        Launch der Plattform im Januar 2024.
                    </p>
                </InnerPageContainer>

                <iframe
                    width="100%"
                    height="900px"
                    src="https://a36683bd.sibforms.com/serve/MUIFAGAvr35q-uYbx2ltmVpk3LPRoTM9zgYhi2ffa08AD4-7M0HZCUY8jOTRZSZyZV9keROCtjkV3NoNY-3xyi1vz0X9T15_UQq_KNDrwdfPVRTVTJmT6nqkZxVtlXMouBb25sC33PPQ0yZtPO_2yln0IGg5aFcTIfrQoKpw2yE8HQZeFSC1LZ6jAwQj_rg2duq6MT4cOh4RlfJc"
                />
            </PageContainer>
            <Footer />
        </>
    );
}

export default App;
