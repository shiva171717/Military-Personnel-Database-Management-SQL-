import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to ShoppingCart, your number one source for all things your niche, e.g., fashion, electronics, home goods. We're dedicated to giving you the very best of online shopping, with a focus on dependability, customer service, and uniqueness.

Founded in 2024 by Chilari Shiva Charan, ShoppingCart has come a long way from its beginnings in Nirmal.
</p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
