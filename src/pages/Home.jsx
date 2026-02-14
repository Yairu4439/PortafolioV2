import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{`${t('Home')} - Full Stack Developer`}</title>
            </Helmet>

            <section className="section hero-section container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {t('Hero Title Plain')} <br />
                        <span className='text-primary-gradient'>{t('Hero Title Highlight')}</span>
                    </h1>
                    <p className="hero-subtitle">
                        {t('Hero Subtitle')}
                    </p>

                    <div className="flex gap-sm justify-center">
                        <Link to="/proyectos" className="btn btn-primary">
                            {t('View Projects')} <ArrowRightIcon className="icon-sm ml-sm" />
                        </Link>
                        <a href="https://github.com/YahirDev21" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <CodeBracketIcon className="icon-sm mr-sm" />
                            GitHub
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
