import * as React from "react";
import Prismic from 'prismic-javascript'
import { PrismicClient } from '../prismic-configuration'
import { getLocales } from "../lib/getLocales";
import { createClient } from "../prismicio"
import FooterSection from "../components/sections/footerSection";

// Components Importations Section 
import Head from "../components/head";
import NavBar from "../components/navbar";
import ContactSection from "../components/sections/contactSection";


const Contact = (props) => {
  const { homeContent, contactContent, actualLocale, locales, seo, generalInformation, menuContent, footerContent } = props;

  return (
    <div className="main overflow-x-hidden">
          <Head
            title={seo.data.title}
            description={seo.data.default_description}
            keywords={seo.data.default_keywords}
            url={seo.data.default_url}
            ogImage={seo.data.default_image}
          />
          <NavBar
              content={menuContent.data.menu_links} 
              logo={generalInformation.data.small_logo.url}
              imageWidth={generalInformation.data.small_logo_width}
              imageHeight={generalInformation.data.small_logo_height}
              locales={locales}
              actualLocale={actualLocale}
              sloganText={homeContent.data.slogan_text}
            />
            <ContactSection
              backgroundUrl={homeContent.data.background_image.url}
              ContactContent={contactContent}
            />
            <FooterSection
              content={footerContent.data}
              logo={generalInformation.data.small_logo.url}
              imageWidth={generalInformation.data.small_logo_width}
              imageHeight={generalInformation.data.small_logo_height}/>
    </div>
  );
};

const getStaticProps = async ({ params, locale, previewData }) => {
    const client = createClient({ previewData });
    const locales = await getLocales(client)
    return {
        props: {
          seo: await getPrismicData('seo', locale),
          generalInformation: await getPrismicData('general_information', locale),
          menuContent: await getPrismicData('menu', locale),
          homeContent: await getPrismicData('home_section',locale),
          contactContent: await getPrismicData('contact_section',locale),
          footerContent: await getPrismicData('footer_section',locale),

          locales: locales,
          actualLocale: locale
        }
    }
  }
  
  // Wrapper for prismic functions
  const getPrismicData = async (name, lang) => {
    const prismicAnswer = await PrismicClient().query(  
      Prismic.Predicates.at('document.type', name),{ lang })
  
    // Get first doc of this type (there should be 1 doc per type)
    const doc = prismicAnswer.results[0]
    return doc
  }
  
  const getPrismicCustomTypeData = async (name, lang) => {
    const prismicAnswer = await PrismicClient().query(  
      Prismic.Predicates.at('document.type', name), { lang })
  
    // Get all docs of this type (there should many docs per type)
    const CustomTypeDoc = prismicAnswer.results
    return CustomTypeDoc
  }
  
export default Contact
export { getStaticProps }