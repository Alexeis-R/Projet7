import React from "react";
import Layout from "../../components/Layout";
import Banner from "../../components/Banner";
import banner2 from "../../../public/banner_about.jpg";

function About() {
  return (
    <Layout>
      <main className="main_container">
        <Banner bannerImg={banner2} />
      </main>
    </Layout>
  );
}

export default About;
