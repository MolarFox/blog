export interface WebsiteConfig {
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
   * Blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * Full url, no username
   */
  github?: string;
  /**
   * Full url, no username
   */
  youtube?: string;
  /**
   * Full url, no username
   */
  twitter?: string;
  /**
   * Hide or show all email subscribe boxes
   */
  showSubscribe: boolean;
  /**
   * Create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * This is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * Name and id of the mailchimp email field
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
}

const config: WebsiteConfig = {
  title: 'Molar\'s Blog',
  authorName: 'MolarFox',
  description: 'If it\'s on fire, we\'re on the right track!',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/molarfox-logo.png', // TODO
  lang: 'en',
  siteUrl: 'https://blog.molarfox.io',
  github: 'https://github.com/MolarFox',
  youtube: 'https://www.youtube.com/channel/UC0_Z_l0ae4x1sntIgAeMepA',
  twitter: 'https://twitter.com/MolarFox',
  showSubscribe: false,
  mailchimpAction: 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'didn\'t start the fire (it was always burnin\' ♪)',
};

export default config;
