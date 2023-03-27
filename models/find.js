import axios from "axios";
export default class Find {
    histories = [];
    _axiosInstance;
    constructor() {
         this._axiosInstance = axios.create({
            baseURL: 'https://reqres.in/api/',
            timeout: 10000
        });

    }

    async findPlace(city){
        let response = await this._axiosInstance.get('users?page=2');
        console.log(response.data);
        // console.log(`Ciudad: `);
        // console.log(`Lat: `);
        // console.log(`Lon: `);
        // console.log(`Temperatura: `);
        // console.log(`Minima: `);
        // console.log(`Maxima: `);
        return [];
    }
}
