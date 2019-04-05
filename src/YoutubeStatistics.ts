import Channel from './models/Channel';
import YoutubeServices from './services/YoutubeServices';

class YoutubeStatistics {
  private youtubeServices: YoutubeServices;

  constructor() {
    this.youtubeServices = new YoutubeServices();
  }

  public async getChannel(channelId: string) {
    const response = await this.youtubeServices.getChannel(channelId);
    const channel = await new Channel();
    const channelData = await channel.parse(response.data);

    return channelData;
  }
}

export default YoutubeStatistics;
