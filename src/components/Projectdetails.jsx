import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./Style/ProjectDetail.css";
import "animate.css";
import ImageViewer from "react-simple-image-viewer";
import fishfeeder1 from "./assets/fishfeeder/1.png";
import fishfeeder2 from "./assets/fishfeeder/2.png";
import fishfeeder3 from "./assets/fishfeeder/3.png";
import fishfeeder4 from "./assets/fishfeeder/4.png";
import notetify1 from "./assets/notetify/1.png";
import notetify2 from "./assets/notetify/2.png";
import notetify3 from "./assets/notetify/3.png";
import notetify4 from "./assets/notetify/4.png";
import fitmate1 from "./assets/fitmate/1.png";
import fitmate2 from "./assets/fitmate/2.png";
import fitmate3 from "./assets/fitmate/3.png";
import fitmate4 from "./assets/fitmate/4.gif";
import parkol1 from "./assets/parkol/1.png";
import parkol2 from "./assets/parkol/2.png";
import parkol3 from "./assets/parkol/3.png";
import fingoal1 from "./assets/fingoal/1.jpg";
import fingoal2 from "./assets/fingoal/2.jpg";
import fingoal3 from "./assets/fingoal/3.jpg";
import fingoal4 from "./assets/fingoal/4.jpg";
import fingoal5 from "./assets/fingoal/5.jpg";
import fingoal6 from "./assets/fingoal/6.jpg";
import eth from "./assets/eth/eth.mov";
import web3 from "./assets/web3/web3.mov";
import chatbot from "./assets/chatbot/chatbot.mov";

const projects = [
  {
    id: 1,
    title: "IOT Fish Feeder",
    description:
      "IoT Fish Feeder adalah aplikasi cerdas yang dirancang untuk membantu pemilik ikan dalam mengelola pemberian pakan dengan lebih efisien. Aplikasi ini menggunakan teknologi IoT dan Machine Learning untuk memberikan saran tentang jumlah pakan yang optimal berdasarkan klasifikasi gambar ikan.",
    fitur: `
      <ul>
        <li>Klasifikasi Gambar Menggunakan Machine Learning: Menggunakan Flask untuk backend ML, aplikasi ini dapat menganalisis gambar ikan dan memberikan rekomendasi jumlah pakan yang sesuai.</li>
        <li>Pengaturan Jadwal Pemberian Pakan Otomatis: Pengguna dapat membuat jadwal pemberian pakan yang otomatis melalui aplikasi ini, memastikan ikan mendapatkan pakan tepat waktu.</li>
        <li>Komunikasi MQTT: Menggunakan protokol MQTT untuk komunikasi yang cepat dan efisien antara perangkat IoT dan server.</li>
        <li>Frontend dengan Flutter: Dibangun dengan Flutter, aplikasi ini menawarkan antarmuka yang menarik dan responsif bagi pengguna.</li>
        <li>Deploy di App Engine: Aplikasi ini di-deploy menggunakan Google App Engine, menjamin skalabilitas dan kinerja yang andal.</li>
      </ul>
    `,
    images: [fishfeeder1, fishfeeder2, fishfeeder3, fishfeeder4],
  },
  {
    id: 2,
    title: "Notetify",
    description:
      "Notetify adalah aplikasi yang saya rancang untuk memudahkan pengguna dalam mengelola catatan sehari-hari dan pengingat penting. Dengan fitur login dan register, pengguna dapat menyimpan catatan dan mengatur pengingat dengan mudah dan efisien.",
    fitur: `
      <ul>
        <li>Pembuatan Catatan: Memungkinkan pengguna untuk membuat catatan secara terpisah untuk setiap topik atau kegiatan.</li>
        <li>Pengingat: Fitur pengingat memastikan pengguna tidak melewatkan jadwal penting atau deadline dengan notifikasi yang dapat disesuaikan.</li>
        <li>Login dan Register: Sistem otentikasi yang aman dengan fitur registrasi dan login untuk menjaga privasi pengguna.</li>
        <li>Responsif dan Mudah Digunakan: Antarmuka yang intuitif membuat Notetify dapat diakses dengan lancar dari berbagai perangkat.</li>
      </ul>
    `,
    images: [notetify1, notetify2, notetify3, notetify4],
  },
  {
    id: 3,
    title: "Fitmate",
    description:
      "Fitmate adalah aplikasi gym yang saya rancang untuk membantu pengguna dalam melakukan latihan dengan benar dan efisien. Menggunakan teknologi Machine Learning, aplikasi ini dapat mendeteksi postur tubuh untuk memastikan posisi yang benar dan menggunakan Object Detection untuk mengenali alat olahraga yang digunakan. Dengan fitur ini, Fitmate dapat memberikan panduan latihan yang sesuai.",
    fitur: `
      <ul>
        <li>Deteksi Postur Tubuh: Menggunakan Machine Learning untuk mendeteksi postur tubuh dan memastikan posisi yang benar saat latihan.</li>
        <li>Deteksi Alat Olahraga: Object Detection digunakan untuk mengenali alat olahraga dan memberikan instruksi yang tepat.</li>
        <li>Latihan yang Dipersonalisasi: Aplikasi memberikan panduan latihan yang sesuai berdasarkan analisis postur dan alat yang digunakan.</li>
        <li>Frontend dengan Kotlin: Aplikasi ini dibangun menggunakan Kotlin untuk antarmuka yang responsif dan mudah digunakan.</li>
        <li>Backend dengan Hapi.js: Menggunakan Hapi.js untuk manajemen data dan logika aplikasi, serta di-deploy menggunakan Cloud Run dan App Engine.</li>
        <li>Penyimpanan Aset dengan Cloud Storage: Menggunakan Cloud Storage untuk menyimpan aset aplikasi dengan aman.</li>
        <li>Database dengan Cloud SQL: Menggunakan Cloud SQL untuk penyimpanan data yang aman dan skalabel.</li>
      </ul>
    `,
    images: [fitmate1, fitmate2, fitmate3, fitmate4],
  },
  {
    id: 4,
    title: "IOT Parkol",
    description:
      "IOT Parkol adalah aplikasi berbasis IoT yang dirancang untuk mempermudah manajemen parkir dengan menyediakan informasi real-time tentang ketersediaan tempat parkir, memungkinkan pengguna untuk melakukan booking lahan parkir, serta memberikan fitur analisis data untuk admin. Proyek ini memanfaatkan teknologi IoT untuk pemantauan parkir dan menyajikan antarmuka pengguna yang responsif untuk pengelolaan parkir.",
    fitur: `
      <ul>
        <li>Pemantauan Ketersediaan Tempat Parkir: Menggunakan sensor IoT untuk mendeteksi ketersediaan tempat parkir dan menampilkan informasi secara real-time.</li>
        <li>Booking Tempat Parkir: Fitur untuk memesan tempat parkir yang tersedia dengan konfirmasi dan pembayaran online.</li>
        <li>Analisis Data untuk Admin: Menyediakan laporan pendapatan dan data statistik pengunjung untuk manajemen parkir yang lebih efisien.</li>
        <li>Frontend dengan Flutter: Dibangun menggunakan Flutter untuk antarmuka pengguna yang responsif dan mudah digunakan.</li>
        <li>Backend dengan Hapi.js: Menggunakan Hapi.js untuk pengelolaan data dan logika aplikasi, serta di-deploy menggunakan Cloud Run dan App Engine.</li>
        <li>Database dengan MySQL: Menyimpan data parkir, pemesanan, dan pengguna dengan aman dan efisien menggunakan MySQL.</li>
      </ul>
    `,
    images: [parkol1, parkol2, parkol3],
  },
  {
    id: 5,
    title: "FinGoal",
    description:
      "Fingoal adalah aplikasi keuangan yang dirancang untuk membantu pengguna dalam mengelola dan mencapai tujuan keuangan mereka dengan cara yang cerdas dan terarah. Aplikasi ini menggabungkan analisis data dan teknologi prediktif untuk memberikan rekomendasi investasi yang sesuai dengan profil risiko pengguna, panduan menabung, serta prediksi pergerakan harga saham.",
    fitur: `
      <ul>
        <li>Check Profile Risk: Fitur ini memungkinkan pengguna untuk mengetahui profil risiko investasi mereka, apakah mereka termasuk dalam kategori konservatif, moderat, atau agresif. Melalui serangkaian pertanyaan yang dirancang khusus, aplikasi akan menganalisis data pengguna dan memberikan hasil yang membantu mereka memahami tingkat toleransi risiko yang sesuai dengan kepribadian dan tujuan keuangan mereka.</li>
        <li>Savings: Fitur ini membantu pengguna untuk merencanakan dan mencapai tujuan menabung mereka. Setelah mengisi form terkait tujuan finansial, aplikasi akan memberikan panduan langkah demi langkah serta rekomendasi investasi yang disesuaikan dengan kebutuhan dan profil risiko pengguna. Fitur ini dirancang untuk memastikan bahwa pengguna dapat mencapai tujuan keuangan mereka dengan strategi yang efektif dan tepat waktu.</li>
        <li>Forecast Stocks: Fingoal menawarkan fitur prediksi harga saham yang memungkinkan pengguna untuk melihat perkiraan pergerakan harga saham selama 4 hari ke depan. Menggunakan teknik analisis data dan model prediktif, aplikasi ini memberikan wawasan yang berharga bagi pengguna yang ingin membuat keputusan investasi berbasis data.</li>
        <li>Personalisasi: Rekomendasi dan panduan yang diberikan disesuaikan dengan profil risiko dan tujuan keuangan individu pengguna.</li>
        <li>Keputusan Berbasis Data: Dengan menggunakan teknologi bisnis intelijen, Fingoal membantu pengguna membuat keputusan keuangan yang lebih baik berdasarkan analisis data yang canggih.</li>
        <li>Kemudahan Penggunaan: Aplikasi ini dirancang agar mudah digunakan oleh siapa saja, baik oleh investor pemula maupun yang sudah berpengalaman.</li>
      </ul>
    `,
    images: [fingoal1, fingoal2, fingoal3, fingoal4, fingoal5, fingoal6],
  },
  {
    id: 6,
    title: "Ethereum Anomaly Detection",
    description:
      "Ethereum Anomaly Detection adalah aplikasi web yang dirancang untuk mendeteksi anomali pada transaksi blockchain Ethereum secara real-time. Aplikasi ini menggunakan metode One Class Graph Neural Network (OCGNN) untuk menganalisis pola transaksi dan mengidentifikasi aktivitas yang mencurigakan atau tidak normal pada jaringan Ethereum. Dengan visualisasi grafik yang interaktif, aplikasi ini memudahkan pengguna untuk memantau dan menganalisis transaksi blockchain dengan lebih efektif.",
    fitur: `
      <ul>
        <li>Deteksi Anomali Real-time: Memantau dan menganalisis transaksi Ethereum secara real-time untuk mengidentifikasi pola yang mencurigakan.</li>
        <li>Implementasi OCGNN: Menggunakan metode One Class Graph Neural Network yang khusus dioptimalkan untuk deteksi anomali pada data grafik.</li>
        <li>Visualisasi Grafik Interaktif: Menampilkan transaksi dalam bentuk grafik yang interaktif untuk memudahkan analisis dan pemahaman.</li>
        <li>Klasifikasi Transaksi: Mengategorikan transaksi sebagai normal atau anomali berdasarkan pola yang diidentifikasi oleh model.</li>
        <li>Dashboard Analitik: Menyediakan dashboard yang komprehensif dengan metrik dan statistik penting tentang transaksi yang dianalisis.</li>
        <li>Notifikasi Anomali: Memberikan peringatan saat sistem mendeteksi transaksi yang dianggap anomali.</li>
        <li>Backend dengan Python dan TensorFlow: Menggunakan Python dan TensorFlow untuk implementasi model machine learning.</li>
        <li>Frontend dengan React.js: Dibangun dengan React.js untuk antarmuka pengguna yang responsif dan modern.</li>
        <li>Integrasi Blockchain: Terhubung langsung ke jaringan Ethereum untuk memperoleh data transaksi terbaru.</li>
      </ul>
    `,
    videoUrl: eth,
    images: [],
  },
  {
    id: 7,
    title: "Web3 Ticket System",
    description:
      "Web3 Ticket System adalah implementasi sistem tiket event berbasis NFT (ERC-721) di blockchain Ethereum. Proyek ini memungkinkan pembuatan, penjualan, dan manajemen tiket event digital yang aman dan terdesentralisasi. Dengan menggunakan teknologi smart contract, sistem ini menghilangkan perantara dalam penjualan tiket, meminimalkan pemalsuan, dan memungkinkan verifikasi yang transparan.",
    fitur: `
      <ul>
        <li>Pembuatan Tiket: Minter dapat membuat tiket event dengan detail seperti nama event, tanggal, dan harga.</li>
        <li>Sistem Role-Based: Menggunakan AccessControl untuk manajemen role (Admin dan Minter).</li>
        <li>Jual Beli Tiket: Pengguna dapat membeli dan menjual tiket melalui smart contract.</li>
        <li>Verifikasi Tiket: Minter dapat memverifikasi dan menandai tiket sebagai "telah digunakan".</li>
        <li>Manajemen Pendapatan: Sistem pembagian dan penarikan pendapatan untuk minter.</li>
        <li>Smart Contract Solidity: Mengembangkan smart contract menggunakan Solidity, dengan implementasi standar ERC-721 untuk NFT.</li>
        <li>Hardhat Development: Menggunakan Hardhat sebagai environment development untuk testing dan deployment.</li>
        <li>Role Management: Fitur pengelolaan peran seperti addMinter, removeMinter, dan getMinters.</li>
        <li>Tiket Management: Fungsi createTicket, purchaseTicket, sellTicket, dan useTicket untuk manajemen tiket.</li>
        <li>Security: Implementasi best practices keamanan seperti role-based access control, safe math operations, dan protection dari serangan reentrancy.</li>
        <li>Deployment: Di-deploy ke jaringan Sepolia Testnet dengan alamat contract 0x400B7c0a13388bF5D29b3007e97dbf229eBfD8E4.</li>
      </ul>
    `,
    videoUrl: web3,
    images: [],
  },
  {
    id: 8,
    title: "AI Chatbot Toko Casing iPhone",
    description:
      "Aplikasi chatbot berbasis AI untuk toko casing iPhone menggunakan Flask dan Google Gemini AI. Chatbot ini dirancang untuk memberikan pengalaman berbelanja yang lebih baik dengan membantu pelanggan mendapatkan informasi produk, melakukan pemesanan, dan melacak status pesanan mereka secara otomatis dan efisien.",
    fitur: `
      <ul>
        <li>Chat Interface Modern: Antarmuka chat yang modern dan responsif untuk kemudahan interaksi pengguna.</li>
        <li>AI-Powered Responses: Menggunakan Google Gemini AI untuk memberikan respons yang cerdas dan kontekstual.</li>
        <li>Informasi Produk: Menyediakan informasi lengkap tentang berbagai model casing iPhone.</li>
        <li>Sistem Pemesanan: Fitur pemesanan otomatis yang terintegrasi dengan sistem.</li>
        <li>Status Tracking: Pelacakan status pesanan secara real-time.</li>
        <li>Database Integration: Menggunakan PostgreSQL untuk penyimpanan data yang handal.</li>
        <li>Tech Stack:</li>
        <ul>
          <li>Backend: Python 3.9+ dengan Flask framework</li>
          <li>AI: Google Generative AI (Gemini)</li>
          <li>Database: PostgreSQL untuk penyimpanan data</li>
          <li>Frontend: HTML5/CSS3 dan JavaScript untuk UI yang responsif</li>
          <li>UI Components: Font Awesome Icons untuk elemen visual</li>
        </ul>
        <li>Deployment Features:</li>
        <ul>
          <li>Virtual Environment: Isolasi dependensi dengan Python venv</li>
          <li>Database Setup: Konfigurasi PostgreSQL dengan schema management</li>
          <li>Environment Variables: Manajemen konfigurasi yang aman</li>
          <li>API Integration: Integrasi dengan Google Gemini API</li>
        </ul>
        <li>Security: Implementasi environment variables untuk credential management.</li>
        <li>Documentation: Dokumentasi lengkap untuk instalasi dan konfigurasi.</li>
      </ul>
    `,
    videoUrl: chatbot,
    images: [],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    document.body.style.overflow = "hidden"; // Mencegah scroll saat viewer terbuka
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
    document.body.style.overflow = "unset"; // Mengembalikan scroll
  };

  if (!project) {
    return <div className="not-found">Project not found</div>;
  }

  return (
    <section
      id="project-detail"
      className="project-detail animate__animated animate__fadeIn"
    >
      <div className="project-header" data-aos="fade-down">
        <h1 className="project-title text-orange font-bold">{project.title}</h1>
      </div>

      {(project.id === 6 || project.id === 7 || project.id === 8) && project.videoUrl && (
        <div className="video-container" data-aos="fade-up">
          <video 
            controls 
            className="project-video"
            src={project.videoUrl} 
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div className="project-gallery" data-aos="fade-up">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openImageViewer(index)}
            >
              <div className="image-wrapper">
                <img
                  src={image}
                  alt={`Project ${project.id} Image ${index + 1}`}
                  className="project-image"
                />
                <div className="image-overlay">
                  <div className="zoom-icon">
                    <i className="fas fa-search-plus"></i>
                    <span>Click to zoom</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="project-content">
        <div className="content-section" data-aos="fade-up">
          <h2 className="section-title">Project Description</h2>
          <p className="project-description">{project.description}</p>
        </div>

        <div className="content-section" data-aos="fade-up">
          <h2 className="section-title">Project Features</h2>
          <div
            className="project-features"
            dangerouslySetInnerHTML={{ __html: project.fitur }}
          />
        </div>
      </div>

      {isViewerOpen && (
        <div className="image-viewer-container">
          <ImageViewer
            src={project.images}
            currentIndex={currentImage}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
          <button
            className="close-viewer-button"
            onClick={closeImageViewer}
            aria-label="Close image viewer"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="image-counter">
            {currentImage + 1} / {project.images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
