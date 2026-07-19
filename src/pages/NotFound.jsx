import SEO from '../components/SEO/SEO';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 24px',
        background: '#F8FBFF',
      }}
    >
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to LifeCare Clinic's homepage."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: '96px',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          404
        </motion.div>

        <h1 style={{ fontSize: '26px', color: '#0F172A', margin: '20px 0 12px', letterSpacing: '-0.02em' }}>
          Page Not Found
        </h1>
        <p style={{ color: '#64748B', fontSize: '15px', maxWidth: '420px', margin: '0 auto 32px', lineHeight: '1.7' }}>
          The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={17} /> Back to Home
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            <ArrowLeft size={17} /> Contact Support
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;