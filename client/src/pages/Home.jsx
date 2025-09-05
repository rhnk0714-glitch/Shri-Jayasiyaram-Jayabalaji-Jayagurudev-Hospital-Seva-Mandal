import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Section from '../components/Section.jsx';
import charity from '../imgs/Bapu (1).jpg';
import VisitorCounter from '../components/VisitorCounter.jsx';


export default function Home() {
  const { t } = useTranslation();
  
  return (
    <>
      {/* <div className="bubbles" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="bubble" />
        ))}
      </div>

      <div className="slideshow-overlay" aria-hidden="true" /> */}

      <Section id="hero" className="content-above-bg">
        <div className="hero">
          <img width="30%" height="500px" src={charity} alt="" />
          <div className="left">
            <p>{t('hero.sbtitle')}</p>
            <h1>{t('hero.title')}</h1>
            <h3>{t('hero.subtitle1')}</h3>
            <p className="lead">{t('hero.subtitle2')}</p>
            <div style={{ marginTop: 16, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/donate" className="control-btn">{t('hero.cta_donate')}</Link>
              <Link to="/join" className="control-btn ">{t('hero.cta_volunteer')}</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <VisitorCounter />
      </Section>
    </>
  );
}
