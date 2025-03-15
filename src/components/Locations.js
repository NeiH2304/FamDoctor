"use client"
import React, { useState } from 'react';
import styles from '@/styles/Locations.module.css';

const Locations = () => {
  const [province, setProvince] = useState('hanoi');
  const [district, setDistrict] = useState('all');

  const handleProvinceChange = (e) => {
    setProvince(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setDistrict(e.target.value);
  };

  return (
    <section className={styles.section} id="locations">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Chi Nhánh - Địa Điểm</h2>
        </div>
        <div className={styles.locationsWrapper}>
          <div className={styles.locationFilter}>
            <h3 className={styles.filterTitle}>Tìm kiếm cửa hàng</h3>
            <div className={styles.filterGroup}>
              <label htmlFor="province">Chọn tỉnh, thành phố</label>
              <select 
                id="province" 
                className={styles.filterSelect}
                value={province}
                onChange={handleProvinceChange}
              >
                <option value="hanoi">Hà Nội</option>
              </select>
            </div>
            <div className={styles.filterGroup}>
              <label htmlFor="district">Chọn quận, huyện</label>
              <select 
                id="district" 
                className={styles.filterSelect}
                value={district}
                onChange={handleDistrictChange}
              >
                <option value="all">Tất cả</option>
                <option value="dongda">Đống Đa</option>
                <option value="hoangmai">Hoàng Mai</option>
                <option value="caugiay">Cầu Giấy</option>
              </select>
            </div>
            <button className={styles.filterBtn}>Tìm kiếm cửa hàng gần bạn {'(<=20 km)'}</button>
            <div className={styles.locationResults}>
              <p className={styles.resultCount}>Tìm thấy <strong>3</strong> cửa hàng</p>
            </div>
          </div>
          <div className={styles.locationMap}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59585.84145405007!2d105.8019440522117!3d21.022736016859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSGFub2ksIEhvw6BuIEtp4bq_bSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1655570109916!5m2!1sen!2s" 
              allowFullScreen="" 
              loading="lazy"
              style={{ border: 0, width: '100%', height: '400px' }}
              title="Google Maps"
            ></iframe>
          </div>
        </div>
        <div className={styles.locationList}>
          <div className={styles.locationCard}>
            <h3 className={styles.locationName}>Cơ sở 1</h3>
            <p className={styles.locationAddress}>22A/180 Phố Tôn Đức Thắng, Hàng Bột, Đống Đa, Hà Nội, Việt Nam</p>
            <p className={styles.locationHours}>Mở cửa: 8:00 - 17:00</p>
            <a href="#" className={styles.locationLink}>Chỉ đường</a>
          </div>
          <div className={styles.locationCard}>
            <h3 className={styles.locationName}>Cơ sở 2</h3>
            <p className={styles.locationAddress}>73/183 Xuân Thủy, Cầu Giấy, Hà Nội, Việt Nam</p>
            <p className={styles.locationHours}>Mở cửa: 8:00 - 17:00</p>
            <a href="#" className={styles.locationLink}>Chỉ đường</a>
          </div>
          <div className={styles.locationCard}>
            <h3 className={styles.locationName}>Cơ sở 3</h3>
            <p className={styles.locationAddress}>1/3 Lĩnh Nam, Hoàng Mai, Hà Nội, Việt Nam</p>
            <p className={styles.locationHours}>Mở cửa: 8:00 - 17:00</p>
            <a href="#" className={styles.locationLink}>Chỉ đường</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;