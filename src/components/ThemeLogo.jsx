import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import logoLight from '@/assets/images/Hollow Knight_claro.png';
import logoDark from '@/assets/images/Hollow Knight_oscuro.png';

export default function ThemeLogo({ className = '', alt = 'Logo', style = {} }) {
    const { theme } = useTheme();

    return (
        <img
            src={theme === 'dark' ? logoDark : logoLight}
            alt={alt}
            className={className}
            style={style}
        />
    );
}
