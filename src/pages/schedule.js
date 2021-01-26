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
              <span className="flag">Vigil Mass</span>
              <span className="time-wrapper">
                <span className="time">17th March, 2021</span>
              </span>
            </div>
            <div className="desc">
              4pm Vigil mass at chief Francis ilo's compound Ezioko village Oko
            </div>
          </div>
        </li>
        {/* Item 2 */}
        <li>
          <div className="direction-l">
            <div className="flag-wrapper">
              <span className="flag">Requiem mass</span>
              <span className="time-wrapper">
                <span className="time">10am 18th March, 2021</span>
              </span>
            </div>
            <div className="desc">
              Requiem mass at peter's catholic church Oko. Intermemt follows
              immediately after mass at her husband's compound. Reception and
              entertainment of guest follows too as same venue
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
            <div className="desc">
                Condolence visits from inlaws
            </div>
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
