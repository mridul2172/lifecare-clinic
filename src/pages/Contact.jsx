import SEO from '../components/SEO/SEO';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock3 } from 'lucide-react';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm';

const Contact = () => {
  return (
    <div>
      <SEO
        title="Contact Us"
        description="Get in touch with LifeCare Clinic. Find our address, phone number, working hours, or book an appointment directly."
      />

      <section style={{ background: '#0F172A', padding: '90px 0 70px', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            style={{ color: '#fff', fontSize: '38px', letterSpacing: '-0.02em', marginBottom: '14px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto', fontSize: '15.5px', lineHeight: '1.7' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Questions, feedback, or ready to book? We would love to hear from you.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#F8FBFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '48px' }}>
            <div>
              {[
                { icon: MapPin, title: 'Our Location', desc: '221B Wellness Road, New Delhi, India' },
                { icon: Phone, title: 'Phone Number', desc: '+91 98765 43210' },
                { icon: Mail, title: 'Email Address', desc: 'hello@lifecareclinic.com' },
                { icon: Clock3, title: 'Working Hours', desc: 'Mon - Sat: 8:00 AM - 9:00 PM' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    style={{ display: 'flex', gap: '16px', marginBottom: '28px' }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <div style={{ width: '46px', height: '46px', borderRadius: '13px', background: '#E0F2FE', color: '#0EA5E9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '15px', color: '#0F172A', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ fontSize: '13.5px', color: '#64748B' }}>{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;