"use client"
import React, { useState } from 'react';
import styles from '@/styles/Pricing.module.css';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('truyen-nuoc-price');

  const openPriceTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Bảng Giá Dịch Vụ</h2>
        </div>
        <div className={styles.priceTabs}>
          <button 
            className={`${styles.priceTab} ${activeTab === 'truyen-nuoc-price' ? styles.active : ''}`}
            onClick={() => openPriceTab('truyen-nuoc-price')}
          >
            Truyền Nước
          </button>
          <button 
            className={`${styles.priceTab} ${activeTab === 'tiem-thuoc-price' ? styles.active : ''}`}
            onClick={() => openPriceTab('tiem-thuoc-price')}
          >
            Tiêm Thuốc
          </button>
          <button 
            className={`${styles.priceTab} ${activeTab === 'thay-bang-price' ? styles.active : ''}`}
            onClick={() => openPriceTab('thay-bang-price')}
          >
            Thay Băng
          </button>
          <button 
            className={`${styles.priceTab} ${activeTab === 'kham-benh-price' ? styles.active : ''}`}
            onClick={() => openPriceTab('kham-benh-price')}
          >
            Khám Bệnh
          </button>
        </div>
        
        <div className={`${styles.priceContent} ${activeTab === 'truyen-nuoc-price' ? styles.active : ''}`}>
          <table className={styles.priceTable}>
            <thead>
              <tr>
                <th>Loại Dịch Truyền</th>
                <th>Đơn Vị</th>
                <th>Giá (VNĐ)</th>
                <th>Ghi Chú</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dịch truyền NaCl 0.9%</td>
                <td>1 chai</td>
                <td>150.000</td>
                <td>Bao gồm dịch truyền và dịch vụ</td>
              </tr>
              <tr>
                <td>Dịch truyền Ringer Lactate</td>
                <td>1 chai</td>
                <td>170.000</td>
                <td>Bao gồm dịch truyền và dịch vụ</td>
              </tr>
              <tr>
                <td>Dịch truyền bổ sung vitamin</td>
                <td>1 chai</td>
                <td>250.000</td>
                <td>Bao gồm dịch truyền, vitamin và dịch vụ</td>
              </tr>
              <tr>
                <td>Dịch truyền phục hồi sức khỏe</td>
                <td>1 chai</td>
                <td>350.000</td>
                <td>Bao gồm dịch truyền, thuốc bổ và dịch vụ</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Add similar divs for other price tabs */}
        {/* I'll show one more as an example */}
        <div className={`${styles.priceContent} ${activeTab === 'tiem-thuoc-price' ? styles.active : ''}`}>
            <table className={styles.priceTable}>
                <thead>
                <tr>
                    <th>Loại Tiêm</th>
                    <th>Đơn Vị</th>
                    <th>Giá (VNĐ)</th>
                    <th>Ghi Chú</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Tiêm bắp</td>
                    <td>1 mũi</td>
                    <td>50.000</td>
                    <td>Chưa bao gồm thuốc</td>
                </tr>
                <tr>
                    <td>Tiêm tĩnh mạch</td>
                    <td>1 mũi</td>
                    <td>70.000</td>
                    <td>Chưa bao gồm thuốc</td>
                </tr>
                <tr>
                    <td>Tiêm dưới da</td>
                    <td>1 mũi</td>
                    <td>50.000</td>
                    <td>Chưa bao gồm thuốc</td>
                </tr>
                <tr>
                    <td>Tiêm vitamin tổng hợp</td>
                    <td>1 mũi</td>
                    <td>150.000</td>
                    <td>Bao gồm vitamin và dịch vụ</td>
                </tr>
                </tbody>
            </table>
            </div>

            <div className={`${styles.priceContent} ${activeTab === 'thay-bang-price' ? styles.active : ''}`}>
            <table className={styles.priceTable}>
                <thead>
                <tr>
                    <th>Loại Dịch Vụ</th>
                    <th>Đơn Vị</th>
                    <th>Giá (VNĐ)</th>
                    <th>Ghi Chú</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Thay băng vết thương nhỏ</td>
                    <td>1 lần</td>
                    <td>100.000</td>
                    <td>Vết thương dưới 5cm</td>
                </tr>
                <tr>
                    <td>Thay băng vết thương vừa</td>
                    <td>1 lần</td>
                    <td>150.000</td>
                    <td>Vết thương từ 5-10cm</td>
                </tr>
                <tr>
                    <td>Thay băng vết thương lớn</td>
                    <td>1 lần</td>
                    <td>200.000</td>
                    <td>Vết thương trên 10cm</td>
                </tr>
                <tr>
                    <td>Cắt chỉ</td>
                    <td>1 lần</td>
                    <td>100.000</td>
                    <td>Vết mổ dưới 10cm</td>
                </tr>
                </tbody>
            </table>
            </div>

            <div className={`${styles.priceContent} ${activeTab === 'kham-benh-price' ? styles.active : ''}`}>
            <table className={styles.priceTable}>
                <thead>
                <tr>
                    <th>Loại Dịch Vụ</th>
                    <th>Đơn Vị</th>
                    <th>Giá (VNĐ)</th>
                    <th>Ghi Chú</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Khám bệnh tại nhà</td>
                    <td>1 lần</td>
                    <td>500.000</td>
                    <td>Bao gồm tư vấn và kê đơn</td>
                </tr>
                <tr>
                    <td>Khám chuyên khoa</td>
                    <td>1 lần</td>
                    <td>700.000</td>
                    <td>Bao gồm tư vấn và kê đơn</td>
                </tr>
                <tr>
                    <td>Lấy mẫu xét nghiệm</td>
                    <td>1 lần</td>
                    <td>200.000</td>
                    <td>Chưa bao gồm chi phí xét nghiệm</td>
                </tr>
                <tr>
                    <td>Tư vấn dinh dưỡng</td>
                    <td>1 lần</td>
                    <td>300.000</td>
                    <td>Bao gồm lập kế hoạch dinh dưỡng</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </section>
);
};

export default Pricing;