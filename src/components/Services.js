import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Services.module.css';

const Services = () => {
  const services = [
    {
      id: 'truyen-nuoc',
      title: 'Truyền Nước Tại Nhà',
      description: 'Dịch vụ truyền dịch, truyền nước tại nhà với đội ngũ y bác sĩ chuyên nghiệp, trang thiết bị vô trùng, an toàn tuyệt đối.',
      image: '/images/truyen-nuoc.jpg',
    },
    {
      id: 'tiem-thuoc',
      title: 'Tiêm Thuốc Theo Chỉ Định',
      description: 'Dịch vụ tiêm thuốc tại nhà theo chỉ định của bác sĩ, đảm bảo quy trình vô trùng, an toàn và hiệu quả.',
      image: '/images/tiem-thuoc.jpg',
    },
    {
      id: 'thay-bang',
      title: 'Thay Băng, Cắt Chỉ',
      description: 'Dịch vụ thay băng, cắt chỉ tại nhà được thực hiện bởi đội ngũ y tá chuyên nghiệp, giúp vết thương mau lành.',
      image: '/images/thay-bang.jpg',
    },
    {
      id: 'kham-benh',
      title: 'Bác Sĩ Khám Tại Nhà',
      description: 'Dịch vụ bác sĩ khám bệnh tại nhà, phù hợp cho người già, trẻ em, bệnh nhân khó di chuyển hoặc đang trong thời gian hồi phục.',
      image: '/images/kham-benh.jpg',
    },
    {
      id: 'tu-van',
      title: 'Tư Vấn Y Tế',
      description: 'Dịch vụ tư vấn y tế chuyên nghiệp, giúp bạn hiểu rõ tình trạng sức khỏe và có phương pháp chăm sóc phù hợp.',
      image: '/images/tu-van.jpg',
    },
    {
      id: 'xet-nghiem',
      title: 'Lấy Mẫu Xét Nghiệm',
      description: 'Dịch vụ lấy mẫu máu và các mẫu xét nghiệm tại nhà, tiết kiệm thời gian và công sức di chuyển đến bệnh viện.',
      image: '/images/xet-nghiem.jpg',
    },
  ];

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Dịch Vụ Của Chúng Tôi</h2>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div className={styles.serviceCard} id={service.id} key={service.id}>
              <div className={styles.serviceImg}>
                <Image 
                  src={service.image} 
                  alt={service.title}
                  width={400}
                  height={300}
                />
              </div>
              <div className={styles.serviceContent}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className={styles.serviceLink}>Xem chi tiết →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;