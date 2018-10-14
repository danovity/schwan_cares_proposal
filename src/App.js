import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import SectionHeader from "./Components/SectionHeader";
import Banner from "./Container/Banner/Banner";
import SeasonalBundles from "./Container/SeasonalBundles/SeasonalBundles";
import FeaturedProducts from "./Container/FeaturedProducts/FeaturedProducts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Banner />
        <SectionHeader />
        <SeasonalBundles />
        <SectionHeader />
        <FeaturedProducts />
      </div>
    );
  }
}

export default App;
