import React from "react";
import Map from "./Map";
import Overview from "./Overview";
import Graphs from "./Graphs";
import Meta from "./Meta";
// import ContainmentZones from "./ContainmentZones";

class App extends React.Component {
  render() {
    return (
      <div>
        <Overview />
        <Map />
        <Graphs />
        {/* <ContainmentZones /> */}
        <Meta />
      </div>
    );
  }
}

export default App;
