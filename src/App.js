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

    const bundles = campaignObject.bundles;
    const featuredProducts = campaignObject.categories;

    const appendToFeaturedProducts = secondApiCall.data.categories.forEach(
      item => {
        featuredProducts.push(item);
      }
    );
    console.log("bundles is,", bundles);
    this.setState({ featuredProducts, bundles });
  }

  render() {
    const { featuredProducts, bundles } = this.state;

    return (
      <div className="App">
        <NavBar />
        <Banner />
        <SectionHeader />
        <SeasonalBundles bundles={bundles} />
        <SectionHeader />
        <FeaturedProducts featuredProducts={featuredProducts} />
      </div>
    );
  }
}

export default App;
