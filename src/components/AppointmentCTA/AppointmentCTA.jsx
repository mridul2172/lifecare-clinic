import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarCheck, PhoneCall } from 'lucide-react';
import styles from './AppointmentCTA.module.scss';

const AppointmentCTA = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <motion.div
          className={styles.panel}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.glow}></div>
          <div className={styles.content}>
            <h2>Ready to feel better? Let's get you booked.</h2>
            <p>
              Same-day appointments available. Talk to a doctor who actually
              has time for your questions.
            </p>
          </div>
          <div className={styles.actions}>
            <Link to="/book-appointment" className={styles.primaryBtn}>
              <CalendarCheck size={18} />
              Book an Appointment
            </Link>
            <Link to="/contact" className={styles.secondaryBtn}>
              <PhoneCall size={18} />
              Call Us Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentCTA;