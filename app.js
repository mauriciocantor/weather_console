import inquirer from "./helpers/inquirer.js";
const main = async() => {
    let opt;
    do {
        opt = await inquirer.inquirerMenu();
        switch (opt){
            case 1:
                console.log('Buscador');
                break;
            case 2:
                console.log('historial');
                break;
        }
        if(opt !== 0) await inquirer.pausa();
    }while(opt !== 0)

}

main();