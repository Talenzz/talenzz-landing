export interface TextJson {
    hero: HeroText;
    stats: StatsSection;
    info: InfoSection;
    companyInfo: string;
    apply: ApplySection;
}

interface TextLinkTuple {
    text: string;
    link: string;
}

interface HeroText {
    headline: string;
    subline: string;
    button: TextLinkTuple;
    section: TextLinkTuple;
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

export interface ApplySection {
    title: string;
    description: string;
    text: string;
    button: TextLinkTuple;
}
