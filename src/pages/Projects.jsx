import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const projects = [
    {
        id: 1,
        title: 'Code Comparator',
        description: 'Herramienta interactiva para visualizar diferencias entre archivos de código. Desarrollada con React y algoritmos de diff.',
        tags: ['React', 'Algorithms', 'Utility'],
        demoLink: '#', // TODO: Update when Code Comparator is deployed as standalone
        repoLink: 'https://github.com/YahirDev21/code-comparator',
        isExternal: true,
        transKey: 'Code Comparator'
    },
    // Future projects will be added here
];

const Projects = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{`${t('Projects')} - Portafolio Profesional`}</title>
            </Helmet>

            <section className="section container">
                <div className="section-header">
                    <h1 className="section-title">{t('My Projects')}</h1>
                    <p className="section-subtitle">
                        {t('Projects Subtitle')}
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-content">
                                <h3 className="project-title">{project.transKey ? t(project.transKey) : project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-actions">
                                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                                        <EyeIcon className="icon-xs" /> {t('View Demo')}
                                    </a>

                                    <a href={project.repoLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">
                                        <CodeBracketIcon className="icon-xs" /> {t('Code')}
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;
