import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section.jsx';
import trusteesData from "../locales/en/translation.json";
import trusteePhoto from "../imgs/profile.jpg";

export default function Trustee(){
const { t } = useTranslation();
const trustees = t("trustee", { returnObjects: true });

return (
    <div className="tt">
    <Section>
        <div className="trustees-grid">
    {trustees.map((member, index) => (
        <div className="trustee-card" key={index}>
        <img src={member.photo} alt={member.name} className="trustee-photo" />
        <div className="trustee-details">
        <h3> {member.pos}<br />{member.name}</h3>
        <a href=''><p>{member.number}</p></a>
        </div>
        </div>
    ))}
    </div>
    </Section>
    </div>
);
}