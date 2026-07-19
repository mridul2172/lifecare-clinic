import SEO from '../components/SEO/SEO';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection/ServicesSection';

const Services = () => {
  return (
    <div>
      <SEO
        title="Our Services"
        description="Explore LifeCare Clinic's full range of medical services including cardiology, orthopedics, pediatrics, emergency care and more."
      />

      <section style={{ background: '#0F172A', padding: '90px 0 70px', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            style={{ color: '#fff', fontSize: '38px', letterSpacing: '-0.02em', marginBottom: '14px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto', fontSize: '15.5px', lineHeight: '1.7' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Complete healthcare, across every department — delivered with the same care and attention, every time.
          </motion.p>
        </div>
      </section>

      <ServicesSection />
    </div>
  );
};

export default Services;