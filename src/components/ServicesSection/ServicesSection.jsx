import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Activity, CheckCircle, Baby, Bone, Smile, ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import styles from './ServicesSection.module.scss';

const iconMap = {
  heart: Heart,
  activity: Activity,
  check: CheckCircle,
  baby: Baby,
  bone: Bone,
  tooth: Smile,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const ServicesSection = () => {
  return (
    <section className={styles.services}>
      <div className="container">
        <motion.div
          className={styles.sectionHead}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span> Our Services
          </div>
          <h2>Comprehensive care, under one roof</h2>
          <p>
            From routine checkups to specialised treatment, our departments
            are built around one goal — your wellbeing.
          </p>
        </motion.div>

        <div className={styles.cards}>
          {servicesData.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                className={styles.card}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                whileHover={{ y: -6 }}
              >
                <div className={styles.iconBox}>
                  <Icon size={26} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className={styles.learn}>
                  Learn more <ArrowRight size={15} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;