import SEO from '../components/SEO/SEO';
import { motion } from 'framer-motion';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';

const Testimonials = () => {
  return (
    <div>
      <SEO
        title="Testimonials"
        description="Read real patient stories and experiences from those who trusted LifeCare Clinic with their health."
      />

      <section style={{ background: '#0F172A', padding: '90px 0 70px', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            style={{ color: '#fff', fontSize: '38px', letterSpacing: '-0.02em', marginBottom: '14px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Patient Testimonials
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto', fontSize: '15.5px', lineHeight: '1.7' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Real stories from patients who trusted us with their health.
          </motion.p>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default Testimonials;