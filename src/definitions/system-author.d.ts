/**
 * System creator data. In addition to the name, other fields may optionally be added to provide
 * email, website, social media links, et cetera.
 * Source: https://foundryvtt.com/article/system-development/
 */
export interface SystemAuthor {
  // The name of the author.
  name: string;

  // Optional data points of any name system authors may wish to provide.
  [key: string]: string;
}
