export interface WebsiteConfig {
  title: string;
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
  title: 'Ghost',
  description: 'The professional publishing platform',
  coverImage: 'img/blog-cover.png',
  logo: 'img/ghost-logo.png',
  lang: 'en',
  siteUrl: 'https://gatsby-casper.netlify.com',
  youtube: 'https://www.facebook.com/ghost',
  twitter: 'https://twitter.com/tryghost',
  showSubscribe: true,
  mailchimpAction: 'https://twitter.us19.list-manage.com/subscribe/post?u=a89b6987ac248c81b0b7f3a0f&amp;id=7d777b7d75',
  mailchimpName: 'b_a89b6987ac248c81b0b7f3a0f_7d777b7d75',
  mailchimpEmailFieldName: 'MERGE0',
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on Gatsby Casper',
};

export default config;
