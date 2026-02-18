import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import ParticlesBackground from '@/components/ParticlesBackground';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeLogo from '@/components/ThemeLogo';

export default function Layout() {
    const location = useLocation();
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const navLinkClass = ({ isActive }) =>
        `nav-link flex items-center gap-sm ${isActive ? 'active' : ''}`;

    return (
        <ThemeProvider>
            <div className="app-container">
                <ParticlesBackground />
                <header className="main-header">
                    <div className="container header-content">
                        <div className="header-left">
                            <NavLink to="/" className="logo" onClick={closeMenu}>
                                <ThemeLogo className="logo-img" alt="" />
                                Portafolio
                            </NavLink>
                        </div>

                        <div className="nav-container-desktop">
                            <nav className="main-nav">
                                <NavLink to="/" className={navLinkClass} end>
                                    <HomeIcon className="icon-xs" />
                                    {t('Home')}
                                </NavLink>
                                <NavLink to="/sobre-mi" className={navLinkClass}>
                                    <UserIcon className="icon-xs" />
                                    {t('About')}
                                </NavLink>
                                <NavLink to="/proyectos" className={navLinkClass}>
                                    <BriefcaseIcon className="icon-xs" />
                                    {t('Projects')}
                                </NavLink>
                                <NavLink to="/contacto" className={navLinkClass}>
                                    <EnvelopeIcon className="icon-xs" />
                                    {t('Contact')}
                                </NavLink>
                            </nav>
                        </div>

                        <div className="header-controls">
                            <div className="nav-actions header-controls--desktop">
                                <LanguageSwitcher />
                                <ThemeToggle />
                            </div>
                            <button
                                className="mobile-menu-btn"
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                <Bars3Icon className="icon-sm" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Sidebar Backdrop */}
                <div
                    className={`sidebar-backdrop ${isMenuOpen ? 'visible' : ''}`}
                    onClick={closeMenu}
                />

                {/* Sidebar Panel */}
                <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                    <div className="sidebar__header">
                        <NavLink to="/" className="logo" onClick={closeMenu}>
                            <ThemeLogo className="logo-img" alt="" />
                            Portafolio
                        </NavLink>
                        <button className="sidebar__close" onClick={closeMenu} aria-label="Close menu">
                            <XMarkIcon className="icon-sm" />
                        </button>
                    </div>

                    <nav className="sidebar__nav">
                        <p className="sidebar__section-label">{t('Menu')}</p>
                        <NavLink to="/" className={navLinkClass} end onClick={closeMenu}>
                            <HomeIcon className="sidebar__icon" />
                            {t('Home')}
                        </NavLink>
                        <NavLink to="/sobre-mi" className={navLinkClass} onClick={closeMenu}>
                            <UserIcon className="sidebar__icon" />
                            {t('About')}
                        </NavLink>
                        <NavLink to="/proyectos" className={navLinkClass} onClick={closeMenu}>
                            <BriefcaseIcon className="sidebar__icon" />
                            {t('Projects')}
                        </NavLink>
                        <NavLink to="/contacto" className={navLinkClass} onClick={closeMenu}>
                            <EnvelopeIcon className="sidebar__icon" />
                            {t('Contact')}
                        </NavLink>
                    </nav>

                    <div className="sidebar__footer">
                        <div className="sidebar__controls">
                            <LanguageSwitcher />
                            <ThemeToggle />
                        </div>
                    </div>
                </aside>

                <main className="main-content">
                    <Outlet />
                </main>

                <footer className="main-footer">
                    <div className="container">
                        <p className="text-sm text-muted">
                            &copy; {new Date().getFullYear()} Yahir Umaña Arroyo.
                            <span className="footer-separator"> • </span>
                            Built with React & Vite.
                        </p>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    );
}
