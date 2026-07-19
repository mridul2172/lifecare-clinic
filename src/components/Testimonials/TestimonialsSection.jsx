import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import styles from './TestimonialsSection.module.scss';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
};

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <motion.div
          className={styles.sectionHead}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span> Patient Stories
          </div>
          <h2>What our patients say</h2>
          <p>Real experiences from people who trusted us with their care.</p>
        </motion.div>

        <div className={styles.grid}>
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.id}
              className={styles.card}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <Quote className={styles.quoteIcon} size={28} />
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={15} fill="#0EA5E9" color="#0EA5E9" />
                ))}
              </div>
              <p className={styles.quoteText}>"{t.quote}"</p>
              <div className={styles.person}>
                <div className={styles.avatar}>{t.initials}</div>
                <div>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;