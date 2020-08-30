import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";

import { getContZones } from "../actions";
import "./containmentzones.css";

const ContainmentZones = (props) => {
  //run action upon first render. This will feed hotspot data to state.
  const { getContZones, contZones } = props;
  useEffect(() => {
    getContZones();
  }, [getContZones]);

  const renderedList = contZones.map((obj) => {
    return (
      <div key={obj.id}>{`${obj.label} -- ${obj.czones.replace(
        /Containment Zones:|Containment Zones: |Containment Zone:|Containment Zone: /gi,
        ""
      )}`}</div>
    );
  });

  return <div className="list">Containment Zones{renderedList}</div>;
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { contZones: state.contZones };
};

export default connect(mapStateToProps, {
  getContZones: getContZones,
})(ContainmentZones);
