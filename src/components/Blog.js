import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Blog.module.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Truyền Nước Tại Nhà Hà Nội – Truyền Dịch Tại Nhà Hà Nội – Tiêm Truyền Tại Nhà Hà Nội',
      excerpt: 'Hiện nay truyền dịch tại nhà khi cảm thấy cơ thể mệt mỏi, ngủ ít, ăn uống kém đang là lựa chọn của nhiều người...',
      image: '/images/blog-1.jpg',
      date: '07 Th11'
    },
    {
      id: 2,
      title: 'Truyền nước tại nhà khu vực Nam Từ Liêm Uy tín – An toàn 150k/Chai',
      excerpt: 'Hiện nay truyền dịch tại nhà khi cảm thấy cơ thể mệt mỏi, ngủ ít, ăn uống kém đang là lựa chọn của nhiều người tại Nam Từ Liêm. Dịch vụ của chúng tôi đảm bảo an toàn, uy tín...',
      image: '/images/blog-2.jpg',
      date: '12 Th6'
    },
    {
      id: 3,
      title: 'Truyền nước tại nhà khu vực Bắc Từ Liêm Uy tín – An toàn 150k/Chai',
      excerpt: 'Hiện nay truyền dịch tại nhà khi cảm thấy cơ thể mệt mỏi, ngủ ít, ăn uống kém đang là lựa chọn của nhiều người tại Bắc Từ Liêm, Hà Nội...',
      image: '/images/blog-3.jpg',
      date: '12 Th6'
    },
  ];

  return (
    <section className={styles.section} id="blog">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Tin Tức & Kiến Thức Y Tế</h2>
        </div>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <div className={styles.blogCard} key={post.id}>
              <div className={styles.blogImg}>
                <Image 
                  src={post.image} 
                  alt={post.title}
                  width={400}
                  height={300}
                />
                <div className={styles.blogDate}>{post.date}</div>
              </div>
              <div className={styles.blogContent}>
                <h3><Link href="#">{post.title}</Link></h3>
                <p>{post.excerpt}</p>
                <Link href="#" className={styles.readMore}>Đọc tiếp →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;