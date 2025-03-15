import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <h2>BÁC SĨ GIA ĐÌNH MEDICARE MEDLATEC</h2>
          <p>Dịch Vụ Y Tế Tại Nhà Chuyên Nghiệp - Tận Tâm - Uy Tín - Phục vụ 24/7</p>
          <Link href="#services" className={styles.btn}>Khám Phá Dịch Vụ</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;