import React, { useState, useRef, useEffect } from 'react';
import { HiChevronDown, HiGlobeAlt } from 'react-icons/hi';

interface Language {
    code: string;
    name: string;
    countryCode: string; // ISO 3166-1 alpha-2
}

const languages: Language[] = [
    { code: 'en', name: 'English', countryCode: 'us' },
    { code: 'hy', name: 'Հայերեն', countryCode: 'am' },
    { code: 'ru', name: 'Русский', countryCode: 'ru' },
    { code: 'es', name: 'Español', countryCode: 'es' },
    { code: 'fr', name: 'Français', countryCode: 'fr' }
];

const LanguageSelector = ({
                              lang,
                              setLang
                          }: {
    lang: string;
    setLang: (l: string) => void;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentLanguage = languages.find(l => l.code === lang) || languages[0];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageSelect = (code: string) => {
        setLang(code);
        setIsOpen(false);
    };

    const getFlagUrl = (countryCode: string) =>
        `https://flagcdn.com/w40/${countryCode}.png`; // 40px width, lowercase

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
                <HiGlobeAlt className="text-gray-500 dark:text-gray-400" />
                <img
                    src={getFlagUrl(currentLanguage.countryCode)}
                    alt={currentLanguage.name}
                    className="w-5 h-4 rounded-sm object-cover"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden sm:block">
                    {currentLanguage.code.toUpperCase()}
                </span>
                <HiChevronDown
                    className={`text-gray-500 dark:text-gray-400 transform transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden animate-fade-in-up">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageSelect(language.code)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                                lang === language.code
                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                    : 'text-gray-700 dark:text-gray-300'
                            }`}
                        >
                            <img
                                src={getFlagUrl(language.countryCode)}
                                alt={language.name}
                                className="w-5 h-4 rounded-sm object-cover"
                            />
                            <div className="flex flex-col">
                                <span className="font-medium">{language.name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {language.code.toUpperCase()}
                                </span>
                            </div>
                            {lang === language.code && (
                                <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
