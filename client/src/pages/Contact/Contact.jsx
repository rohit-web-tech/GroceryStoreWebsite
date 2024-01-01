import React, { useState, useEffect } from "react";
import TopBanner from "../../components/topBanner/TopBanner";
import Location from "./location/Location";
import ContactForm from "./contactForm/ContactForm";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import bg from "../../assets/contact-us.jpg";
import Spinner from "../../components/spinner/Spinner";

export default function ContactPage() {
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
            title="#let's_talk"
            subtitle="Leave A Message.We love to hear from you!"
          />
          <ContentWrapper>
            <Location />
            <ContactForm />
          </ContentWrapper>
        </>
      )}
    </div>
  );
}
