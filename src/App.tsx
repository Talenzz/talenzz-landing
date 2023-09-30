import { InfoSection } from "./components/InfoSection";
import { HeroHeader } from "./components/HeroHeader";
import { PageContainer } from "./components/PageContainer";
import { Footer } from "./components/Footer";
import { StatsSection } from "./components/StatsSection";
import { GetPageText } from "./utils";
import { InnerPageContainer } from "./components/InnerPageContainer";

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

                <InfoSection
                    title={text.info.title}
                    buttons={text.info.buttons}
                    steps={text.info.steps}
                />

                <div className="h-20" />

                <InnerPageContainer>
                    <p className="text-xl text-left">{text.companyInfo}</p>
                </InnerPageContainer>

                <Footer />
            </PageContainer>
        </>
    );
}

export default App;
