'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <p>Dịch Vụ Y Tế Tại Nhà Chuyên Nghiệp - Hotline: 097.4564.224</p>
      </div>
      <div className={styles.container}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="DoctorHome Logo" width={50} height={50} />
            <h1>DoctorHome</h1>
          </div>
          <button className={styles.hamburger} onClick={toggleMenu}>☰</button>
          <nav className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
            <ul>
              <li><Link href="#home">Trang Chủ</Link></li>
              <li><Link href="#about">Giới Thiệu</Link></li>
              <li className={styles.dropdown}>
                <Link href="#services">Dịch Vụ</Link>
                <div className={styles.dropdownContent}>
                  <Link href="#truyen-nuoc">Truyền Nước Tại Nhà</Link>
                  <Link href="#tiem-thuoc">Tiêm Thuốc Tại Nhà</Link>
                  <Link href="#thay-bang">Thay Băng, Cắt Chỉ</Link>
                  <Link href="#kham-benh">Bác Sĩ Khám Tại Nhà</Link>
                  <Link href="#tu-van">Tư Vấn Y Tế</Link>
                  <Link href="#xet-nghiem">Lấy Mẫu Xét Nghiệm</Link>
                </div>
              </li>
              <li><Link href="#pricing">Bảng Giá</Link></li>
              <li><Link href="#blog">Tin Tức</Link></li>
              <li><Link href="#locations">Chi Nhánh</Link></li>
              <li><Link href="#contact">Liên Hệ</Link></li>
            </ul>
          </nav>
          <div className={styles.contactInfo}>
            <a href="tel:0974564224">097.4564.224</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;