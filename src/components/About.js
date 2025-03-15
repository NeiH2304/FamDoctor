import React from 'react';
import Image from 'next/image';
import styles from '@/styles/About.module.css';

const About = () => {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Giới Thiệu Về Chúng Tôi</h2>
        </div>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutImg}>
            <Image 
              src="/images/about-team.jpg" 
              alt="Đội ngũ y bác sĩ DoctorHome"
              width={600}
              height={400}
            />
          </div>
          <div className={styles.aboutContent}>
            <h2>BÁC SĨ GIA ĐÌNH MEDICARE MEDLATEC</h2>
            <p>DoctorHome là dịch vụ y tế tại nhà thuộc Medicare Medlatec, được thành lập với sứ mệnh mang đến các dịch vụ chăm sóc sức khỏe chất lượng cao tận nhà cho mọi gia đình.</p>
            <p>Với đội ngũ y bác sĩ giàu kinh nghiệm, được đào tạo bài bản và chuyên nghiệp, chúng tôi cam kết mang đến dịch vụ y tế tại nhà an toàn, hiệu quả và tiện lợi nhất.</p>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i>✓</i>
                </div>
                <div className={styles.featureText}>
                  <h4>Chuyên Nghiệp</h4>
                  <p>Đội ngũ y bác sĩ được đào tạo chuyên sâu, quy trình thực hiện theo tiêu chuẩn y khoa quốc tế.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i>✓</i>
                </div>
                <div className={styles.featureText}>
                  <h4>Tận Tâm</h4>
                  <p>Chăm sóc bệnh nhân chu đáo, tận tình như người thân trong gia đình.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <i>✓</i>
                </div>
                <div className={styles.featureText}>
                  <h4>Uy Tín</h4>
                  <p>Là thương hiệu y tế được tin tưởng với hàng nghìn khách hàng hài lòng trên toàn Hà Nội.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;