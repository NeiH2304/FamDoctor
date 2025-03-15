import React from 'react';
import styles from '@/styles/CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.container}>
        <h2>Bạn Cần Hỗ Trợ Y Tế Tại Nhà?</h2>
        <p>Hãy liên hệ với chúng tôi ngay để được tư vấn miễn phí và đặt lịch dịch vụ y tế tại nhà một cách nhanh chóng, an toàn và tiện lợi.</p>
        <a href="tel:0974564224" className={styles.btn}>Gọi Ngay: 097.4564.224</a>
      </div>
    </section>
  );
};

export default CallToAction;