import { Link } from 'react-router-dom';
import { Stethoscope, MapPin, Phone, Mail, Clock } from 'lucide-react';
import styles from './Footer.module.scss';

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95Z"/></svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53c.64-.25 1.37-.42 2.43-.47C8.94.01 9.28 0 12 0Zm0 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9ZM18.4 4.6a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0Z"/></svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.2l-5.6-7.3L4 22H1l8.1-9.3L1 2h7.4l5.1 6.7L18.9 2Zm-1.3 18h1.9L7.5 4h-2L17.6 20Z"/></svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.34 18.34H5.67V9.75h2.67v8.59ZM7 8.6a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.74h-2.67v-4.18c0-1-.02-2.28-1.39-2.28-1.4 0-1.61 1.09-1.61 2.22v4.24h-2.67V9.75h2.56v1.17h.04c.36-.68 1.24-1.39 2.55-1.39 2.73 0 3.23 1.79 3.23 4.13v4.68Z"/></svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.about}>
          <Link to="/" className={styles.brand}>
            <span className={styles.brandMark}>
              <Stethoscope size={20} color="#fff" strokeWidth={2} />
            </span>
            LifeCare <span className={styles.brandAccent}>Clinic</span>
          </Link>
          <p>
            Compassionate, modern healthcare built around you — expert doctors,
            calm spaces, and care that never feels rushed.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" aria-label="Twitter"><TwitterIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinIcon /></a>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/book-appointment">Book Appointment</Link></li>
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h4>Get in Touch</h4>
          <ul>
            <li>
              <MapPin size={17} />
              <span>221B Wellness Road, New Delhi, India</span>
            </li>
            <li>
              <Phone size={17} />
              <span>+91 98765 43210</span>
            </li>
            <li>
              <Mail size={17} />
              <span>hello@lifecareclinic.com</span>
            </li>
            <li>
              <Clock size={17} />
              <span>Mon - Sat: 8:00 AM - 9:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p>© {year} LifeCare Clinic. All rights reserved.</p>
          <p>Designed with care for better health.</p>
        </div>
        <div className="container">
          <p className={styles.disclaimer}>
            This website is a sample/demo project built for design and development purposes only. Forms, appointments, and contact details are not functional or monitored.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;