import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const toggleLocale = () => {
        const newLocale = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLocale);
    };

    return (
        <button
            onClick={toggleLocale}
            className="btn btn-outline btn-sm ml-sm"
            aria-label="Toggle Language"
        >
            {i18n.language === 'es' ? 'EN' : 'ES'}
        </button>
    );
}
