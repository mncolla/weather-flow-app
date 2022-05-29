import fetch from 'node-fetch';

export default class IpApi {
	_url = 'http://ip-api.com/json/';
	_ip;
	_request;

	constructor(request) {
		this._request = request;
	}

	setIP = ip => {
		this._ip = ip;
	};

	build = () => {
		const url =
			this._url + (this._ip ? this._ip : this.getClientIp(this._request));
		return url;
	};

	execute = async () => {
		this.setIP('186.57.172.141');
		const url = this.build();
		const res = await fetch(url);
		const data = res.json();
		return data;
	};

	getClientIp = () => {
		const request = this._request;
		const ip = (
			request.headers['x-forwarded-for'] ||
			request.socket.remoteAddress ||
			''
		)
			.split(',')[0]
			.trim();

		return ip;
	};
}
