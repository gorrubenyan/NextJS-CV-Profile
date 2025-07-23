export const getTranslation = (lang: string, key: string): string => {
    try {
        const translations = require(`../public/locales/${lang}.json`);
        return translations[key] || key;
    } catch {
        return key;
    }
};