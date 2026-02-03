import React, { useState, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ProjectModal.scss";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { isDark } = useContext(StyleContext);

  if (!isOpen || !project) return null;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  const goToImage = (index) => setCurrentImageIndex(index);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) onClose();
  };

  return (
    <div className={`modal-backdrop ${isDark ? "dark-mode" : ""}`} onClick={handleBackdropClick}>
      <div className={`modal-container ${isDark ? "dark-mode" : ""}`}>
        {/* Close button */}
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        {/* Modal Content */}
        <div className="modal-content">

          {/* IMAGE SECTION */}
          <div className="modal-image-section">
            <div className="main-image-container">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.projectName} - Image ${currentImageIndex + 1}`}
                className="main-image"
              />
              {project.images.length > 1 && (
                <>
                  <button className="slider-arrow left" onClick={prevImage}>&lt;</button>
                  <button className="slider-arrow right" onClick={nextImage}>&gt;</button>
                </>
              )}
            </div>

            {project.images.length > 1 && (
              <div className="thumbnails">
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className={i === currentImageIndex ? "thumbnail active" : "thumbnail"}
                    onClick={() => goToImage(i)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* TEXT DETAILS */}
          <div className="modal-details">
            <h2 className="project-title">{project.projectName}</h2>
            {project.company && <span className="project-company">{project.company}</span>}

            <section className="description">
              <h3>Description</h3>
              <p>{project.projectDesc}</p>
              {project.detailedDesc && <p className="detailed">{project.detailedDesc}</p>}
            </section>

            {project.technologies && (
              <section className="technologies">
                <h3>Technologies</h3>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </section>
            )}

            {project.features && (
              <section className="features">
                <h3>Fonctionnalités principales</h3>
                <ul>
                  {project.features.map((f, i) => (
                    <li key={i}>
                      <span className="check">✔</span> {f}
                    </li>
                  ))}
                </ul>
              </section>
            )}

           
          </div>
        </div>
      </div>
    </div>
  );
}
