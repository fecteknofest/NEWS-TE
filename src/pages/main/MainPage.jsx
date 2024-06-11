import React from 'react'
import "./Main.css"

function MainPage() {
    return (
        <main className="content">
          <section className="index about" id="about">
            <div>
              <br />
              <h1 className="MainHead">Hakkımızda</h1>
              <br />
              <span>
                <h2>Merhaba, Biz Sakarya GM FEC</h2>
                <p>
                  Sakarya GM FEC, yaratıcı ve heyecan verici bir AGV projesi
                  üzerinde çalışan bir ekip.
                  <br />
                  <br />
                  Sakarya GM FEC olarak, sadece bir AGV projesi değil, aynı zamanda
                  bir aile ve takım ruhu taşıyorlar. Ayrıca, bu projeyi Gençlik ve
                  Spor Bakanlığı’na bağlı olan gençlik merkezi bünyesinde yarışmaya
                  katıldıklarını da belirtmek isteriz.
                  <br />
                  <br />
                </p>
                <h2>Biz Kimiz</h2>
                <hr />
                <ul>
                  <li>
                    <h3 className="head">Mustafa Biçer</h3>
                    <h3>Bilgisayar Mühendisi</h3>
                    <p>Takım Lideri, Yazılım, Elektronik</p>
                    <img className="Image" src="" alt="Mustafa Biçer" />
                    <h3 className="head">Harun Yeşilyurt</h3>
                    <h3>Bilgisayar Mühendisi</h3>
                    <p>Yazılım, Elektronik, Medya Sorumlusu</p>
                    <img className="Image" src="" alt="Harun Yeşilyurt" />
                    <h3 className="head">Hacı Hikmet Bozok</h3>
                    <h3>Mekatronik Mühendisi</h3>
                    <p>Yazılım, Elektronik, Mekanik</p>
                    <img className="Image" src="" alt="Hacı Hikmet Bozok" />
                    <h3 className="head">Kemal Emirhan Ceylan</h3>
                    <h3>Mekatronik Mühendisi</h3>
                    <p>Mekanik</p>
                    <img className="Image" src="" alt="Kemal Emirhan Ceylan" />
                    <h3 className="head">Haktan Serdar Genç</h3>
                    <h3>Mekatronik Mühendisi</h3>
                    <p>Yazılım, Elektronik</p>
                    <img className="Image" src="" alt="Haktan Serdar Genç" />
                  </li>
                </ul>
                <br />
                <br />
              </span>
            </div>
          </section>
        </main>
      );
}

export default MainPage