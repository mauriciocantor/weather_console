import fs from 'fs';
export default class History {
    history=[];
    dbPath = './db/database.json';

    constructor(){
        fs.exists(this.dbPath, (exist)=>{
            if(exist){
                this.history = JSON.parse(fs.readFileSync(this.dbPath, 'utf8')).historial;
            }
        });
    }
    addHistory(place){
        if(!this.history.includes(place.toLocaleLowerCase())){
            this.history.unshift(place.toLocaleLowerCase());
            delete this.history[5];
            this.saveDB();
        }
    }

    readHistory(){
        return this.history;
    }

    saveDB(){
        fs.writeFileSync(this.dbPath, JSON.stringify({historial:this.history}));
    }

    get historyCapitalized(){
        return this.history.map((history)=>{
            history = history.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
            return history;
        });
    }
}