import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import SectionHeader from "./Components/SectionHeader";
import Banner from "./Container/Banner/Banner";
import SeasonalBundles from "./Container/SeasonalBundles/SeasonalBundles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner />
        <SectionHeader />
        <SeasonalBundles />
      </div>
    );
  }
}

export default App;
