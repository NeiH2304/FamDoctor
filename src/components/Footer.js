'use client';

import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={`${styles.footerColumn} ${styles.footerAbout}`}>
            <h3>Về chúng tôi</h3>
            <p>DoctorHome - Dịch vụ y tế tại nhà chuyên nghiệp, tận tâm và uy tín thuộc Medicare Medlatec. Chúng tôi cam kết mang đến dịch vụ chăm sóc sức khỏe chất lượng cao tận nhà cho mọi gia đình.</p>
          </div>
          
          <div className={`${styles.footerColumn} ${styles.footerContact}`}>
            <h3>Thông tin liên hệ</h3>
            <ul>
              <li>
                <i>📍</i>
                <span>Cơ sở 1: 22A/180 Tôn Đức Thắng, Hà Nội</span>
              </li>
              <li>
                <i>📍</i>
                <span>Cơ sở 2: 73/183 Xuân Thủy, Hà Nội</span>
              </li>
              <li>
                <i>📍</i>
                <span>Cơ sở 3: 1/3 Lĩnh Nam, Hà Nội</span>
              </li>
              <li>
                <i>📞</i>
                <span>Hotline: 0974564224</span>
              </li>
              <li>
                <i>✉️</i>
                <span>Email: info@doctorhome.com</span>
              </li>
            </ul>
          </div>
          
          <div className={`${styles.footerColumn} ${styles.footerLinks}`}>
            <h3>Liên kết nhanh</h3>
            <ul>
              <li><Link href="/#home">Trang Chủ</Link></li>
              <li><Link href="/#about">Giới Thiệu</Link></li>
              <li><Link href="/#services">Dịch Vụ</Link></li>
              <li><Link href="/#pricing">Bảng Giá</Link></li>
              <li><Link href="/#blog">Tin Tức</Link></li>
              <li><Link href="/#locations">Chi Nhánh</Link></li>
              <li><Link href="/#contact">Liên Hệ</Link></li>
            </ul>
          </div>
          
          <div className={`${styles.footerColumn} ${styles.footerNews}`}>
            <h3>Tin tức mới</h3>
            <ul>
              <li>
                <Link href="/blog/truyen-nuoc-tai-nha-ha-noi">
                  Truyền Nước Tại Nhà Hà Nội – Truyền Dịch Tại Nhà Hà Nội – Tiêm Truyền Tại Nhà Hà Nội – BS Gia Đình Medicare Medlatec 24/7
                </Link>
              </li>
              <li>
                <Link href="/blog/truyen-nuoc-tai-nha-nam-tu-liem">
                  Truyền nước tại nhà khu vực Nam Từ Liêm Uy tín – An toàn 150k/Chai – BS Gia Đình Medicare Medlatec 24/7
                </Link>
              </li>
              <li>
                <Link href="/blog/truyen-nuoc-tai-nha-bac-tu-liem">
                  Truyền nước tại nhà khu vực Bắc Từ Liêm Uy tín – An toàn 150k/Chai – BS Gia Đình Medicare Medlatec 24/7
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>Copyright 2025 © <Link href="/">Dịch vụ y tế tại nhà Hà Nội - DoctorHome</Link>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}