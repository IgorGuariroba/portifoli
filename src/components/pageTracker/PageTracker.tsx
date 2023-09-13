import  { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TagManager from 'react-gtm-module';

interface PageTrackerProps {
    pageName: string;
}
function PageTracker({ pageName }: PageTrackerProps) {
    const location = useLocation();

    useEffect(() => {
        const userAgent = navigator.userAgent;
        const browserName = userAgent.match(/(Edge\/|Chrome\/|Firefox\/|Safari\/|MSIE )[\d]+/i);
        const os = userAgent.match(/(Windows|Mac|Linux|iPhone|iPad|Android)/i);
        const pageEvent = `${pageName}_pageview`;
        const browserLanguage = navigator.language;

        TagManager.dataLayer({
            dataLayer: {
                event: pageEvent,
                pagePath: location.pathname,
                browser: browserName ? browserName[0] : 'Desconhecido',
                operatingSystem: os ? os[0] : 'Desconhecido',
                browserLanguage
            },
        });
    }, [location.pathname, pageName]);

    return null;
}

export default PageTracker;
