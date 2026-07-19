import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../../data/faqData';
import styles from './FAQSection.module.scss';

const FAQSection = () => {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.faq}>
      <div className="container">
        <motion.div
          className={styles.sectionHead}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.dot}></span> FAQ
          </div>
          <h2>Frequently asked questions</h2>
          <p>Everything you need to know before your visit.</p>
        </motion.div>

        <div className={styles.list}>
          {faqData.map((item, i) => (
            <motion.div
              key={item.id}
              className={styles.item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <button
                className={styles.question}
                onClick={() => toggle(item.id)}
                aria-expanded={openId === item.id}
              >
                <span>{item.question}</span>
                {openId === item.id ? <Minus size={18} /> : <Plus size={18} />}
              </button>

              <AnimatePresence initial={false}>
                {openId === item.id && (
                  <motion.div
                    className={styles.answerWrap}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p className={styles.answer}>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;