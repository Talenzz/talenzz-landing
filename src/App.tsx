import { IconToggleSection } from "./components/icon-toggle-section";
import { HeroHeader } from "./components/HeroHeader";
import { PageContainer } from "./components/PageContainer";
import { Footer } from "./components/Footer";
import { StatsSection } from "./components/StatsSection";
import { GetPageText } from "./utils";

function App() {
    const text = GetPageText();

    return (
        <>
            <HeroHeader />
            <PageContainer>
                <div className="h-20" />

                <StatsSection
                    info={text.stats.description}
                    statsText={text.stats.statsText}
                />

                <div className="h-20" />

                <IconToggleSection
                    title={text.info.title}
                    buttons={text.info.buttons}
                    steps={text.info.steps}
                />

                <Footer />
            </PageContainer>
        </>
    );
}

export default App;
