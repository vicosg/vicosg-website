// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Contact Section documents
 */
interface ContactSectionDocumentData {
  /**
   * Name Question field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.name_question
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name_question: prismic.KeyTextField;

  /**
   * Lastname Question field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.lastname_question
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  lastname_question: prismic.KeyTextField;

  /**
   * Email Question field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.email_question
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_question: prismic.KeyTextField;

  /**
   * Telephone Question field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.telephone_question
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  telephone_question: prismic.KeyTextField;

  /**
   * Agree Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.agree_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  agree_text: prismic.KeyTextField;

  /**
   * Previous Button Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.previous_button_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  previous_button_text: prismic.KeyTextField;

  /**
   * Next Button Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.next_button_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  next_button_text: prismic.KeyTextField;

  /**
   * Submit Button Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.submit_button_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  submit_button_text: prismic.KeyTextField;

  /**
   * Final Message Text field in *Contact Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.final_message_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  final_message_text: prismic.KeyTextField;
}

/**
 * Contact Section document from Prismic
 *
 * - **API ID**: `contact_section`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactSectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ContactSectionDocumentData>,
    "contact_section",
    Lang
  >;

/**
 * Content for Footer Section documents
 */
interface FooterSectionDocumentData {
  /**
   * Text One field in *Footer Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.text_one
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text_one: prismic.KeyTextField;

  /**
   * Text Two field in *Footer Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.text_two
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text_two: prismic.KeyTextField;

  /**
   * Text Three field in *Footer Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.text_three
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text_three: prismic.KeyTextField;

  /**
   * Text Four field in *Footer Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.text_four
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text_four: prismic.KeyTextField;

  /**
   * Text Five field in *Footer Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.text_five
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text_five: prismic.KeyTextField;

  /**
   * Instagram Logo field in *Footer Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.instagram_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  instagram_logo: prismic.ImageField<never>;

  /**
   * Instagram Link field in *Footer Section*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.instagram_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram_link: prismic.LinkField;

  /**
   * Facebook Logo field in *Footer Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.facebook_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  facebook_logo: prismic.ImageField<never>;

  /**
   * Facebook Link field in *Footer Section*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.facebook_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  facebook_link: prismic.LinkField;

  /**
   * TikTok Logo field in *Footer Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.tiktok_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  tiktok_logo: prismic.ImageField<never>;

  /**
   * TikTok Link field in *Footer Section*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.tiktok_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  tiktok_link: prismic.LinkField;

  /**
   * Youtube Logo field in *Footer Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.youtube_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  youtube_logo: prismic.ImageField<never>;

  /**
   * YouTube Link field in *Footer Section*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.youtube_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  youtube_link: prismic.LinkField;

  /**
   * Whatsapp Logo field in *Footer Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.whatsapp_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  whatsapp_logo: prismic.ImageField<never>;

  /**
   * Whatsapp Link field in *Footer Section*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_section.whatsapp_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  whatsapp_link: prismic.LinkField;
}

/**
 * Footer Section document from Prismic
 *
 * - **API ID**: `footer_section`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterSectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<FooterSectionDocumentData>,
    "footer_section",
    Lang
  >;

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

  /**
   * Developer URL field in *Home Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_section.developer_url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  developer_url: prismic.KeyTextField;

  /**
   * Developer Phone field in *Home Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home_section.developer_phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  developer_phone: prismic.KeyTextField;
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
 * Content for MealPlan Section documents
 */
interface MealplanSectionDocumentData {
  /**
   * Background Image field in *MealPlan Section*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: mealplan_section.background_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Title Text field in *MealPlan Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: mealplan_section.title_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title_text: prismic.KeyTextField;

  /**
   * Body Text field in *MealPlan Section*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: mealplan_section.body_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  body_text: prismic.KeyTextField;
}

/**
 * MealPlan Section document from Prismic
 *
 * - **API ID**: `mealplan_section`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MealplanSectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<MealplanSectionDocumentData>,
    "mealplan_section",
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
  | ContactSectionDocument
  | FooterSectionDocument
  | GeneralInformationDocument
  | HomeSectionDocument
  | MealplanSectionDocument
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
      ContactSectionDocument,
      ContactSectionDocumentData,
      FooterSectionDocument,
      FooterSectionDocumentData,
      GeneralInformationDocument,
      GeneralInformationDocumentData,
      HomeSectionDocument,
      HomeSectionDocumentData,
      MealplanSectionDocument,
      MealplanSectionDocumentData,
      MenuDocument,
      MenuDocumentData,
      SeoDocument,
      SeoDocumentData,
      AllDocumentTypes,
    };
  }
}
