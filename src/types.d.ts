export interface TextJson {
    hero: HeroText;
    stats: StatsSection;
    info: InfoSection;
    transition: Transition;
    apply: ApplySection;
    form: FormSection;
    footer: Footer;
}

interface TextLinkTuple {
    text: string;
    link: string;
}

export interface HeroText {
    headline: string;
    subline: string;
    button: TextLinkTuple;
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

interface Transition {
    title: string;
    description: string;
}

export interface ApplySection {
    title: string;
    description: string[];
    button: TextLinkTuple;
}

interface FormSection {
    info: string;
}

export interface Footer {
    partners: {
        button: TextLinkTuple;
    };
}