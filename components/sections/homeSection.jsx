import React from "react";
import { PrismicNextLink } from '@prismicio/next'
import Image from "next/image"


const HomeSection = props => {

  const { backgroundUrl, topText, bottomText, logo, imageWidth, imageHeight, whatsappLogo, whatsappLink} = props

  return (
    <div id="home" className="bg-cover bg-center h-screen bg-top" style={{ backgroundImage: `url(${backgroundUrl}`}}>
      <div className="flex flex-col w-full text-white justify-center h-screen">
        <div className="xl:mr-10 mr-2 xl:translate-y-0 -translate-y-16">
          <PrismicNextLink href="/#home" className="float-right">
              <Image className="" src={logo} width={imageWidth} height={imageHeight} alt="VICOSG-Logo"/>
          </PrismicNextLink>
        </div>
          <div className="xl:translate-y-0 translate-y-32 mr-2 text-xl text-right xl:mr-10 font-lato-black">
              {topText}
          </div>
          <div className="xl:translate-y-0 translate-y-32 xl:mr-10 mr-2 pr-2 pl-2 h-12 xl:text-6xl text-5xl bg-[#ffb300] ml-auto text-right self-center font-extrabold hover:scale-110 transition duration-500">
            <div className="-translate-y-1 font-lato-black text-right">
              <PrismicNextLink href="/contact" className="float-right">
                {bottomText}
              </PrismicNextLink>
            </div>
          </div>
          <div className="ml-auto pr-10 self-center xl:translate-y-0 translate-y-32">
            <PrismicNextLink href={`${whatsappLink.url}`}>
                <Image 
                    className="mt-5 mr-1 ml-1 hover:scale-110 transition duration-500 cursor-pointer object-cover"
                    src={whatsappLogo.url}
                    alt={whatsappLogo.alt} 
                    width={50}
                    height={50}
                  />
              </PrismicNextLink>
          </div>
      </div>
    </div>
  );
}

export default HomeSection;