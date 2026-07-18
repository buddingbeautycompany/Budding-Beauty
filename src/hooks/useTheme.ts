// Custom hook for theme detection
import { useEffect, useState } from 'react';
import { useThemeStore } from '@/store/themeStore';

export const useTheme = () => {
  const { isDark, toggleTheme, setTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return { isDark, toggleTheme, setTheme, mounted };
};
