import axios from "axios";
export default class Find {
    histories = [];
    _axiosInstance;
    constructor() {
         this._axiosInstance = axios.create({
            baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
            timeout: 10000,
            params: this.paramsMapbox
        });

    }

    get paramsMapbox() {
        return {
            proximity: 'ip',
            language: 'es',
            types: 'place',
            limit: 5,
            access_token: process.env.MAPBOX_KEY
        };
    }

    async findPlace(city){
        let {data} = await this._axiosInstance.get(`${city}.json`);
        return data.features.map(place=>({
            id: place.id,
            name: place.place_name,
            lng:place.center[0],
            lat:place.center[1]
        }));
    }
}
