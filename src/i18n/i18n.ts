import i18n from 'i18next';
import {
    initReactI18next
} from 'react-i18next';

import enJson from './translations/en.json';
import ptBRJson from './translations/ptBR.json';

const resources = {
    en: enJson,
    ptBR: ptBRJson
}

const configureI18n = (i18n) => {
    i18n.use(initReactI18next).init({
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        resources: resources
    });
}

configureI18n(i18n);

export default i18n;