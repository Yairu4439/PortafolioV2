import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon, Bars3Icon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
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
                        <NavLink to="/" className="logo" onClick={closeMenu}>
                            <ThemeLogo className="logo-img" alt="" />
                            Portafolio
                        </NavLink>

                        <nav className={`main-nav items-center ${isMenuOpen ? 'open' : ''}`}>
                            <NavLink to="/" className={navLinkClass} end onClick={closeMenu}>
                                <HomeIcon className="icon-xs" />
                                {t('Home')}
                            </NavLink>
                            <NavLink to="/sobre-mi" className={navLinkClass} onClick={closeMenu}>
                                <UserIcon className="icon-xs" />
                                {t('About')}
                            </NavLink>
                            <NavLink to="/proyectos" className={navLinkClass} onClick={closeMenu}>
                                <BriefcaseIcon className="icon-xs" />
                                {t('Projects')}
                            </NavLink>
                            <NavLink to="/contacto" className={navLinkClass} onClick={closeMenu}>
                                <EnvelopeIcon className="icon-xs" />
                                {t('Contact')}
                            </NavLink>
                        </nav>

                        <div className="header-controls">
                            <div className="nav-actions">
                                <LanguageSwitcher />
                                <ThemeToggle />
                            </div>
                            <button
                                className="mobile-menu-btn"
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <ArrowRightOnRectangleIcon className="icon-sm" />
                                ) : (
                                    <Bars3Icon className="icon-sm" />
                                )}
                            </button>
                        </div>
                    </div>
                </header>

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
