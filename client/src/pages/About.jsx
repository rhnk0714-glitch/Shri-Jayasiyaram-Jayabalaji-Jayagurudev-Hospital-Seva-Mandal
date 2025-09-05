import React from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section.jsx";
import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();

  // fetch structured JSON objects (returnObjects true)
  const page1 = t("about.body.0.page_1", { returnObjects: true }) || {};
  const page2 = t("about.body.0.page_2", { returnObjects: true }) || {};

  return (
    <Section id="about" title={t("about.heading")}>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="about-wrap"
      >
        {/* top heading for the trust (large, decorative) */}
        <div className="about-hero">
          <h2 className="about-title">{page1.organization_info?.trust_name}</h2>
          <p className="about-sub">{page1.organization_info?.hospital_board}</p>
        </div>

        {/* grid: left card (contact / meta), right: long content */}
        <div className="about-grid">
          {/* Left Card */}
          <aside className="about-card">
            <div className="card-accent" />
            <div className="card-body">
              <h3 className="card-heading">Organization Info</h3>

              <p className="meta-line">
                <strong>{t('about.body.0.page_1.organization_info.address')}:</strong>
                <br />
                {page1.organization_info?.KO}
              </p>
              <p className="meta-line">
                <strong>{t('about.body.0.page_1.organization_info.phone')}:</strong> {page1.organization_info?.phno}
              </p>
              <p className="meta-line">
                <strong>{t('about.body.0.page_1.organization_info.Mobile')}:</strong> {page1.organization_info?.mbnb}
              </p>
              {/* <p className="meta-line">
                <strong>Email:</strong> {page1.organization_info?.email}
              </p> */}
              <p className="meta-line">
                <strong>{t('about.body.0.page_1.organization_info.pan')}:</strong> <br/>{page1.organization_info?.panno}
                <br/>{page1.organization_info?.panno1}<br/>{page1.organization_info?.panno2}
              </p>
              <p className="meta-line">
                <strong>{t('about.body.0.page_1.organization_info.trust')}:</strong> {page1.organization_info?.trust_reg}
              </p>
              <p className="meta-line">
                <strong>{t('about.body.0.page_1.organization_info.CSR')}:</strong> {page1.organization_info?.csrno}
              </p>
              <p className="meta-line">
                <strong>{t('about.body.0.page_1.organization_info.FSSAI')}:</strong> {page1.organization_info?.Fssaino}
              </p>
              <p className="meta-line">
                <strong>{t('about.body.0.page_1.organization_info.darpan')}:</strong> {page1.organization_info?.dpid}
              </p>
            </div>
          </aside>
          {/* Right content (long paragraphs) */}
          <article className="about-content">
            <section className="about-section">
              <h4 className="section-head">Services Summary</h4>
              <p className="body-text whitespace-pre-line">
                {page1.services_summary}
              </p>
            </section>
            <section className="about-section">
              <h4 className="section-head">Financials & Operations</h4>
              <p className="body-text whitespace-pre-line">
                {page2.financials_and_operations}
              </p>
            </section>
          </article>
        </div>
      </motion.div>
    </Section>
  );
}
