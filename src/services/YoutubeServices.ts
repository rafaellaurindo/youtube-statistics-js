import axios from 'axios';

class YoutubeServices {
	public static getBaseUrl(): string {
		return YoutubeServices.BASE_URL;
	}
	private static BASE_URL: string = 'https://www.youtube.com/';

	private headers: any = {
		'Accept-Language': 'en',
		'User-Agent':
			'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36'
	};

	public getChannel(channelId: string): Promise<any> {
		return axios.get(`${YoutubeServices.getBaseUrl()}/channel/${channelId}/about`, { headers: this.headers });
	}
}

export default YoutubeServices;
