import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer(){
  const { t } = useTranslation();
  return (
    <footer>
       {/* <img src={info} alt="info" /> */}
      <small>{t('footer.rights')}</small>
    </footer>
  );
}