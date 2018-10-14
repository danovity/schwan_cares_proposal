import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import SectionHeader from "./Components/SectionHeader";
import Banner from "./Container/Banner/Banner";
import SeasonalBundles from "./Container/SeasonalBundles/SeasonalBundles";
import FeaturedProducts from "./Container/FeaturedProducts/FeaturedProducts";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const firstApiCall = await axios.get(
      "https://s3.amazonaws.com/flipgive-developer-test/base.json"
    );

    const secondApiCall = await axios.get(
      "https://s3.amazonaws.com/flipgive-developer-test/page2.json"
    );

    const campaignDetails = firstApiCall.data.campaigns[1];

    const {
      bundles,
      categories: featuredProducts,
      supporters
    } = campaignDetails;

    secondApiCall.data.categories.forEach(item => {
      featuredProducts.push(item);
    });

    this.setState({ featuredProducts, bundles, supporters, campaignDetails });
  }

  render() {
    const {
      featuredProducts,
      bundles,
      supporters,
      campaignDetails
    } = this.state;

    return (
      <div className="App">
        <NavBar />
        <Banner supporters={supporters} campaignDetails={campaignDetails} />
        <SectionHeader
          header={"Seasonal Bundles"}
          subheader={"limited quantity"}
        />
        <SeasonalBundles bundles={bundles} />
        <SectionHeader
          header={"Featured Products"}
          subheader={"available any seasons"}
        />
        <FeaturedProducts featuredProducts={featuredProducts} />
      </div>
    );
  }
}

export default App;
