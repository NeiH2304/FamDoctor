'use client';

import { useState, useEffect } from 'react';
import styles from '@/styles/BackToTop.module.css';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up the event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a 
      href="#" 
      className={`${styles.backToTop} ${isVisible ? styles.active : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </a>
  );
}