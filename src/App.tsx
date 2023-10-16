import { HeroHeader } from "./components/HeroHeader";
import { GetPageText } from "./utils";

function App() {
    const text = GetPageText();

    return (
        <>
            <HeroHeader text={text.hero} />
        </>
    );
}

export default App;
