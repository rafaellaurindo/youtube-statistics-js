import * as cheerio from 'cheerio';
import YoutubeServices from '../services/YoutubeServices';

class ChannelParser {
  private selectors: any = {
    description: '.about-description',
    fullUrl: 'link[rel="canonical"]',
    image: '.channel-header-profile-image',
    subscriptionsTotal: '.subscribed',
    title: '.qualified-channel-title-text',
    viewsTotal: '.subscribed',
  };

  public async parse(pageContent: string): Promise<any> {
    const $ = await cheerio.load(pageContent);
    return {
      description: await this.getTextFromElement($(this.selectors.description)),
      fullUrl: await this.getAttributeFromElement($(this.selectors.fullUrl), 'href'),
      image: await this.getAttributeFromElement($(this.selectors.image), 'src'),
      subscriptionsTotal: await this.getTextFromElement($(this.selectors.subscriptionsTotal)),
      title: await this.getTextFromElement($(this.selectors.title)),
    };
  }

  private async getTextFromElement(element: any) {
    return await element.text().trim();
  }

  private async getAttributeFromElement(element: any, attribute: string) {
    return await element.attr(attribute).trim();
  }
}

export default ChannelParser;
