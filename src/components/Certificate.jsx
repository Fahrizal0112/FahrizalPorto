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
import cert24 from "./assets/certificates/24.png";
import cert25 from "./assets/certificates/25.png";
import cert26 from "./assets/certificates/26.png";
import cert27 from "./assets/certificates/27.png";

const Certificate = () => {
  const certificates = [
    { id: 1, image: cert1 },
    { id: 2, image: cert2 },
    { id: 3, image: cert3 },
    { id: 4, image: cert4 },
    { id: 5, image: cert5 },
    { id: 6, image: cert6 },
    { id: 7, image: cert7 },
    { id: 8, image: cert8 },
    { id: 9, image: cert9 },
    { id: 10, image: cert10 },
    { id: 11, image: cert11 },
    { id: 12, image: cert12 },
    { id: 13, image: cert13 },
    { id: 14, image: cert14 },
    { id: 15, image: cert15 },
    { id: 16, image: cert16 },
    { id: 17, image: cert17 },
    { id: 18, image: cert18 },
    { id: 19, image: cert19 },
    { id: 20, image: cert20 },
    { id: 21, image: cert21 },
    { id: 22, image: cert22 },
    { id: 23, image: cert23 },
    { id: 24, image: cert24 },
    { id: 25, image: cert25 },
    { id: 26, image: cert26 },
    { id: 27, image: cert27 },

  ];


  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = certificates.map((certificate) => certificate.image);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <section id="certificate" className="certificate animate__animated animate__fadeIn">
      <h1 className="text-5xl font-bold">
        <span className="text-white">My </span>
        <span className="text-orange">Certificates</span>
      </h1>
      <div className="certificate-images">
        {certificates.map((certificate, index) => (
          <div key={index} className="image-box">
            <img
              src={certificate.image}
              alt={`Certificate ${certificate.id}`}
              className="certificate-image"
              onClick={() => openImageViewer(index)}
            />
          </div>
        ))}
      </div>

      {isViewerOpen && (
        <>
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
          <button className="close-button" onClick={closeImageViewer}>
            &times;
          </button>
        </>
      )}
    </section>
  );
};

export default Certificate;
