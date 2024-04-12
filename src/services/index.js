import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import { langAZ, langRU, langEN } from "assets";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            az: {
                translation: langAZ,
            },
            en: {
                translation: langEN,
            },
            ru: {
                translation: langRU,
            },
        },
        fallbackLng: 'ru',
        lng: localStorage.getItem("i18nextLng"),
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
