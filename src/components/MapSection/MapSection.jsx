import { motion } from 'framer-motion';
import { MapPin, Clock3, Phone } from 'lucide-react';
import styles from './MapSection.module.scss';

const MapSection = () => {
  return (
    <section className={styles.mapSection}>
      <div className="container">
        <motion.div
          className={styles.sectionHead}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span> Visit Us
          </div>
          <h2>Find our clinic</h2>
          <p>Conveniently located, with parking and easy access for all patients.</p>
        </motion.div>

        <motion.div
          className={styles.mapWrap}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.mapFrame}>
            <iframe
              title="LifeCare Clinic Location"
              src="https://www.google.com/maps?q=New+Delhi&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoRow}>
              <MapPin size={18} />
              <div>
                <b>Address</b>
                <span>221B Wellness Road, New Delhi, India</span>
              </div>
            </div>
            <div className={styles.infoRow}>
              <Clock3 size={18} />
              <div>
                <b>Working Hours</b>
                <span>Mon - Sat: 8:00 AM - 9:00 PM</span>
              </div>
            </div>
            <div className={styles.infoRow}>
              <Phone size={18} />
              <div>
                <b>Phone</b>
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;