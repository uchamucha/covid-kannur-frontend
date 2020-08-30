import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Line, Chart } from "react-chartjs-2";
import { getDetails } from "../actions";

import "./graphs.css";

const Graphs = (props) => {
  const { details, getDetails } = props;
  useEffect(() => {
    getDetails();
  }, [getDetails]);

  Chart.defaults.global.defaultFontFamily = "'Raleway', sans-serif";

  if (details)
    return (
      <div className="graph-container">
        <h3 className="graph-title">Statistics</h3>
        <div className="graph">
          <Line
            data={details}
            options={{
              maintainAspectRatio: false,
              spanGaps: true,
              legend: {
                display: true,
                position: "top",
                align: "center",
                labels: {
                  boxWidth: 20,
                },
              },

              scales: {
                xAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      autoSkipPadding: 10,
                    },
                    display: true,
                    gridLines: {
                      display: true,
                      color: "#ffffff",
                      lineWidth: 0.1,
                    },
                  },
                ],
                yAxes: [
                  {
                    display: true,
                    gridLines: {
                      display: true,
                      color: "#ffffff",
                      lineWidth: 0.1,
                    },
                  },
                ],
              },
            }}
          />
        </div>
      </div>
    );
  else return <div className="loading">Loading</div>;
};

const mapStateToProps = (state) => {
  return {
    details: state.details,
  };
};

export default connect(mapStateToProps, {
  getDetails: getDetails,
})(Graphs);
