import React from 'react';
import logo from "../img/logo.svg"; 

const Footer = () => {
  return (
    <>
    <div id='contacts' className="contacts-section">
          <h2 className="contacts-title">Контакты</h2>
          <div className="contacts-container">
        <div className="contacts-info">
          <img className="contacts-logo" src={logo} alt="Российский Союз строителей" />
          <div className="contacts-text">
            <p><strong>Российский Союз строителей</strong></p>
            <p>
              <a href="https://omorrss.ru/" target="_blank" rel="noreferrer">
                https://omorrss.ru/
              </a><br />
              119049, г. Москва, Коровий Вал, дом 9<br />
              Телефон: (499) 270-52-51<br />
              E-mail: <a href="mailto:info@morrss.ru">info@morrss.ru</a>
            </p>

          </div>
          <div className="contacts-text">
          <p><strong>Банковские реквизиты ОМОР «Российский Союз Строителей»:</strong><br />
              ИНН 7736191290<br />
              КПП 773601001<br />
              Р/счет 40703810938100100758<br />
              Кор. счет 30101810400000000225<br />
              БИК 044525225<br />
              «ПАО Сбербанк России», г. Москва<br />
              Московский банк Сбербанка России ОАО, г. Москва<br />
              ОКОНХ 97950<br />
              ОКПО 18798518<br />
              ОГРН 1027700355726
            </p>
          </div>
        </div>
          </div>
        </div>

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">© Международный конкурс
        "Global Construction Cup" 2020</div>
        <div className="footer-right">Все права защищены</div>
      </div>
    </footer>
    </>
  );
};

export default Footer;

