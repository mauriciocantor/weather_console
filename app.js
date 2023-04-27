import * as dotenv from 'dotenv';
import inquirer from "./helpers/inquirer.js";
import Find from "./models/find.js";
import Weather from "./models/weather.js";
import History from "./models/history.js";

dotenv.config();

const main = async() => {
    let opt;
    const find = new Find();
    const weather = new Weather();
    const history = new History();

    do {
        opt = await inquirer.inquirerMenu();
        switch (opt){
            case 1:
                const city = await inquirer.leerInput('Ingrese la ciudad a buscar: ');
                const places = await find.findPlace(city);
                const id = await inquirer.getPlaces(places);
                if(id==='0') continue;
                const placeSelected = places.find(place => place.id === id);
                history.addHistory(placeSelected.name);
                const weatherByPlace = await weather.weatherByPlace(placeSelected.lat, placeSelected.lng);

                console.clear();
                console.log('\nInformación de la ciudad \n'.green);
                console.log('Ciudad: ', placeSelected.name.green);
                console.log('Lat: ', placeSelected.lat);
                console.log('Lng: ', placeSelected.lng);
                console.log('Temperatura: ', weatherByPlace.temp);
                console.log('Mínima: ', weatherByPlace.min);
                console.log('Máxima: ', weatherByPlace.max);
                console.log('Comó está el clima: ', weatherByPlace.desc.green);

                break;
            case 2:
                console.clear();
                history.historyCapitalized.forEach((place, i) => {
                    const idx = `${(i + 1)}.`.green;
                    console.log(`${idx} ${place}`);
                });
                break;
        }
        if(opt !== 0) await inquirer.pausa();
    }while(opt !== 0)

}

main();