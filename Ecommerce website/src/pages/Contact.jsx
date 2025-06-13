import React from 'react';
import styles from './Contact.module.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.infoCard}>
        <div className={styles.infoSection}>
          <div className={styles.iconCircle}><FaPhoneAlt /></div>
          <div>
            <h4>Call To Us</h4>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.infoSection}>
          <div className={styles.iconCircle}><FaEnvelope /></div>
          <div>
            <h4>Write To US</h4>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
      </div>
      <div className={styles.formCard}>
        <form className={styles.contactForm}>
          <div className={styles.inputRow}>
            <input type="text" className={styles.input} placeholder="Your Name *" required />
            <input type="email" className={styles.input} placeholder="Your Email *" required />
            <input type="tel" className={styles.input} placeholder="Your Phone *" required />
          </div>
          <textarea className={styles.textarea} rows="6" placeholder="Your Massage" required></textarea>
          <button type="submit" className={styles.submitBtn}>Send Massage</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
