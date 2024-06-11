import React from 'react'

function Contact() {
    return (
        <div className="cv">
          <br /><br />
          <h1>İletişim</h1>
          <p>feciletisim@gmail.com</p>
          <br />
          <p>İstiklal Mahallesi Safrancık Sokak No: 8/A Serdivan / SAKARYA Serdivan</p>
          <h2>Bağlantılarım</h2>
          <hr />
          <div className="aboutLinks">
            <a
              className="indexBtn"
              href="https://github.com/fecteknofest"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="indexBtn"
              href="https://www.linkedin.com/company/sakarya-gm-fec/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="indexBtn"
              href="https://www.instagram.com/sakaryagmfec?utm_source=qr&igshid=ZGh4bGloaW1weG8w"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <br /><br />
          </div>
        </div>
      );
}

export default Contact