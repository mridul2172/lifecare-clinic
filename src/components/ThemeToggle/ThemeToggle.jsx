import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.scss';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
};

export default ThemeToggle;