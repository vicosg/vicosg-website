import React, { useState, useEffect } from "react";
import Image from "next/image"
import { useRouter } from 'next/router';
import { PrismicNextLink } from '@prismicio/next'


// This NavBar component is built with Prismic Type Information
// EXAMPLE -> https://flowbite.com/docs/components/navbar/

const NavBar = props => {

  const { content, logo, imageHeight, imageWidth, locales, actualLocale, customText, sloganText} = props

  let navBarLinks = []
  const [isOpen, setOpen] = useState(true);
  const menuFlip = () => {setOpen(!isOpen)};
  const router = useRouter()

// Uso un UseEffect para manejar la accón de que se cierre el menú automaticamente cuándo se hace alguna clase de scrolling.
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setOpen(true);
      }, );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (content !== undefined) {
    content.forEach((element, index, array)  => {

      // Este if se mantiene para usar la edición y customización del último elemento de la Navbar. 
      if(index  === (array.length - 1)) {
        navBarLinks.push(
          <li className="" key = {index}>
              <PrismicNextLink href={`${element.link}`}>
                <div className="text-3xl xl:text-white text-black hover:text-blue-100 font-semibold" >{element.label}</div>
              </PrismicNextLink>
          </li>
        )
      }
      else {
        navBarLinks.push(
          <li className="" key = {index}>
              <PrismicNextLink href={`/${element.link}`}>
                <div className="text-3xl xl:text-white text-black hover:text-blue-100 font-semibold">{element.label}</div>
              </PrismicNextLink>
          </li>
        )
      }
    }
    )
  }

  return (
    <div className="flex flex-col">
      <div className="hidden xl:block bg-white w-full xl:fixed z-50 h-20">
        <div className="flex flex-row justify-between">
          <div className="translate-x-32 -translate-y-8">
            <PrismicNextLink href="/#home" className="">
              <Image className="scale-150" src={logo} width={imageWidth} height={imageHeight} alt="GoEZ-Rentals-Logo"/>
            </PrismicNextLink>
          </div>
          <div className="">
            <div className="flex bg-black padding paralelograma mt-5 -ml-20 text-white"></div>
            <div className="-translate-y-7 -translate-x-20 ml-5 text-white font-bold font-trebuchet-bold-italic">
                {sloganText}
            </div>
          </div>
        </div>
      </div>
      <div>
        <nav className="xl:mt-20 fixed flex inset-x-0 px-2 sm:px-4 xl:py-1 xl:bg-[#e56608ff] bg-white w-full xl:h-12 z-50">
          <div className="flex ml-3">
            <PrismicNextLink href="/#home" className="xl:hidden">
              <Image className="scale-150" src={logo} width={imageWidth} height={imageHeight} alt="GoEZ-Logo"/>
            </PrismicNextLink>
          </div>
          <div className="padding container flex flex-wrap xl:justify-center justify-end items-start mx-auto">
            <button aria-label="Flip" id="flipButton" onClick={menuFlip} type="button" className="inline-flex items-center translate-y-4 p-2 ml-3 text-sm text-gray-500 rounded-3xl xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className={`w-full xl:block xl:w-auto ${isOpen && "hidden"}`} id="mobile-menu">
              <ul className="xl:-translate-y-3 flex flex-col mt-4 xl:flex-row xl:space-x-8 xl:mt-0 xl:text-sm xl:font-medium items-end xl:items-start">
                {navBarLinks}
                <div className="pl-5 flex flex-row">
                {locales.map((locale) => (
                  <div className="" key={locale.id}>
                    <PrismicNextLink href={`/${locale.id}${router.pathname}`}>
                      <div className="shadow-white xl:text-white text-black hover:text-blue-100 font-semibold pl-1 pr-1">
                      {locale.id === 'en-us' ? 'English' : locale.id === 'es-co' ? 'Español' : locale.id}
                      </div>
                    </PrismicNextLink>
                  </div>
                ))}
              </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;