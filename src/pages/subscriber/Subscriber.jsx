import React from 'react'
import "./Subs.css"

function Subscriber() {
    return (
        <main className="content">
          <div className="cv">
            <br /><br />
            <h1 className="MainHead">Destekçilerimiz</h1>
            <br />
            <ul>
              <li>
                <p className="head">Takım Destekçimiz</p>
              </li>
              <li>
                <p className="head">Yüksek Destekçilerimiz</p>
              </li>
              <li>
                <p className="head">İleri Destekçilerimi</p>
              </li>
              <li>
                <p className="head">Orta Destekçilerimi</p>
              </li>
              <li>
                <p className="head">Başlangıç Destekçilerimi</p>
              </li>
            </ul>
            <br />
          </div>
        </main>
      );
}

export default Subscriber