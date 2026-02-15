import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { HomeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const NotFound = () => {
    const { t } = useTranslation();
    const location = useLocation();

    // Mantengo esta lista de rutas de forma manual ('hardcoded') deliberadamente.
    // Dado que es un portafolio personal con un alcance definido y pocas vistas que raramente cambiarán,
    // implementar una lógica automatizada compleja para detectar rutas (como leer del Router) sería una sobre-ingeniería innecesaria.
    // La simplicidad es la mejor opción técnica para este caso de uso.
    const validRoutes = useMemo(() => [
        '/',
        '/sobre-mi',
        '/proyectos',
        '/contacto'
    ], []);


    const isLikelySPAReload = validRoutes.includes(location.pathname.replace(/\/$/, ''));

    return (
        <>
            <Helmet>
                <title>404 - {t('Page Not Found')} | Portafolio</title>
            </Helmet>

            <section className="section container not-found-section">
                <div className="not-found-header">
                    <h1 className="not-found-title">
                        404
                    </h1>
                    <ExclamationTriangleIcon className="icon-pulse not-found-icon" />
                </div>

                <h2 className="section-title">
                    {isLikelySPAReload ? t('Página no encontrada') : t('404 Generic Title')}
                </h2>

                <div className="not-found-content">
                    {isLikelySPAReload ? (
                        <>
                            <p className="not-found-greeting">
                                {t('404 Greeting')}
                            </p>
                            <p className="not-found-explanation">
                                {t('404 Explanation')}
                            </p>

                            <div className="not-found-solutions">
                                <span className="solutions-title">{t('404 Solutions Title')}</span>
                                <ul className="solutions-list">
                                    <li dangerouslySetInnerHTML={{ __html: t('404 Solution 1') }} />
                                    <li dangerouslySetInnerHTML={{ __html: t('404 Solution 2') }} />
                                </ul>
                            </div>
                        </>
                    ) : (
                        <p className="not-found-explanation">
                            {t('404 Generic Message')}
                        </p>
                    )}

                    <p>
                        {t('404 Action')}
                    </p>
                </div>

                <Link to="/" className="btn btn-primary">
                    <HomeIcon className="icon-xs" /> {t('Volver al Inicio')}
                </Link>
            </section>
        </>
    );
};

export default NotFound;
