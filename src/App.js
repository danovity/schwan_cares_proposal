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

    console.log("firstApiCall is,", firstApiCall);
    console.log("secondApiCall is,", secondApiCall);

    const campaignObject = firstApiCall.data.campaigns[1];
    console.log("campaignObject is,", campaignObject);

    const {
      bundles,
      categories: featuredProducts,
      supporters
    } = campaignObject;

    const appendToFeaturedProducts = secondApiCall.data.categories.forEach(
      item => {
        featuredProducts.push(item);
      }
    );
    console.log("bundles is,", bundles);
    console.log("featuredproducts is,", featuredProducts);
    this.setState({ featuredProducts, bundles, supporters });
  }

  render() {
    const { featuredProducts, bundles, supporters } = this.state;

    return (
      <div className="App">
        <NavBar />
        <Banner supporters={supporters} />
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
