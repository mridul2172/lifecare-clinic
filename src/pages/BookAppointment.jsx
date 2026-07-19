import SEO from '../components/SEO/SEO';
import { motion } from 'framer-motion';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm';

const BookAppointment = () => {
  return (
    <div style={{ padding: '70px 0 90px', background: '#F8FBFF' }}>
      <SEO
        title="Book Appointment"
        description="Book your appointment at LifeCare Clinic in under a minute. Same-day slots available across all departments."
      />
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ fontSize: '36px', letterSpacing: '-0.02em', color: '#0F172A', marginBottom: '12px' }}>
            Book Your Appointment
          </h1>
          <p style={{ color: '#64748B', fontSize: '15.5px', lineHeight: '1.7' }}>
            Fill in your details below and our team will confirm your slot within a few hours.
          </p>
        </motion.div>

        <AppointmentForm />
      </div>
    </div>
  );
};

export default BookAppointment;