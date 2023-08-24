// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for General Information documents
 */
interface GeneralInformationDocumentData {
  /**
   * Small Logo field in *General Information*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: general_information.small_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  small_logo: prismic.ImageField<never>;

  /**
   * Small Logo Width field in *General Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: general_information.small_logo_width
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  small_logo_width: prismic.KeyTextField;

  /**
   * Small Logo Height field in *General Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: general_information.small_logo_height
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  small_logo_height: prismic.KeyTextField;
}

/**
 * General Information document from Prismic
 *
 * - **API ID**: `general_information`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GeneralInformationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<GeneralInformationDocumentData>,
    "general_information",
    Lang
  >;

/**
 * Content for Home Section documents
 */
interface HomeSectionDocumentData {
  /**
   * Background Image field in *Home Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home_section.background_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Top Text field in *Home Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_section.top_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  top_text: prismic.KeyTextField;

  /**
   * Bottom Text field in *Home Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_section.bottom_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bottom_text: prismic.KeyTextField;

  /**
   * Slogan Text field in *Home Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_section.slogan_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slogan_text: prismic.KeyTextField;
}

/**
 * Home Section document from Prismic
 *
 * - **API ID**: `home_section`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeSectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomeSectionDocumentData>,
    "home_section",
    Lang
  >;

/**
 * Item in *Menu → Menu Links*
 */
export interface MenuDocumentDataMenuLinksItem {
  /**
   * Link field in *Menu → Menu Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;

  /**
   * Label field in *Menu → Menu Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Menu documents
 */
interface MenuDocumentData {
  /**
   * Menu Links field in *Menu*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: menu.menu_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_links: prismic.GroupField<Simplify<MenuDocumentDataMenuLinksItem>>;
}

/**
 * Menu document from Prismic
 *
 * - **API ID**: `menu`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MenuDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<MenuDocumentData>, "menu", Lang>;

/**
 * Content for SEO documents
 */
interface SeoDocumentData {
  /**
   * Title field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Default Description field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  default_description: prismic.KeyTextField;

  /**
   * Default Keywords field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_keywords
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  default_keywords: prismic.KeyTextField;

  /**
   * Default URL field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  default_url: prismic.KeyTextField;

  /**
   * Default Image field in *SEO*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: seo.default_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  default_image: prismic.KeyTextField;
}

/**
 * SEO document from Prismic
 *
 * - **API ID**: `seo`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SeoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<SeoDocumentData>, "seo", Lang>;

export type AllDocumentTypes =
  | GeneralInformationDocument
  | HomeSectionDocument
  | MenuDocument
  | SeoDocument;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      GeneralInformationDocument,
      GeneralInformationDocumentData,
      HomeSectionDocument,
      HomeSectionDocumentData,
      MenuDocument,
      MenuDocumentData,
      SeoDocument,
      SeoDocumentData,
      AllDocumentTypes,
    };
  }
}
