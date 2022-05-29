import fetch from 'node-fetch';

export default class OpenWeatherMap {
	_url_base = 'https://api.openweathermap.org/data/2.5/';
	_query_type;
	_city;
	_lat;
	_long;

	constructor(type) {
		this._query_type = type;
	}

	setCity = city => {
		this._city = city;
	};

	setCoords = (lat, lon) => {
		this._lat = lat;
		this._lon = lon;
	};

	execute = async () => {
		const url = this.build();
		const res = await fetch(url);
		const data = await res.json();

		return data;
	};

	build = () => {
		const url = new URL(this._url_base + this._query_type);
		this._city && url.searchParams.set('q', this._city);
		this._lat && url.searchParams.set('lat', this._lat);
		this._lon && url.searchParams.set('lon', this._lon);
		url.searchParams.set('appid', '2ccdeafa04e246cbbfee81b1d58b70d3');
		return url.toString();
	};
}
