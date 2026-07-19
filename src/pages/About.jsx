import SEO from '../components/SEO/SEO';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Award } from 'lucide-react';

const About = () => {
  return (
    <div>
      <SEO
        title="About Us"
        description="Learn about LifeCare Clinic's 14-year journey, our mission, values, and the team dedicated to compassionate healthcare."
      />

      <section style={{ background: '#0F172A', padding: '90px 0 70px', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            style={{ color: '#fff', fontSize: '38px', letterSpacing: '-0.02em', marginBottom: '14px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About LifeCare Clinic
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto', fontSize: '15.5px', lineHeight: '1.7' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Fourteen years of compassionate, modern healthcare — built by doctors who believe patients deserve time, not just treatment.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: '28px', color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>Our Story</h2>
            <p style={{ color: '#64748B', fontSize: '15.5px', lineHeight: '1.8', marginBottom: '20px' }}>
              LifeCare Clinic was founded in 2010 with a simple idea — healthcare should feel human. What started as a small general practice has grown into a multi-specialty clinic serving over 18,000 patients, without losing the personal touch that made us who we are.
            </p>
            <p style={{ color: '#64748B', fontSize: '15.5px', lineHeight: '1.8' }}>
              Today, our team of 25+ specialists works across cardiology, orthopedics, pediatrics, and general medicine — united by one mission: care that puts people before paperwork.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '56px' }}>
            {[
              { icon: ShieldCheck, title: 'Our Mission', desc: 'To make quality healthcare accessible, honest, and stress-free for every patient who walks through our doors.' },
              { icon: HeartHandshake, title: 'Our Values', desc: 'Empathy, transparency, and continuous learning guide every decision we make, clinical or otherwise.' },
              { icon: Award, title: 'Our Promise', desc: 'You will always be treated as a person first — heard, respected, and never rushed.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  style={{ background: '#fff', border: '1px solid rgba(15,23,42,0.06)', borderRadius: '16px', padding: '28px', boxShadow: '0 10px 30px rgba(15,23,42,0.08)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0EA5E9', marginBottom: '16px' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '16px', color: '#0F172A', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.7' }}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;