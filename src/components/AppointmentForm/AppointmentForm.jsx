import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Calendar, Stethoscope, MessageSquare, CheckCircle2 } from 'lucide-react';
import styles from './AppointmentForm.module.scss';

const departments = [
  'Cardiology',
  'Orthopedics',
  'Pediatrics',
  'General Physician',
  'Dental Care',
  'Emergency',
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  department: '',
  date: '',
  message: '',
};

const AppointmentForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.department) {
      newErrors.department = 'Please select a department';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      console.log('Appointment booked:', formData);
      setSubmitted(true);
      setFormData(initialState);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className={styles.formWrap}>
      {submitted && (
        <motion.div
          className={styles.successBanner}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <CheckCircle2 size={20} />
          <span>Appointment request received! We'll contact you shortly to confirm.</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name">Full Name</label>
            <div className={`${styles.inputWrap} ${errors.name ? styles.errorInput : ''}`}>
              <User size={17} />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Phone Number</label>
            <div className={`${styles.inputWrap} ${errors.phone ? styles.errorInput : ''}`}>
              <Phone size={17} />
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {errors.phone && <span className={styles.errorMsg}>{errors.phone}</span>}
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email Address</label>
          <div className={`${styles.inputWrap} ${errors.email ? styles.errorInput : ''}`}>
            <Mail size={17} />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="department">Department</label>
            <div className={`${styles.inputWrap} ${errors.department ? styles.errorInput : ''}`}>
              <Stethoscope size={17} />
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select department</option>
                {departments.map((dep) => (
                  <option key={dep} value={dep}>{dep}</option>
                ))}
              </select>
            </div>
            {errors.department && <span className={styles.errorMsg}>{errors.department}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="date">Preferred Date</label>
            <div className={`${styles.inputWrap} ${errors.date ? styles.errorInput : ''}`}>
              <Calendar size={17} />
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            {errors.date && <span className={styles.errorMsg}>{errors.date}</span>}
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Message (Optional)</label>
          <div className={styles.inputWrap}>
            <MessageSquare size={17} />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell us briefly about your concern..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;