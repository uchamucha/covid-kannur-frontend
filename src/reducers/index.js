import { combineReducers } from "redux";
import kannur from "../data/kannur.json";

//hotspots reducer
const hotspotsReducer = (state = kannur, action) => {
  switch (action.type) {
    case "HOTSPOTS_DATA":
      return action.payload;
    default:
      return state;
  }
};

//containment zones reducer
const contZonesReducer = (state = [], action) => {
  switch (action.type) {
    case "CONTAINMENT_ZONES":
      return action.payload;
    default:
      return state;
  }
};
//ovreview reducer
const overviewReducer = (state = [], action) => {
  switch (action.type) {
    case "OVERVIEW":
      return action.payload;
    default:
      return state;
  }
};

//details reducer
const detailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "DETAILS":
      let labels = [],
        confirmedData = [],
        recoveredData = [],
        deceasedData = [],
        activeData = [];
      action.payload.forEach((obj) => {
        labels.push(obj.date);
        confirmedData.push(obj.Kannur.total.confirmed);
        recoveredData.push(obj.Kannur.total.recovered);
        deceasedData.push(obj.Kannur.total.deceased);
        activeData.push(
          obj.Kannur.total.confirmed -
            obj.Kannur.total.recovered -
            obj.Kannur.total.deceased +
            2
        );
      });
      let chartData = {
        labels: labels,
        datasets: [
          {
            label: "conf",
            data: confirmedData,
            borderColor: "yellow",
            pointRadius: 0,
          },
          {
            label: "rec",
            data: recoveredData,
            borderColor: "green",
            pointRadius: 0,
          },
          {
            label: "dec",
            data: deceasedData,
            borderColor: "blue",
            pointRadius: 0,
          },
          {
            label: "act",
            data: activeData,
            borderColor: "red",
            pointRadius: 0,
          },
        ],
      };
      return chartData;
    default:
      return state;
  }
};

export default combineReducers({
  hotspots: hotspotsReducer,
  contZones: contZonesReducer,
  overview: overviewReducer,
  details: detailsReducer,
});
