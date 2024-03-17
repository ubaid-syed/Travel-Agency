import React from "react";
import {
  Advertise,
  Banner,
  Explore,
  Footer,
  Hero,
  Memory,
  Navbar,
  Newslatter,
  Pricings,
} from "./Components";
import {
  hero,
  navlinks,
  memory,
  placesAPI,
  brands,
  pricingapi,
  bannerAPI,
  footerAPI,
} from "./data/travigodata";

const App = () => {
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore placesAPI={placesAPI} title="Explore The Beauty of World" />
      <Advertise brands={brands} />
      <Pricings pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Newslatter />
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
