import React from "react";

import ReactMapGL, { Marker, Source, Layer, Popup } from "react-map-gl";
import { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./mapbox-gl.css";
import { getHotspots } from "../actions";
import kannurJSON from "../data/kannur.json";

const Map = (props) => {
  //initialize viewport state
  const [viewPort, setViewPort] = useState({
    latitude: 11.9745,
    longitude: 75.5499,
    width: `${
      window.innerWidth - 0.1 * window.innerWidth <= 900
        ? window.innerWidth - 0.1 * window.innerWidth
        : 900
    }px`,
    height: "45vh",
    zoom: 9.7,
  });
  //initialize hover state
  const [hover, setHover] = useState(null);

  //destructure action and state data from props
  const { getHotspots, hotspots } = props;

  //fire getHotspots once after first render
  useEffect(() => {
    getHotspots();
  }, [getHotspots]);

  //make map responsive by listening for resize and updating state
  window.addEventListener("resize", (e) => {
    //adding delay to prevent seViewPort rampage
    setTimeout(() => {
      let inHeight = e.target.innerHeight;
      let inWidth = e.target.innerWidth;
      setViewPort({
        latitude: 11.9745,
        longitude: 75.5499,
        width: `${
          inWidth - 0.1 * inWidth <= 900 ? inWidth - 0.1 * inWidth : 900
        }px`,
        height: `${0.45 * inHeight}px`,
        zoom: 9.7,
      });
    }, 2);
  });

  return (
    <div>
      <h3 className="map-title">Containment Zones</h3>

      <div className="map-container">
        <ReactMapGL
          className="map"
          {...viewPort}
          mapboxApiAccessToken="pk.eyJ1IjoidXNhbWF0aHBjIiwiYSI6ImNrZHhpdG0ydDBwNDAyc294a2NkNWlqNGsifQ.c2-tAWSpTk3X8wJ151hkKg"
          mapStyle="mapbox://styles/usamathpc/cke75rexm3o0y19mih0ludcn7"
          onViewportChange={(viewPort) => {
            setViewPort(viewPort);
          }}
        >
          <Source type="geojson" data={kannurJSON}>
            {/* <Layer
            id="maplayer"
            type="line"
            paint={{ "line-color": "#ffffff" }}
          ></Layer> */}
          </Source>
          <Source type="geojson" data={hotspots}>
            <Layer
              id="maplayer2"
              type="line"
              paint={{
                "line-color": "#8B0000",
                "line-opacity": 0.2,
                "line-width": 1.5,
              }}
            ></Layer>
            <Layer
              id="maplayer3"
              type="fill"
              paint={{ "fill-color": "#8B0000", "fill-opacity": 0.15 }}
            ></Layer>
          </Source>
          {hotspots.features.map((obj) => {
            if (
              obj.properties.centroid.long &&
              obj.properties.centroid.lat &&
              viewPort.zoom >= 9.5
            )
              return (
                <Marker
                  key={obj.properties.id}
                  longitude={obj.properties.centroid.long}
                  latitude={obj.properties.centroid.lat}
                >
                  <div
                    className="label"
                    onMouseEnter={(e) => {
                      e.preventDefault();
                      setHover(obj);
                    }}
                    onMouseLeave={(e) => {
                      e.preventDefault();
                      setHover(null);
                    }}
                  >
                    {obj.properties.label}
                  </div>
                </Marker>
              );
            else {
              return null;
            }
          })}
          {hover ? (
            <Popup
              closeButton={false}
              className={"popup"}
              longitude={hover.properties.centroid.long}
              latitude={hover.properties.centroid.lat}
            >
              <div>{hover.properties.label}</div>
              <div>{hover.properties.notes}</div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hotspots: state.hotspots,
  };
};

export default connect(mapStateToProps, {
  getHotspots: getHotspots,
})(Map);
