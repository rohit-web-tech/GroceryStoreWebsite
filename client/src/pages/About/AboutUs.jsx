import React, { useState, useEffect } from "react";
import AboutUsContent from "./AboutUsContent/AboutUsContent.jsx";
import TopBanner from "../../components/topBanner/TopBanner.jsx";
import Features from "../Home/features/Features.jsx";
import bg from "../../assets/about-us-banner.jpg";
import Spinner from "../../components/spinner/Spinner.jsx";
const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div id={loading && "loading"}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <TopBanner
            bg={bg}
            title="#know_us"
            subtitle="Know who we are and why choose us?"
          />
          <AboutUsContent />
          <Features title="Why Choose Us?" />
        </>
      )}
    </div>
  );
};

export default AboutUs;
