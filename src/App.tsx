import { IconToggleSection } from "./components/icon-toggle-section";
import { HeroHeader } from "./components/HeroHeader";
import { PageContainer } from "./components/PageContainer";
import { Footer } from "./components/Footer";

function App() {
    return (
        <>
            <HeroHeader />
            <PageContainer>
                <IconToggleSection />
                <Footer />
            </PageContainer>
        </>
    );
}

export default App;
