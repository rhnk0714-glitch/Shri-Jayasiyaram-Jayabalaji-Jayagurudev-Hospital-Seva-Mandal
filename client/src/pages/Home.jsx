import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Section from '../components/Section.jsx';
import charity from '../assets/Bapu (1).jpg';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
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
              {/* <Link to="/join" className="control-btn ">{t('hero.cta_volunteer')}</Link> */}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
