import { motion } from 'framer-motion';
import { ShieldCheck, Clock3, UserCheck, HeartPulse } from 'lucide-react';
import styles from './WhyChooseUs.module.scss';

const features = [
  {
    icon: ShieldCheck,
    title: 'Certified Specialists',
    desc: 'Every doctor is board-certified and regularly trained on the latest medical practices.',
  },
  {
    icon: Clock3,
    title: 'Quick Appointments',
    desc: 'Book online in under a minute and get seen without long waiting times.',
  },
  {
    icon: UserCheck,
    title: 'Personalised Care',
    desc: 'Treatment plans built around your history, not a one-size-fits-all approach.',
  },
  {
    icon: HeartPulse,
    title: 'Modern Equipment',
    desc: 'Advanced diagnostic tools for faster, more accurate results.',
  },
];

const stats = [
  { value: '25+', label: 'Expert Doctors' },
  { value: '18k+', label: 'Happy Patients' },
  { value: '14', label: 'Years of Trust' },
  { value: '99%', label: 'Patient Satisfaction' },
];

const WhyChooseUs = () => {
  return (
    <section className={styles.why}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.eyebrow}>
              <span className={styles.dot}></span> Why Choose Us
            </div>
            <h2>Healthcare that puts you first</h2>
            <p>
              We combine medical expertise with genuine care, so every visit
              feels reassuring, not stressful.
            </p>

            <div className={styles.features}>
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    className={styles.feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div className={styles.featureIcon}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className={styles.statsPanel}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <b>{s.value}</b>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;