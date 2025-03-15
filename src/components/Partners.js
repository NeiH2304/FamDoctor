'use client';

import Image from 'next/image';
import styles from '@/styles/Partners.module.css';

export default function Partners() {
  const partners = [
    { id: 1, name: 'Medicare', logo: '/partners/medicare.png' },
    { id: 2, name: 'Medlatec', logo: '/partners/medlatec.png' },
    { id: 3, name: 'Bệnh viện Bạch Mai', logo: '/partners/bachmai.png' },
    { id: 4, name: 'Bệnh viện Việt Đức', logo: '/partners/vietduc.png' },
    { id: 5, name: 'Bộ Y Tế', logo: '/partners/boyte.png' },
  ];

  return (
    <section id="partners" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Đối tác của chúng tôi</h2>
          <p>DoctorHome tự hào hợp tác với các đối tác y tế hàng đầu tại Việt Nam</p>
        </div>
        
        <div className={styles.partnersContainer}>
          {partners.map((partner) => (
            <div key={partner.id} className={styles.partnerItem}>
              <div className={styles.partnerLogo}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={150}
                  height={80}
                  className={styles.logo}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}