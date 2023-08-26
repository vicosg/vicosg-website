import React from "react";
import { PrismicNextLink } from '@prismicio/next'
import Image from "next/image"



const FooterSection = props => {

  const { backgroundUrl, topText, bottomText, sloganText, logo, imageWidth, imageHeight} = props

  return (
    <div id="footer" className="bg-cover bg-center h-auto bg-top bg-[#ffb300] pt-10 pb-10">
      <div className="flex flex-col w-full text-white justify-center">
            <div className="flex self-center">
                <PrismicNextLink href="/#home" className="">
                    <Image className="" src={logo} width={imageWidth} height={imageHeight} alt="VICOSG-Logo"/>
                </PrismicNextLink>
          </div>
          <div className="font-trebuchet-bold-italic text-md text-center">
              
© 2023 

Copyright. VICOSG Online Coaching. All rights reserved.

          </div>
          <div className="text-md text-center">
              Website Developed By
          </div>
          <div className="pr-5 pl-5 h-12 text-xl text-center self-center ">
            <div className="">
              GLUONICO
            </div>
          </div>
      </div>
    </div>
  );
}

export default FooterSection;