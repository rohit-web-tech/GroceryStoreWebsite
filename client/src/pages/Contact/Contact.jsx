import React from 'react' ;
import TopBanner from '../../components/topBanner/TopBanner';
import Location from './location/Location'
import ContactForm from './contactForm/ContactForm';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import bg from '../../assets/contact-us.jpg'

export default function ContactPage() {
  return (
    <>
    <TopBanner bg={bg} title="#let's_talk" subtitle="Leave A Message.We love to hear from you!"/>
    <ContentWrapper>
    <Location />
    <ContactForm />
    </ContentWrapper>
    </>
  )
}