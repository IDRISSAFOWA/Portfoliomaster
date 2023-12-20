import i18next from "i18next";
import Backend from 'i18next-http-backend';
import LanguegeDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18next.use(Backend).use(LanguegeDetector).use(initReactI18next).init({
    fallbackLng : 'fr',
    debug : true,
    detection : {
        order : ['queryString', 'cookie'],
        caches : ['cookie']
    },
    interpolation : {
        escapeValue : false
    }
})

export default i18next;
