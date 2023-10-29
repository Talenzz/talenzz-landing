export function loadGoogleAnalytics(gaLoaded) {
    if (gaLoaded || document.getElementById('google-analytics')) return; // Prevent the script from loading multiple times

    const analytics_key = import.meta.env.VITE_GOOGLE_ANALYTICS;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics_key}`;
    script.id = 'google-analytics';
    script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', analytics_key);
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });

        // Set the global flag
        gaLoaded = true;
    };
    document.head.appendChild(script);
}

export function updateAnalyticsConsent(consent) {
    gtag('consent', 'update', {
        'analytics_storage': consent ? 'granted' : 'denied'
    });
}
