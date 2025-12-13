export type WebsiteConfig = {
  title: string;
  authorName: string;
  description: string;
  coverImage?: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  github?: string;
  /**
   * full url, no username
   */
  youtube?: string;
  /**
   * Full url, no username
   */
  twitter?: string;
  /**
   * Full url, no username
   */
  mastodon?: string;
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
  /**
   * Shows all post tags in main index view and post view if true
   * Otherwise only shows first (primary) tag
   */
  showAllTags: boolean;
};

const config: WebsiteConfig = {
  title: 'Molar\'s Blog',
  authorName: 'MolarFox',
  description: 'Molar\'s Blog!',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/molarfox-logo.png',
  lang: 'en',
  siteUrl: 'https://blog.molarfox.io',
  github: 'https://github.com/MolarFox',
  youtube: 'https://www.youtube.com/channel/UC0_Z_l0ae4x1sntIgAeMepA',
  twitter: 'https://twitter.com/MolarFox',
  mastodon: 'https://furry.engineer/@MolarFox',
  showSubscribe: false,
  mailchimpAction: '',
  mailchimpName: '',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: '♪',
  showAllTags: true,
};

export default config;
