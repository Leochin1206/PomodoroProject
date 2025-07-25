import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault(); // Não segue o link
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'; 
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  const nextIconTheme = {
    dark: <SunIcon />,
    light: <MoonIcon />
  };

  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLink} aria-label="Ir para a Home" title="Ir para a Home">
        <HouseIcon />
      </a>

      <a href="#" className={styles.menuLink} aria-label="Ver Histórico" title="Ver Histórico">
        <HistoryIcon />
      </a>

      <a href="#" className={styles.menuLink} aria-label="Configurações" title="Configurações">
        <SettingsIcon />
      </a>

      <a href="#" className={styles.menuLink} aria-label="Mudar Tema" title="Mudar Tema" onClick={handleThemeChange}>
        {nextIconTheme[theme]}
      </a>
    </nav>
  );
}
