import React from "react";
import "./meta.css";

const Meta = () => {
  return (
    <div className="meta">
      <div className="API">
        <div>API for Kannur</div>
        <ul>
          <li>
            hosted @{" "}
            <a target="blank" href="http://covid-kannur.herokuapp.com/">
              covid-kannur.herokuapp.com
            </a>
          </li>
        </ul>
      </div>
      <div className="attribution">
        <div>Attribution</div>

        <ul>
          Live Hotspots/Containment Zones:
          <li className="link">
            <a target="blank" href="https://github.com/c19k">
              C19K repo:{" "}
            </a>
            built and maintained be the amazing volunteers at{" "}
            <a target="blank" href="https://team.covid19kerala.info/">
              CODDK
            </a>{" "}
          </li>
        </ul>

        <ul>
          Infection summary and statistics:
          <li className="link">
            <a target="blank" href="https://api.covid19india.org/">
              COVID19INDIA API
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Meta;
