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
              <span className="flag">Wakekeep</span>
              <span className="time-wrapper">
                <span className="time">17th March, 2021</span>
              </span>
            </div>
            <div className="desc">
              5pm with a mass by His Lordship Most Rev. Doc Paulinues Ezeokafor,
              Catholic bishop of Awka, at chief Francis Ilo's
            </div>
          </div>
        </li>
        {/* Item 2 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Requiem mass</span>
              <span className="time-wrapper">
                <span className="time">18th March, 2021</span>
              </span>
            </div>
            <div className="desc">
              10am Burial Mass by His Lordship Most Rev Doc. Okpalaibe,
              Catholic Bishop of Ekwulobia Diocese
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
