import SEO from '../components/SEO/SEO';
import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Information We Collect',
    content:
      'We collect personal information you provide when booking an appointment, contacting us, or using our website — including your name, email, phone number, date of birth, and health-related details relevant to your visit.',
  },
  {
    title: '2. How We Use Your Information',
    content:
      'Your information is used to schedule appointments, provide medical care, send appointment reminders, improve our services, and communicate important updates about your treatment.',
  },
  {
    title: '3. Data Protection',
    content:
      'We implement industry-standard security measures to protect your personal and medical information from unauthorized access, disclosure, alteration, or destruction.',
  },
  {
    title: '4. Sharing of Information',
    content:
      'We do not sell or rent your personal information. Data may be shared with insurance providers or partner labs only when necessary for your treatment, and only with your consent.',
  },
  {
    title: '5. Cookies',
    content:
      'Our website may use cookies to improve browsing experience and understand site usage. You can disable cookies through your browser settings at any time.',
  },
  {
    title: '6. Your Rights',
    content:
      'You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at hello@lifecareclinic.com.',
  },
  {
    title: '7. Changes to This Policy',
    content:
      'We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date.',
  },
];

const PrivacyPolicy = () => {
  return (
    <div>
      <SEO
        title="Privacy Policy"
        description="Read LifeCare Clinic's privacy policy to understand how we collect, use, and protect your personal information."
      />

      <section style={{ background: '#0F172A', padding: '80px 0 60px', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            style={{ color: '#fff', fontSize: '36px', letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Privacy Policy
          </motion.h1>
          <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: '10px', fontSize: '14px' }}>
            Last updated: January 2026
          </p>
        </div>
      </section>

      <section style={{ padding: '70px 0' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <p style={{ color: '#64748B', fontSize: '15px', lineHeight: '1.8', marginBottom: '40px' }}>
            At LifeCare Clinic, we are committed to protecting your privacy and handling your personal
            and medical information with the highest standard of care and confidentiality.
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

export default PrivacyPolicy;