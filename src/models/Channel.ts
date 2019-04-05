import ChannelParser from '../parsers/ChannelParser';

class Channel {
	private data: any;

	async parse(channelPageContent: string) {
		const parser = await new ChannelParser();
		const data = await parser.parse(channelPageContent);
		this.data = await data;
	}
}

export default Channel;
