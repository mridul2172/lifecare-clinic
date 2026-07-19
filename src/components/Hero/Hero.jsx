import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Activity } from 'lucide-react';
import styles from './Hero.module.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.glow}></div>

      <div className={`container ${styles.heroGrid}`}>
        <div>
          <motion.div
            className={styles.eyebrow}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <span className={styles.dot}></span> Trusted healthcare since 2010
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            Compassionate care for a <em>healthier</em> tomorrow
          </motion.h1>

          <motion.p
            className={styles.lead}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            LifeCare Clinic brings together expert doctors, modern diagnostics
            and a calm, human-first experience — so getting care never feels
            like a chore.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
          >
            <Link to="/book-appointment" className="btn btn-primary">
              Book an Appointment
            </Link>
            <Link to="/services" className="btn btn-ghost">
              Explore Services
            </Link>
          </motion.div>

          <motion.div
            className={styles.heroStats}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={4}
          >
            <div className={styles.stat}>
              <b>25+</b>
              <span>Expert Doctors</span>
            </div>
            <div className={styles.stat}>
              <b>18k+</b>
              <span>Happy Patients</span>
            </div>
            <div className={styles.stat}>
              <b>14</b>
              <span>Years of Trust</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <div className={styles.visualPhoto}></div>

          <motion.div
            className={styles.glassCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className={styles.row}>
              <span className={styles.glassIcon}>
                <CheckCircle2 size={20} color="#fff" />
              </span>
              <div>
                <b>Appointment Confirmed</b>
                <span>Dr. Ayesha · Cardiology</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={`${styles.glassCard} ${styles.top}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className={styles.row}>
              <span className={`${styles.glassIcon} ${styles.green}`}>
                <Activity size={20} color="#fff" />
              </span>
              <div>
                <b>Live Monitoring</b>
                <span>24/7 patient care</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;