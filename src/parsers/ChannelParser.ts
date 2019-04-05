import * as cheerio from 'cheerio';

class ChannelParser {
	private selectors: any = {
		description: '.about-description',
		image: '.channel-header-profile-image',
		subscriptionsTotal: '.subscribed',
		title: '.qualified-channel-title-text',
		viewsTotal: '.subscribed'
	};

	async parse(pageContent: string): Promise<any> {
		const $ = await cheerio.load(pageContent);
		return {
			description: await this.getTextFromElement($(this.selectors.description)),
			image: await this.getAttributeFromElement($(this.selectors.image), 'src'),
			subscriptionsTotal: await this.getTextFromElement($(this.selectors.subscriptionsTotal)),
			title: await this.getTextFromElement($(this.selectors.title))
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
