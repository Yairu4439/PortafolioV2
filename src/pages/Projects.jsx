import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CodeBracketIcon, EyeIcon, ArrowDownTrayIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import irLogo from '../assets/images/ir_logo.png';

const projects = [
    {
        id: 1,
        title: 'Code Comparator',
        description: 'code_comparator_desc',
        tags: ['React', 'Algorithms', 'Utility'],
        demoLink: 'https://Yairu4439.github.io/CodeComparator/',
        repoLink: 'https://github.com/Yairu4439/CodeComparator',
        isExternal: true,
        transKey: 'Code Comparator'
    },
    {
        id: 2,
        title: 'IR Remote RGB',
        description: 'ir_remote_desc',
        tags: ['Android', 'Kotlin', 'MVVM', 'Native'],
        demoLink: `${import.meta.env.BASE_URL}downloads/IRREMOTERGB.apk`,
        repoLink: 'https://github.com/Yairu4439/IRREMOTERGB',
        isAPK: true,
        logo: irLogo,
        transKey: 'IR Remote RGB'
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
                                <p className="project-description">{t(project.description)}</p>

                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-actions">
                                    {project.isAPK ? (
                                        <a href={project.demoLink} download className="btn btn-sm btn-primary">
                                            <ArrowDownTrayIcon className="icon-xs" /> {t('Download APK')}
                                        </a>
                                    ) : (
                                        <a href={project.demoLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                                            <EyeIcon className="icon-xs" /> {t('View Demo')}
                                        </a>
                                    )}

                                    <a href={project.repoLink} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">
                                        <CodeBracketIcon className="icon-xs" /> {t('Code')}
                                    </a>
                                </div>
                            </div>
                            {project.isAPK && !project.logo && (
                                <div className="project-icon-overlay" style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.2 }}>
                                    <DevicePhoneMobileIcon className="w-8 h-8" />
                                </div>
                            )}
                            {project.isAPK && project.logo && (
                                <div className="project-logo-overlay" style={{ position: 'absolute', top: '15px', right: '15px' }}>
                                    <img src={project.logo} alt="Project Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '8px' }}
                                        onError={(e) => e.target.style.display = 'none'} />
                                </div>
                            )}

                        </article>
                    ))}
                </div>
            </section >
        </>
    );
};

export default Projects;
