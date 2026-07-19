import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { doctorsData } from '../../data/doctorsData';
import styles from './DoctorsSection.module.scss';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const DoctorsSection = () => {
  return (
    <section className={styles.doctors}>
      <div className="container">
        <motion.div
          className={styles.sectionHead}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span> Our Team
          </div>
          <h2>Meet our doctors</h2>
          <p>
            Experienced specialists who take the time to listen, explain,
            and treat you like a person — not a case number.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {doctorsData.map((doc, i) => (
            <motion.div
              key={doc.id}
              className={styles.card}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <div className={styles.avatar}>{doc.initials}</div>
              <h3>{doc.name}</h3>
              <span className={styles.specialty}>{doc.specialty}</span>
              <p>{doc.experience}</p>
              <Link to="/doctors" className={styles.viewProfile}>
                View Profile
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;