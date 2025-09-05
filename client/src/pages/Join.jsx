import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section.jsx";

const VolunteerForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    occupation: "",
    qualification: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5555/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(t("volunteerForm.success"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          occupation: "",
          qualification: "",
          address: "",
        });
      } else {
        const data = await res.json();
        alert(`${t("volunteerForm.error")}: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert(t("volunteerForm.serverError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="volunteer">
      <h2 className="form-title">{t("volunteerForm.title")}</h2>
      <div className="card">
      <form onSubmit={handleSubmit} className="volunteer-form">
        <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder={t("volunteerForm.name")}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t("volunteerForm.email")}
          value={formData.email}
          onChange={handleChange} required
        />
        <input
          type="tel"
          name="phone"
          placeholder={t("volunteerForm.phone")}
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="occupation"
          placeholder={t("volunteerForm.occupation")}
          value={formData.occupation}
          onChange={handleChange} required
        />
        <input
          type="text"
          name="qualification"
          placeholder={t("volunteerForm.qualification")}
          value={formData.qualification}
          onChange={handleChange} required
        />
        <textarea
          name="address"
          placeholder={t("volunteerForm.address")}
          value={formData.address}
          onChange={handleChange}
        />

        <button type="submit"  className="btn" disabled={loading}>
          {loading ? t("volunteerForm.submit") : t("volunteerForm.submit")}
        </button>
        </div>
      </form>
      </div>
    </Section>
  );
};

export default VolunteerForm;
