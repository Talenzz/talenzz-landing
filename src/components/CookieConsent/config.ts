import { loadGoogleAnalytics, updateAnalyticsConsent } from './analytics';

let gaLoaded = false; // Global flag to prevent multiple script loads

const pluginConfig: UserConfig = {
    current_lang: 'en',
    autoclear_cookies: true, // default: false
    page_scripts: true, // default: false

    onFirstAction: function (userPreferences: UserPreferences, cookie: SavedCookieContent) {
        // callback triggered only once
        const analyticsEnabled = window.CC.allowedCategory('analytics');
    },

    onAccept: function (savedCookieContent: SavedCookieContent) {
        if (window.CC.allowedCategory('analytics')) {
            // load GA
            loadGoogleAnalytics(gaLoaded);
        }
    },

    onChange: function (cookie: SavedCookieContent, changedCookieCategories: string[]) {
        if (changedCookieCategories.includes('analytics')) {
            const isAnalyticsEnabled = window.CC.allowedCategory('analytics');
            updateAnalyticsConsent(isAnalyticsEnabled);
        }
    },

    languages: {
        en: {
            consent_modal: {
                title: 'Wir verwenden Cookies!',
                description:
                    'Hi, wir verwenden notwendige Cookies, um die Funktionsfähigkeit dieser Webseite zu gewährleisten, und Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden nur mit Ihrem Einverständnis gesetzt. <button type="button" data-cc="c-settings" class="cc-link">Weitere Optionen</button>',
                primary_btn: {
                    text: 'Alle akzeptieren',
                    role: 'accept_all', // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Alle ablehnen',
                    role: 'accept_necessary', // 'settings' or 'accept_necessary'
                },
            },
            settings_modal: {
                title: 'Cookie Einstellungen',
                save_settings_btn: 'Einstellungen bestätigen',
                accept_all_btn: 'Alle akzeptieren',
                reject_all_btn: 'Alle ablehnen',
                close_btn_label: 'Schließen',
                cookie_table_headers: [
                    { col1: 'Name' },
                    { col2: 'Domain' },
                    { col3: 'Lebensdauer' },
                    { col4: 'Beschreibung' },
                ],
                blocks: [
                    {
                        title: 'Cookie usage 📢',
                        description:
                            'Wir verwenden Cookies, um grundlegende Funktionen der Website zu gewährleisten und Ihre Online-Erfahrung zu verbessern. Sie können für jede Kategorie wählen, ob Sie sich an- oder abmelden möchten. Weitere Informationen zu Cookies und anderen sensiblen Daten finden Sie in der vollständigen <a href="/datenschutz" class="cc-link">Datenschutzerklärung</a>.',
                    },
                    {
                        title: 'Notewendige Cookies',
                        description:
                            'Diese Cookies sind für das reibungslose Funktionieren unserer Website unerlässlich. Ohne Cookies kann die Website nicht richtig funktionieren.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                    },
                    {
                        title: 'Performance und Analytics Cookies',
                        description:
                            'Um unsere Webseite kontinuierlich zu verbessern, verfolgen wir Daten für statistische und analytische Zwecke. Mit diesen Cookies messen wir zum Beispiel, wie häufig Benutzer wiederkehren und welche Funktionen sie verwenden.',
                        toggle: {
                            value: 'analytics', // your cookie category
                            enabled: false,
                            readonly: false,
                        },
                        cookie_table: [
                            // list of all expected cookies
                            {
                                col1: '^_ga', // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 Jahre',
                                col4: 'Das Haupt-Cookie, das von Google Analytics verwendet wird, ermöglicht es dem Dienst, einen Besucher von einem anderen zu unterscheiden, und hat eine Lebensdauer von 2 Jahren. Jede Website, die Google Analytics verwendet, einschließlich der Google-Dienste, verwendet das Cookie "_ga".',
                                is_regex: true,
                            }
                        ],
                    },
                    {
                        title: 'Weitere Informationen',
                        description:
                            'Wenn Sie Fragen zu unserer Cookie-Richtlinie und Ihren Optionen haben, <a class="cc-link" href="mailto:support@talenzz.io">kontaktieren</a> Sie uns bitte.',
                    },
                ],
            },
        },
    },
};

export default pluginConfig;
