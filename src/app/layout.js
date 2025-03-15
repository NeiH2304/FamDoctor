import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export const metadata = {
  title: 'DoctorHome - Dịch Vụ Y Tế Tại Nhà Chuyên Nghiệp',
  description: 'DoctorHome cung cấp dịch vụ y tế tại nhà chuyên nghiệp, tận tâm và uy tín tại Hà Nội. Truyền nước, tiêm thuốc, thay băng, khám bệnh tại nhà 24/7.',
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <div id="app-root">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <BackToTop />
          
          {/* We'll handle JavaScript initialization here */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // This is where you can add your initialization scripts if needed
                // Most interactive functionality should be moved to React components
              `,
            }}
          />
        </div>
      </body>
    </html>
  );
}