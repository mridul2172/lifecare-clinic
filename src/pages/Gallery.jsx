import SEO from '../components/SEO/SEO';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import { galleryData } from '../data/galleryData';

const Gallery = () => {
  return (
    <div>
      <SEO
        title="Gallery"
        description="Take a look inside LifeCare Clinic — our facilities, equipment, and the team behind your care."
      />

      <section style={{ background: '#0F172A', padding: '90px 0 70px', textAlign: 'center' }}>
        <div className="container">
          <motion.h1
            style={{ color: '#fff', fontSize: '38px', letterSpacing: '-0.02em', marginBottom: '14px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Gallery
          </motion.h1>
          <motion.p
            style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '600px', margin: '0 auto', fontSize: '15.5px', lineHeight: '1.7' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A glimpse into our clinic, our equipment, and the team behind your care.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {galleryData.map((item, i) => (
              <motion.div
                key={item.id}
                style={{
                  aspectRatio: '1 / 1',
                  borderRadius: '16px',
                  background: 'linear-gradient(160deg, #0F172A 0%, #164E63 55%, #0EA5E9 130%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  gap: '10px',
                  boxShadow: '0 10px 30px rgba(15,23,42,0.08)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <ImageIcon size={28} opacity={0.7} />
                <span style={{ fontSize: '13px', fontWeight: 600, opacity: 0.85 }}>{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;