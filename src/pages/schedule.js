import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./timeline.css"
const Timeline = () => (
  <Layout>
    <main>
      <ul className="timeline">
        {/* Item 1 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Enugu Wakekeep</span>
              <span className="time-wrapper">
                <span className="time">12th March, 2021</span>
              </span>
            </div>
            <div className="desc">
              Enugu wakekeep with Mass 5pm 12th February at her Enugu residence,
              18 Presidential road Enugu.
            </div>
          </div>
        </li>
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Vigil</span>
              <span className="time-wrapper">
                <span className="time">17th March, 2021</span>
              </span>
            </div>
            <div className="desc">
              5pm with a mass by His Lordship most Rev Dr. Okpalaeke, Catholic
              bishop of Awka, at chief Francis Ilo's
            </div>
          </div>
        </li>

        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Stop-over</span>
              <span className="time-wrapper">
                <span className="time">18th March, 2021</span>
              </span>
            </div>
            <div className="desc">
              Brief stopover at her father's compound 6.45am 18th March 2021
              short lying in state at Lt.Josiah Obiajulu's compound, Umuabani
              village, Neni.
            </div>
          </div>
        </li>
        {/* Item 2 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Lying in state</span>
              <span className="time-wrapper">
                <span className="time">18th March, 2021</span>
              </span>
            </div>
            <div className="desc">
              Lying in state 8.00am 18th March, 2021 in her husbands compound
              Ezioko village, Oko
            </div>
          </div>
        </li>

        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Requiem mass</span>
              <span className="time-wrapper">
                <span className="time">18th March, 2021</span>
              </span>
            </div>
            <div className="desc">
              10am Burial Mass by His Lordship Most Rev Doc. Okpalaibe, Catholic
              Bishop of Ekwulobia Diocese
            </div>
          </div>
        </li>
        {/* Item 3 */}
        <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Condolence</span>
              <span className="time-wrapper">
                <span className="time">12pm 20th March, 2021</span>
              </span>
            </div>
            <div className="desc">Condolence visits from inlaws</div>
          </div>
        </li>
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Thanksgiving</span>
              <span className="time-wrapper">
                <span className="time">21st March, 2021</span>
              </span>
            </div>
            <div className="desc">
              10am Thanksgiving mass at st Peter's catholic church
            </div>
          </div>
        </li>
      </ul>
    </main>
  </Layout>
)

export default Timeline
