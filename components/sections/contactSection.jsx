import React from "react";
import { PrismicNextLink } from '@prismicio/next'
import Image from "next/image"
import TypeformContact from "../typeformContact"



const ContactSection = props => {

  const { backgroundUrl, topText, bottomText, sloganText, logo, imageWidth, imageHeight} = props

  return (
    <div id="contact" className="bg-cover bg-center h-screen bg-top" style={{ backgroundImage: `url(${backgroundUrl}`}}>
      <div className="flex flex-col w-full text-white justify-center h-screen">
        <TypeformContact/> 
      </div>
    </div>
  );
}

export default ContactSection;