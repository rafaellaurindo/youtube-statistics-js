import axios from 'axios';

class YoutubeServices {
	private BASE_URL: string = 'https://www.youtube.com/';

	getChannel(channelId: string): any {
		return axios.get(`${this.BASE_URL}/channel/${channelId}/about`);
	}
}

export default YoutubeServices;
