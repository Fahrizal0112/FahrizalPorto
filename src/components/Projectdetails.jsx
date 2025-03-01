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
