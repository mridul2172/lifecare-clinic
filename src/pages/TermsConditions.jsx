import SEO from '../components/SEO/SEO';
import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content:
      "By accessing or using LifeCare Clinic's website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please discontinue use of our services.",
  },
  {
    title: '2. Appointments & Cancellations',
    content:
      'Appointments booked through our website are subject to confirmation by our staff. Please cancel or reschedule at least 4 hours in advance to avoid inconvenience to other patients.',
  },
  {
    title: '3. Medical Disclaimer',
    content:
      'Content on this website is for informational purposes only and does not substitute professional medical advice. Always consult a qualified doctor for diagnosis and treatment.',
  },
  {
    title: '4. Patient Responsibilities',
    content:
      'Patients are responsible for providing accurate personal and medical information to ensure safe and effective treatment.',
  },
  {
    title: '5. Payment & Billing',
    content:
      "Consultation and treatment fees are payable at the time of service unless otherwise arranged. Insurance claims are the patient's responsibility to file, though we assist where possible.",
  },
  {
    title: '6. Limitation of Liability',
    content:
      'LifeCare Clinic is not liable for indirect damages arising from website use, technical issues, or delays in appointment scheduling beyond our reasonable control.',
  },
  {
    title: '7. Governing Law',
    content:
      'These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in New Delhi.',
  },
];

const TermsConditions = () => {
  return (
    <div>
      <SEO
        title="Terms & Conditions"
        description="Review the terms and conditions for using LifeCare Clinic's website and medical services."
      />

      <section style={{ background: '#0F172A', padding: '80px 0 60px', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            style={{ color: '#fff', fontSize: '36px', letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Terms & Conditions
          </motion.h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: '10px', fontSize: '14px' }}>
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section style={{ padding: '70px 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <p style={{ color: '#64748B', fontSize: '15px', lineHeight: '1.8', marginBottom: '40px' }}>
            Please read these Terms & Conditions carefully before using LifeCare Clinic's website or
            booking any appointment with us.
          </p>

          {sections.map((sec, i) => (
            <motion.div
              key={sec.title}
              style={{ marginBottom: '32px' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <h3 style={{ fontSize: '18px', color: '#0F172A', marginBottom: '10px' }}>{sec.title}</h3>
              <p style={{ fontSize: '14.5px', color: '#64748B', lineHeight: '1.8' }}>{sec.content}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;