export interface TextJson {
    hero: HeroText;
    stats: StatsSection;
    info: InfoSection;
    companyInfo: string;
}

interface HeroText {
    headline: string;
    subline: string;
    button: {
        text: string;
        link: string;
    };
    section: {
        text: string;
        link: string;
    };
}

interface StatsSection {
    description: string;
    statsText: {
        title: string;
        text: string;
    }[];
}

interface InfoSection {
    title: string;
    buttons: string[];
    steps: { artist: string, fan: string }[];
}
