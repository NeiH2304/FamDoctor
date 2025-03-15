/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Cấu hình xuất ra dạng tĩnh
    images: {
      unoptimized: true,  // Cần thiết cho static export
    },
    basePath: process.env.NODE_ENV === 'production' ? '/fam-doctor-web' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/fam-doctor-web/' : '',
    trailingSlash: true,  // Thêm dấu / ở cuối URL để tương thích tốt hơn với GitHub Pages
  };
   
  export default nextConfig;