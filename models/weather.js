import axios from "axios";
export default class Find {
    histories = [];
    _axiosInstance;
    constructor() {
         this._axiosInstance = axios.create({
            baseURL: 'https://api.openweathermap.org/data/2.5/weather',
            timeout: 10000,
            params: this.paramsWeatherApi
        });

    }

    get paramsWeatherApi() {
        return {
            lang: process.env.LANG_DEFAULT_SINGLE,
            units: 'metric',
            appid: process.env.OPENWEATHER_KEY
        };
    }

    async weatherByPlace(lat,lon){
        const params = {lat, lon,...this.paramsWeatherApi};
        const uri = this._axiosInstance.getUri({ params });
        const {data} = await this._axiosInstance.get(uri);

        return {
            desc: data.weather[0].description,
            min: data.main.temp_min,
            max:data.main.temp_max,
            temp: data.main.temp
        }
    }
}
