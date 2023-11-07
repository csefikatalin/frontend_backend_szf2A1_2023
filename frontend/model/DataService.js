class DataService {
    constructor() {
        
    }

    getAxiosData(url, callback) {
        console.log(url);
        axios
            .get(url)
            .then(function (response) {
                // handle success
                console.log(response);
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
                callback(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
                console.log("finally");
            });
    }

    postAxiosData(url, data) {
        axios
            .post(url, data)
            .then((response) => {
                console.log("RESP", response);
            })
            .catch((error) => {
                console.log("hiba", error);
            });
    }
}
export default DataService;