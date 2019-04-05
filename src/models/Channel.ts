import ChannelParser from '../parsers/ChannelParser';

class Channel {
  public async parse(channelPageContent: string) {
    const parser = await new ChannelParser();
    return await parser.parse(channelPageContent);
  }
}

export default Channel;
