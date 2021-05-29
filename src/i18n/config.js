import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json';
import pl from './pl.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
const resources = {
    en: {
        translation: en,
    },
    pl: {
        translation: pl,
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;