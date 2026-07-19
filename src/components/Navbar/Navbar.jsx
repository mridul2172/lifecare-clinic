import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Stethoscope } from 'lucide-react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../hooks/useTheme';
import styles from './Navbar.module.scss';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Doctors', path: '/doctors' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navInner}`}>
        <Link to="/" className={styles.brand} onClick={() => setIsOpen(false)}>
          <span className={styles.brandMark}>
            <Stethoscope size={20} color="#fff" strokeWidth={2} />
          </span>
          LifeCare <span className={styles.brandAccent}>Clinic</span>
        </Link>

        <nav className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}

          <div className={styles.mobileCta}>
            <div style={{ marginBottom: '6px' }}>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <Link to="/contact" className="btn btn-ghost" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
            <Link to="/book-appointment" className="btn btn-primary" onClick={() => setIsOpen(false)}>
              Book Appointment
            </Link>
          </div>
        </nav>

        <div className={styles.navCta}>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
          <Link to="/book-appointment" className="btn btn-primary">Book Appointment</Link>
        </div>

        <button
          className={styles.menuToggle}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;