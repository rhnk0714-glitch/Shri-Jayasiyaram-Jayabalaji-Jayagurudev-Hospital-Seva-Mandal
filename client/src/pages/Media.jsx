// Media.jsx  (framer-motion variant - recommended)
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section.jsx";
import { motion, AnimatePresence } from "framer-motion";


import news1 from "../imgs/news1.jpg"; // add more images as needed
import news2 from "../imgs/news (1).jpg";
import news3 from "../imgs/news (2).jpg";
import news4 from "../imgs/news (4).jpg";
import news5 from "../imgs/news (5).jpg";
import news6 from "../imgs/news (6).jpg";
import news7 from "../imgs/news (7).jpg";
import news8 from "../imgs/news (8).jpg";
import news9 from "../imgs/news (9).jpg";
import news10 from "../imgs/news (10).jpg";
import news11 from "../imgs/news (11).jpg";
import news12 from "../imgs/news (12).jpg";
import news13 from "../imgs/news (13).jpg";
import news14 from "../imgs/news (3).jpg";
import news15 from "../imgs/news (14).jpg";
import news16 from "../imgs/news (15).jpg";
import news17 from "../imgs/news (16).jpg";
import news18 from "../imgs/news (17).jpg";
import news19 from "../imgs/news (18).jpg";
import news20 from "../imgs/news (19).jpg";
import news21 from "../imgs/news (20).jpg";
import news22 from "../imgs/news (21).jpg";
import news23 from "../imgs/news (22).jpg";
import news24 from "../imgs/news (23).jpg";
import news25 from "../imgs/news (24).jpg";
import news26 from "../imgs/news (25).jpg";
import news27 from "../imgs/news (26).jpg";
import news28 from "../imgs/news (27).jpg";
import news29 from "../imgs/news (28).jpg";
import news30 from "../imgs/news (29).jpg";
import news31 from "../imgs/news (30).jpg";
import av from "../imgs/av.jpg";
import adv from "../imgs/adv.jpg";
import adv2 from "../imgs/adv2.jpg";
import adv3 from "../imgs/adv3.jpg";

export default function Media() {
  const { t } = useTranslation();
  // image list: extend this with your imports
  const images = [
    { id: 1, src: news1, alt: t("media.alt.news1", "News image 1"), caption: t("media.caption.news1", "Jaysiyaram - event photo") },
    { id:2, src: news2, alt: "...", caption:t("media.caption.news2","Advertisement ")},
    { id:3, src: news3, alt: "...", caption:t("media.caption.news3","Advertisement ")},
    { id:4, src: news4, alt: "...", caption:t("media.caption.news4","Advertisement ")},
    { id:5, src: news5, alt: "...", caption:t("media.caption.news5","Janmashtami ")},
    { id:6, src: news6, alt: "...", caption:t("media.caption.news6","Advertisement ")},
    { id:7, src: news7, alt: "...", caption:t("media.caption.news7","Advertisement ")},
    { id:8, src: news8, alt: "...", caption:t("media.caption.news8","Independance Day")},
    { id:9, src: news9, alt: "...", caption:t("media.caption.news9","Advertisement")},
    { id:10, src: news10, alt: "...", caption:t("media.caption.news10","Advertisement")},
    { id:11, src: news11, alt: "...", caption:t("media.caption.news11","Advertisement")},
    { id:12, src: news12, alt: "...", caption:t("media.caption.news12","Advertisement")},
    { id:13, src: news13, alt: "...", caption:t("media.caption.news13","Advertisement")},
    { id:14, src: news14, alt: "...", caption:t("media.caption.news14","Advertisement")},
    { id:15, src: news15, alt: "...", caption:t("media.caption.news15","Advertisement")},
    { id:16, src: news16, alt: "...", caption:t("media.caption.news16","Advertisement")},
    { id:17, src: news17, alt: "...", caption:t("media.caption.news17","Advertisement")},
    { id:18, src: news18, alt: "...", caption:t("media.caption.news18","Advertisement")},
    { id:19, src: news19, alt: "...", caption:t("media.caption.news19","Advertisement")},
    { id:20, src: news20, alt: "...", caption:t("media.caption.news20","Advertisement")},
    { id:21, src: news21, alt: "...", caption:t("media.caption.news21","Advertisement")},
    { id:22, src: news22, alt: "...", caption:t("media.caption.news22","Advertisement")},
    { id:23, src: news23, alt: "...", caption:t("media.caption.news23","Advertisement")},
    { id:24, src: news24, alt: "...", caption:t("media.caption.news24","Advertisement")},
    { id:25, src: news25, alt: "...", caption:t("media.caption.news25","Advertisement")},
    { id:26, src: news26, alt: "...", caption:t("media.caption.news26","Advertisement")},  
    { id:27, src: news27, alt: "...", caption:t("media.caption.news27","Advertisement")},
    { id:28, src: news28, alt: "...", caption:t("media.caption.news27","Advertisement")},
    { id:29, src: news29, alt: "...", caption:t("media.caption.news27","Advertisement")},
    { id:30, src: news30, alt: "...", caption:t("media.caption.news27","Advertisement")},
    { id:31, src: news31, alt: "...", caption:t("media.caption.news27","Advertisement")},
    { id:32, src: av, alt: "...", caption:t("media.caption.news27","Advertisement")},
    { id:33, src: adv, alt: "...", caption:t("media.caption.news27","Advertisement")},
    { id:34, src: adv2, alt: "...", caption:t("media.caption.news27","Advertisement")},
    { id:35, src: adv3, alt: "...", caption:t("media.caption.news27","Advertisement")}

  ];

  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  // keyboard nav
  useEffect(() => {
    function onKey(e) {
      if (openIndex === null) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex(i => Math.min(images.length - 1, i + 1));
      if (e.key === "ArrowLeft") setOpenIndex(i => Math.max(0, i - 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, images.length]);

  // prevent page scroll when modal open
  useEffect(() => {
    document.documentElement.style.overflow = openIndex !== null ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [openIndex]);

  // touch swipe handlers for modal
  const touch = useRef({ startX: 0, endX: 0 });
  function onTouchStart(e) { touch.current.startX = e.touches[0].clientX; }
  function onTouchMove(e) { touch.current.endX = e.touches[0].clientX; }
  function onTouchEnd() {
    const dx = touch.current.endX - touch.current.startX;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) setOpenIndex(i => Math.min(images.length - 1, i + 1));
    if (dx > 0) setOpenIndex(i => Math.max(0, i - 1));
  }

  // neat progressive preloading: preload next image
  useEffect(() => {
    if (openIndex === null) return;
    const next = images[openIndex + 1];
    if (next) {
      const img = new Image();
      img.src = next.src;
    }
  }, [openIndex, images]);

  return (
    <Section id="gallery" title={t("media.heading", "Media Gallery")}>
      <div className="media-master">
        <div className="media-grid" ref={containerRef} role="list">
          {images.map((img, idx) => (
            <article key={img.id} className="media-card" role="listitem">
              <button
                className="media-thumb-btn"
                onClick={() => setOpenIndex(idx)}
                aria-label={t("media.openImage", "Open image")}
              >
                <div className="media-thumb">
                  <img src={img.src} alt={img.alt}  width="640" height="420" />
                </div>
                <div className="media-thumb-meta">
                  <div className="media-caption">{img.caption}</div>
                </div>
              </button>
            </article>
          ))}
        </div>

        {/* Lightbox with AnimatePresence */}
        <AnimatePresence>
          {openIndex !== null && (
            <motion.aside
              className="media-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="lightbox"
              onClick={(e) => {
                if (e.target.classList.contains("media-lightbox")) setOpenIndex(null);
              }}
            >
              <motion.div
                className="media-modal"
                initial={{ y: 20, scale: 0.98 }}
                animate={{ y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 28 } }}
                exit={{ y: 20, opacity: 0 }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                role="dialog"
                aria-modal="true"
                aria-label={images[openIndex].caption || "Image preview"}
              >
                <button className="modal-close" onClick={() => setOpenIndex(null)} aria-label={t("media.close", "Close")}>✕</button>

                <button
                  className="modal-nav prev"
                  onClick={() => setOpenIndex(i => Math.max(0, i - 1))}
                  disabled={openIndex === 0}
                  aria-label={t("media.prev", "Previous")}
                >
                  ‹
                </button>

                <figure className="modal-figure">
                  <motion.img
                    key={images[openIndex].src}
                    src={images[openIndex].src}
                    alt={images[openIndex].alt}
                    className="modal-img"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0}}
                  />
                  {images[openIndex].caption && <figcaption className="modal-caption">{images[openIndex].caption}</figcaption>}
                </figure>
                
                <button
                  className="modal-nav next"
                  
                  onClick={() => setOpenIndex(i => Math.min(images.length - 1, i + 1))}
                  disabled={openIndex === images.length - 1}
                  aria-label={t("media.next", "Next")}
                >
                  ›
                </button>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}
