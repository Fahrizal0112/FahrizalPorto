import React, { useState, useCallback } from "react";
import "./Style/Certificate.css";
import ImageViewer from "react-simple-image-viewer";
import 'animate.css';
// Import Image
import cert1 from "./assets/certificates/1.png";
import cert2 from "./assets/certificates/2.png";
import cert3 from "./assets/certificates/3.png";
import cert4 from "./assets/certificates/4.png";
import cert5 from "./assets/certificates/5.png";
import cert6 from "./assets/certificates/6.png";
import cert7 from "./assets/certificates/7.png";
import cert8 from "./assets/certificates/8.png";
import cert9 from "./assets/certificates/9.png";
import cert10 from "./assets/certificates/10.png";
import cert11 from "./assets/certificates/11.png";
import cert12 from "./assets/certificates/12.png";
import cert13 from "./assets/certificates/13.png";
import cert14 from "./assets/certificates/14.png";
import cert15 from "./assets/certificates/15.png";
import cert16 from "./assets/certificates/16.png";
import cert17 from "./assets/certificates/17.png";
import cert18 from "./assets/certificates/18.png";
import cert19 from "./assets/certificates/19.png";
import cert20 from "./assets/certificates/20.png";
import cert21 from "./assets/certificates/21.png";
import cert22 from "./assets/certificates/22.png"
import cert23 from "./assets/certificates/23.png";
import cert24 from "./assets/certificates/24.jpg";
import cert25 from "./assets/certificates/25.jpg";
import cert26 from "./assets/certificates/26.jpg";
import cert27 from "./assets/certificates/27.jpg";

const Certificate = () => {
  const certificates = [
    { id: 1, image: cert1, title: "Web Development" },
    { id: 2, image: cert2, title: "Cloud Computing" },
    { id: 3, image: cert3, title: "Cyber Security" },
    { id: 4, image: cert4, title: "Cyber Security" },
    { id: 5, image: cert5, title: "Cyber Security" },
    { id: 6, image: cert6, title: "Cyber Security" },
    { id: 7, image: cert7, title: "Cyber Security" },
    { id: 8, image: cert8, title: "Cyber Security" },
    { id: 9, image: cert9, title: "Cyber Security" },
    { id: 10, image: cert10, title: "Cyber Security" },
    { id: 11, image: cert11, title: "Cyber Security" },
    { id: 12, image: cert12, title: "Cyber Security" },
    { id: 13, image: cert13, title: "Cyber Security" },
    { id: 14, image: cert14, title: "Cyber Security" },
    { id: 15, image: cert15, title: "Cyber Security" },
    { id: 16, image: cert16, title: "Cyber Security" },
    { id: 17, image: cert17, title: "Cyber Security" },
    { id: 18, image: cert18, title: "Cyber Security" },
    { id: 19, image: cert19, title: "Cyber Security" },
    { id: 20, image: cert20, title: "Cyber Security" },
    { id: 21, image: cert21, title: "Cyber Security" },
    { id: 22, image: cert22, title: "Cyber Security" },
    { id: 23, image: cert23, title: "Cyber Security" },
    { id: 24, image: cert24, title: "Cyber Security" },
    { id: 25, image: cert25, title: "Cyber Security" },
    { id: 26, image: cert26, title: "Cyber Security" },
    { id: 27, image: cert27, title: "Cyber Security" },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = certificates.map((certificate) => certificate.image);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="certificate" className="certificate animate__animated animate__fadeIn">
      <div className="certificate-container">
        <h1 className="section-title" data-aos="fade-down">
          <span className="text-white">My </span>
          <span className="text-orange">Certificates</span>
        </h1>
        
        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <div 
              key={index} 
              className="certificate-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => openImageViewer(index)}
            >
              <div className="certificate-image-wrapper">
                <img
                  src={certificate.image}
                  alt={`Certificate ${certificate.id}`}
                  className="certificate-image"
                />
                <div className="certificate-overlay">
                  <div className="zoom-icon">
                    <i className="fas fa-search-plus"></i>
                    <span>View Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isViewerOpen && (
        <div className="certificate-viewer-container">
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
          <button 
            className="close-viewer-button" 
            onClick={closeImageViewer}
            aria-label="Close certificate viewer"
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="image-counter">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
