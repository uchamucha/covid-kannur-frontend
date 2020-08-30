import React, { useEffect } from "react";
import { connect } from "react-redux";

import "./overview.css";
import { getOverview } from "../actions";

const Overview = (props) => {
  const { overview, getOverview } = props;
  useEffect(() => {
    getOverview();
  }, [getOverview]);

  const getDelta = (delta) => {
    if (delta !== 0) {
      return `↑${delta}`;
    }
  };

  if (overview.active)
    return (
      <div>
        <h3 className="title">
          COVID<span>19</span> — Kannur
        </h3>
        <div className="overview-top">
          <div className="active">
            Active
            <div>
              {" "}
              <span>{overview.active}</span>
            </div>
          </div>
          <div className="confirmed">
            <div>
              <div>Confirmed</div>
              {overview.confirmed}{" "}
              <span className="bad-delta">
                {getDelta(overview.delta.confirmed)}
              </span>
            </div>
          </div>
          <div className="deceased">
            Deceased
            <div>
              {overview.deceased}{" "}
              <span className="bad-delta">
                {getDelta(overview.delta.deceased)}
              </span>
            </div>
          </div>
          <div className="recovered">
            Recovered
            <div>
              {overview.recovered}{" "}
              <span className="good-delta">
                {getDelta(overview.delta.recovered)}
              </span>
            </div>
          </div>
          {/* <div>Confirmed Today: {overview.delta.confirmed}</div>
        <div>Deceased Today: {overview.delta.deceased}</div>
        <div>Recovered Today: {overview.delta.recovered}</div> */}
        </div>
      </div>
    );
  else return <div>Loading</div>;
};

const mapStateToProps = (state) => {
  //   console.log(state);
  return { overview: state.overview };
};

export default connect(mapStateToProps, {
  getOverview: getOverview,
})(Overview);
