import axios from 'axios';

class YoutubeServices {
	private BASE_URL: string = 'https://www.youtube.com/';
	private headers: any = {
		'User-Agent':
			'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
		'Accept-Language': 'en'
	};

	getChannel(channelId: string): Promise<any> {
		return axios.get(`${this.BASE_URL}/channel/${channelId}/about`, { headers: this.headers });
	}
}

export default YoutubeServices;
