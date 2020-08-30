import axios from "axios";

//get hotspots data + geojson
export const getHotspots = () => {
  return async (dispatch) => {
    let response = await axios.get(
      "http://covid-kannur.herokuapp.com/API/hotspots"
    );

    dispatch({ type: "HOTSPOTS_DATA", payload: response.data });
  };
};

//get containment zones list
export const getContZones = () => {
  return async (dispatch) => {
    let response = await axios.get(
      "http://covid-kannur.herokuapp.com/API/lsglist"
    );

    dispatch({ type: "CONTAINMENT_ZONES", payload: response.data });
  };
};

//get overview
export const getOverview = () => {
  return async (dispatch) => {
    let response = await axios.get(
      "http://covid-kannur.herokuapp.com/API/overview"
    );

    dispatch({ type: "OVERVIEW", payload: response.data });
  };
};

//get details

export const getDetails = () => {
  return async (dispatch) => {
    let response = await axios.get(
      "http://covid-kannur.herokuapp.com/API/details"
    );

    dispatch({ type: "DETAILS", payload: response.data });
  };
};
