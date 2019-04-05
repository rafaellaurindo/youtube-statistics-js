import YoutubeServices from './services/YoutubeServices';
import Channel from './models/Channel';

class YoutubeStatistics {
	private youtubeServices: YoutubeServices;

	constructor() {
		this.youtubeServices = new YoutubeServices();
	}

	async getChannel(channelId: string) {
		const response = await this.youtubeServices.getChannel(channelId);
		const channel = await new Channel();
		const channelData = await channel.parse(response.data);

		return channelData;
	}
}

export default YoutubeStatistics;
