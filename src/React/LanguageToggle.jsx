import React, { useState, useEffect } from 'react';
import { translations } from '../i18n/translation.ts';

export default function LanguageToggle() {
  const [lang, setLang] = useState('fr');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio_lang') || 'fr';
    setLang(savedLang);
    updateTexts(savedLang);
  }, []);

  const updateTexts = (currentLang) => {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const keys = key.split('.');
      let text = translations[currentLang];
      
      for (const k of keys) {
        text = text?.[k];
      }
      
      if (text !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });

    const projectItems = translations[currentLang].projects.items;
    projectItems.forEach((item, index) => {
      const descEl = document.querySelector(`[data-i18n-project-desc="${index}"]`);
      const statusEl = document.querySelector(`[data-i18n-project-status="${index}"]`);
      
      if (descEl) descEl.textContent = item.description;
      if (statusEl) statusEl.textContent = item.status;
    });
  };

  const toggleLanguage = () => {
    const newLang = lang === 'fr' ? 'en' : 'fr';
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
    updateTexts(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-[#1414149c] text-[var(--white)] border border-[var(--white-icon-tr)] hover:border-[var(--sec)] transition-colors duration-300 flex items-center gap-1.5 cursor-pointer"
      aria-label="Changer de langue"
    >
      <span>🌐</span>
      <span className="uppercase font-semibold">{lang === 'fr' ? 'EN' : 'FR'}</span>
    </button>
  );
}