
import DataService from "../model/DataService.js";


class Controller {
    constructor() {
        this.dataService = new DataService();
        this.dataService.getAxiosData("http://localhost:8000/writers",  this.megjelenit);
        this.dataService.postAxiosData("http://localhost:8000/writers", {
            "nev": "Jenőőőő",
            "szul": 1666
        }); 
           

    }
    megjelenit(list) {
        console.log(list);
        //new View(list, $("article form"));
    }
}
export default Controller;