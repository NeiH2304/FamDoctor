'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/Testimonials.module.css';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      role: 'Bệnh nhân',
      image: '/placeholder-avatar.jpg',
      text: 'Dịch vụ truyền nước tại nhà của DoctorHome thực sự đã giúp tôi rất nhiều khi bị ốm nặng. Bác sĩ rất chuyên nghiệp, chu đáo và thân thiện. Tôi sẽ tiếp tục sử dụng dịch vụ của họ trong tương lai.',
    },
    {
      id: 2,
      name: 'Trần Thị B',
      role: 'Người nhà bệnh nhân',
      image: '/placeholder-avatar.jpg',
      text: 'Tôi đánh giá rất cao sự tận tâm của đội ngũ y tế tại DoctorHome. Họ đã chăm sóc mẹ tôi như người thân của họ. Dịch vụ nhanh chóng, an toàn và đáng tin cậy.',
    },
    {
      id: 3,
      name: 'Lê Văn C',
      role: 'Bệnh nhân mãn tính',
      image: '/placeholder-avatar.jpg',
      text: 'Là một bệnh nhân mãn tính, tôi thường xuyên cần các dịch vụ y tế tại nhà. DoctorHome đã trở thành người bạn đồng hành đáng tin cậy với tôi trong suốt thời gian qua.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <div className="section-title">
          <h2>Khách hàng nói gì về chúng tôi</h2>
          <p>Những đánh giá từ khách hàng đã sử dụng dịch vụ y tế tại nhà của DoctorHome</p>
        </div>
        
        <div className={styles.testimonialSlider}>
          <div 
            className={styles.testimonialInner} 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialItem}>
                <div className={styles.testimonialContent}>
                  <div className={styles.quoteIcon}>&ldquo;</div>
                  <p>{testimonial.text}</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAuthorImg}>
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className={styles.testimonialImg}
                      />
                    </div>
                    <div className={styles.testimonialAuthorInfo}>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={styles.testimonialDots}>
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`${styles.testimonialDot} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}