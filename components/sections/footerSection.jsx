import React from "react";
import { PrismicNextLink } from '@prismicio/next'
import Image from "next/image"
import { text } from "@fortawesome/fontawesome-svg-core";



const FooterSection = props => {

  const { content, logo, imageWidth, imageHeight} = props
  return (
    <div id="footer" className="bg-cover bg-center h-auto bg-top bg-[#ffb300] pt-10 pb-10">
      <div className="flex flex-col w-full text-white justify-center">
            <div className="flex self-center">
                <PrismicNextLink href="/#home" className="">
                    <Image className="" src={logo} width={imageWidth} height={imageHeight} alt="VICOSG-Logo"/>
                </PrismicNextLink>
          </div>
          <div className="flex flex-row justify-center text-white font-semibold mb-5">
            <PrismicNextLink href={`${content.instagram_link.url}`}>
              <Image 
                  className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
                  src={content.instagram_logo.url}
                  alt={content.instagram_logo.alt} 
                  width={50}
                  height={50}
                />
            </PrismicNextLink>
            <PrismicNextLink href={`${content.facebook_link.url}`}>
              <Image 
                className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src={content.facebook_logo.url}
                alt={content.facebook_logo.alt} 
                width={50}
                height={50}
              />
            </PrismicNextLink>
            <PrismicNextLink href={`${content.tiktok_link.url}`}>
              <Image 
                className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src={content.tiktok_logo.url}
                alt={content.tiktok_logo.alt} 
                width={50}
                height={50}
              />
            </PrismicNextLink>
            <PrismicNextLink href={`${content.youtube_link.url}`}>
              <Image 
                className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src={content.youtube_logo.url}
                alt={content.youtube_logo.alt} 
                width={50}
                height={50}
              />
            </PrismicNextLink>
            <PrismicNextLink href={`${content.whatsapp_link.url}`}>
              <Image 
                className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src={content.whatsapp_logo.url}
                alt={content.whatsapp_logo.alt} 
                width={50}
                height={50}
              />
            </PrismicNextLink>
        </div>
        <div>
          <div className="font-trebuchet-bold-italic text-md text-center self-center">
            © 2024 Copyright. {content.text_one}{content.text_two}
          </div>
          <div className="text-md text-center">
            {content.text_three}
          </div>
          <div className="pr-5 pl-5 h-12 text-xl text-center self-center flex flex-row justify-center">
            <div className="mr-5 text-center self-center">
              <a href="https://gluonico.com/" target="_blank">{content.text_four}</a>
            </div>
            <div className="text-center self-center">
              <a href="tel:+573003943675">+573003943675</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;