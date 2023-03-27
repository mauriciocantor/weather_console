import inquirer from "./helpers/inquirer.js";
import Find from "./models/find.js";

const main = async() => {
    let opt;
    const find = new Find();

    do {
        opt = await inquirer.inquirerMenu();
        switch (opt){
            case 1:
                let city = await inquirer.leerInput('Ingrese la ciudad a buscar: ');

                await find.findPlace(city);

                break;
            case 2:
                console.log('historial');
                break;
        }
        if(opt !== 0) await inquirer.pausa();
    }while(opt !== 0)

}

main();