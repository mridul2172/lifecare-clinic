import SEO from '../components/SEO/SEO';
import Hero from '../components/Hero/Hero';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import DoctorsSection from '../components/DoctorsSection/DoctorsSection';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import AppointmentCTA from '../components/AppointmentCTA/AppointmentCTA';
import FAQSection from '../components/FAQ/FAQSection';
import MapSection from '../components/MapSection/MapSection';

const Home = () => {
  return (
    <div>
      <SEO
        title="Home"
        description="LifeCare Clinic offers compassionate, modern healthcare with expert doctors across cardiology, pediatrics, orthopedics and more. Book your appointment today."
        keywords="clinic, healthcare, doctors, appointment, cardiology, pediatrics"
      />
      <Hero />
      <ServicesSection />
      <DoctorsSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <AppointmentCTA />
      <FAQSection />
      <MapSection />
    </div>
  );
};

export default Home;