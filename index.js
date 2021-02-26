const fs = require('fs');
const path = require('path');
const watch = require('node-watch');
const open = require('open');
const { type } = require('os');


const gas_bun_03 = [
    {
        "co_1": "0.00",
        "co_2": "0.00",
        "co2_1": "14.9",
        "co2_2": "14.8",
        "hc_1": "0",
        "hc_2" : "0",
        "o2_1" : "0.36",
        "o2_2" : "0.67",
        "lambda_1": "1.02",
        "lambda_2": "1.03",
        "coc_1": "0.00",
        "coc_2": "0.00",
        "afr_1": "15.10",
        "afr_2": "15.24"
    },
    {
        "co_1": "0.16",
        "co_2": "0.04",
        "co2_1": "14.3",
        "co2_2": "14.5",
        "hc_1": "73",
        "hc_2" : "47",
        "o2_1" : "0.80",
        "o2_2" : "0.63",
        "lambda_1": "1.03",
        "lambda_2": "1.03",
        "coc_1": "0.16",
        "coc_2": "0.04",
        "afr_1": "15.24",
        "afr_2": "15.24"
    },
    {
        "co_1": "0.13",
        "co_2": "0.25",
        "co2_1": "14.8",
        "co2_2": "14.6",
        "hc_1": "44",
        "hc_2" : "69",
        "o2_1" : "0.33",
        "o2_2" : "0.27",
        "lambda_1": "1.01",
        "lambda_2": "1.00",
        "coc_1": "0.13",
        "coc_2": "0.25",
        "afr_1": "14.95",
        "afr_2": "14.80"
    },
    {
        "co_1": "0.19",
        "co_2": "0.23",
        "co2_1": "14.5",
        "co2_2": "14.5",
        "hc_1": "32",
        "hc_2" : "29",
        "o2_1" : "0.31",
        "o2_2" : "0.27",
        "lambda_1": "1.01",
        "lambda_2": "1.00",
        "coc_1": "0.19",
        "coc_2": "0.23",
        "afr_1": "14.95",
        "afr_2": "14.80"
    },
    {
        "co_1": "0.19",
        "co_2": "0.09",
        "co2_1": "14.9",
        "co2_2": "15.1",
        "hc_1": "98",
        "hc_2" : "31",
        "o2_1" : "0.27",
        "o2_2" : "0.31",
        "lambda_1": "1.00",
        "lambda_2": "1.01",
        "coc_1": "0.19",
        "coc_2": "0.09",
        "afr_1": "14.80",
        "afr_2": "14.95"
    },
    {
        "co_1": "0.02",
        "co_2": "0.03",
        "co2_1": "14.9",
        "co2_2": "14.9",
        "hc_1": "32",
        "hc_2" : "33",
        "o2_1" : "0.31",
        "o2_2" : "0.44",
        "lambda_1": "1.01",
        "lambda_2": "1.02",
        "coc_1": "0.02",
        "coc_2": "0.03",
        "afr_1": "14.95",
        "afr_2": "15.10"
    },
    {
        "co_1": "0.02",
        "co_2": "0.02",
        "co2_1": "14.7",
        "co2_2": "14.7",
        "hc_1": "0",
        "hc_2" : "0",
        "o2_1" : "0.75",
        "o2_2" : "0.71",
        "lambda_1": "1.03",
        "lambda_2": "1.03",
        "coc_1": "0.02",
        "coc_2": "0.02",
        "afr_1": "15.24",
        "afr_2": "15.24"
    },
    {
        "co_1": "0.08",
        "co_2": "0.05",
        "co2_1": "14.6",
        "co2_2": "14.6",
        "hc_1": "37",
        "hc_2" : "24",
        "o2_1" : "0.47",
        "o2_2" : "0.38",
        "lambda_1": "1.02",
        "lambda_2": "1.01",
        "coc_1": "0.08",
        "coc_2": "0.05",
        "afr_1": "15.10",
        "afr_2": "14.95"
    },
    {
        "co_1": "0.03",
        "co_2": "0.00",
        "co2_1": "14.8",
        "co2_2": "14.8",
        "hc_1": "45",
        "hc_2" : "30",
        "o2_1" : "0.58",
        "o2_2" : "0.58",
        "lambda_1": "1.02",
        "lambda_2": "1.03",
        "coc_1": "0.03",
        "coc_2": "0.00",
        "afr_1": "15.10",
        "afr_2": "15.24"
    },
    {
        "co_1": "0.04",
        "co_2": "0.02",
        "co2_1": "14.9",
        "co2_2": "15.1",
        "hc_1": "55",
        "hc_2" : "67",
        "o2_1" : "0.62",
        "o2_2" : "0.43",
        "lambda_1": "1.02",
        "lambda_2": "1.02",
        "coc_1": "0.04",
        "coc_2": "0.02",
        "afr_1": "15.10",
        "afr_2": "15.10"
    },
    {
        "co_1": "0.03",
        "co_2": "0.00",
        "co2_1": "15.1",
        "co2_2": "15.2",
        "hc_1": "36",
        "hc_2" : "20",
        "o2_1" : "0.40",
        "o2_2" : "0.30",
        "lambda_1": "1.02",
        "lambda_2": "1.01",
        "coc_1": "0.03",
        "coc_2": "0.00",
        "afr_1": "15.10",
        "afr_2": "14.95"
    },
    {
        "co_1": "0.16",
        "co_2": "0.06",
        "co2_1": "15.0",
        "co2_2": "15.1",
        "hc_1": "0",
        "hc_2" : "0",
        "o2_1" : "0.46",
        "o2_2" : "0.26",
        "lambda_1": "1.02",
        "lambda_2": "1.01",
        "coc_1": "0.16",
        "coc_2": "0.06",
        "afr_1": "15.10",
        "afr_2": "14.95"
    },
    {
        "co_1": "0.00",
        "co_2": "0.00",
        "co2_1": "15.2",
        "co2_2": "15.2",
        "hc_1": "0",
        "hc_2" : "0",
        "o2_1" : "0.54",
        "o2_2" : "0.38",
        "lambda_1": "1.02",
        "lambda_2": "1.02",
        "coc_1": "0.00",
        "coc_2": "0.00",
        "afr_1": "15.10",
        "afr_2": "15.10"
    },
    {
        "co_1": "0.00",
        "co_2": "0.00",
        "co2_1": "15.1",
        "co2_2": "15.1",
        "hc_1": "0",
        "hc_2" : "0",
        "o2_1" : "0.35",
        "o2_2" : "0.27",
        "lambda_1": "1.02",
        "lambda_2": "1.01",
        "coc_1": "0.00",
        "coc_2": "0.00",
        "afr_1": "15.10",
        "afr_2": "14.95"
    },
    {
        "co_1": "0.02",
        "co_2": "0.01",
        "co2_1": "15.1",
        "co2_2": "15.1",
        "hc_1": "4",
        "hc_2" : "0",
        "o2_1" : "0.57",
        "o2_2" : "0.34",
        "lambda_1": "1.03",
        "lambda_2": "1.01",
        "coc_1": "0.02",
        "coc_2": "0.01",
        "afr_1": "15.24",
        "afr_2": "14.95"
    },
    {
        "co_1": "0.02",
        "co_2": "0.04",
        "co2_1": "15.3",
        "co2_2": "15.3",
        "hc_1": "9",
        "hc_2" : "0",
        "o2_1" : "0.41",
        "o2_2" : "0.32",
        "lambda_1": "1.02",
        "lambda_2": "1.01",
        "coc_1": "0.02",
        "coc_2": "0.04",
        "afr_1": "15.10",
        "afr_2": "14.95"
    },
    {
        "co_1": "0.10",
        "co_2": "0.00",
        "co2_1": "14.7",
        "co2_2": "14.8",
        "hc_1": "7",
        "hc_2" : "0",
        "o2_1" : "0.55",
        "o2_2" : "0.70",
        "lambda_1": "1.02",
        "lambda_2": "1.03",
        "coc_1": "0.10",
        "coc_2": "0.00",
        "afr_1": "15.10",
        "afr_2": "15.24"
    },
    {
        "co_1": "0.07",
        "co_2": "0.05",
        "co2_1": "14.7",
        "co2_2": "14.8",
        "hc_1": "14",
        "hc_2" : "7",
        "o2_1" : "0.70",
        "o2_2" : "0.56",
        "lambda_1": "1.03",
        "lambda_2": "1.02",
        "coc_1": "0.07",
        "coc_2": "0.05",
        "afr_1": "15.24",
        "afr_2": "15.10"
    },
    {
        "co_1": "0.10",
        "co_2": "0.10",
        "co2_1": "14.6",
        "co2_2": "14.4",
        "hc_1": "1",
        "hc_2" : "6",
        "o2_1" : "0.79",
        "o2_2" : "0.87",
        "lambda_1": "1.03",
        "lambda_2": "1.03",
        "coc_1": "0.10",
        "coc_2": "0.10",
        "afr_1": "15.24",
        "afr_2": "15.39"
    },
    {
        "co_1": "0.00",
        "co_2": "0.03",
        "co2_1": "14.9",
        "co2_2": "15.0",
        "hc_1": "44",
        "hc_2" : "50",
        "o2_1" : "0.59",
        "o2_2" : "0.49",
        "lambda_1": "1.02",
        "lambda_2": "1.02",
        "coc_1": "0.00",
        "coc_2": "0.03",
        "afr_1": "15.10",
        "afr_2": "15.10"
    }
];

gas_bun_05 = [
    {
        "co_1": "0.15",
        "co_2": "0.19",
        "co2_1": "14.6",
        "co2_2": "14.5",
        "hc_1": "38",
        "hc_2" : "88",
        "o2_1" : "0.65",
        "o2_2" : "0.42",
        "lambda_1": "1.03",
        "lambda_2": "1.01",
        "coc_1": "0.15",
        "coc_2": "0.19",
        "afr_1": "15.24",
        "afr_2": "14.95"
    },
    {
        "co_1": "0.08",
        "co_2": "0.17",
        "co2_1": "14.6",
        "co2_2": "14.7",
        "hc_1": "26",
        "hc_2" : "23",
        "o2_1" : "0.76",
        "o2_2" : "0.72",
        "lambda_1": "1.03",
        "lambda_2": "1.03",
        "coc_1": "0.08",
        "coc_2": "0.17",
        "afr_1": "15.24",
        "afr_2": "15.24"
    },
    {
        "co_1": "0.10",
        "co_2": "0.12",
        "co2_1": "15.0",
        "co2_2": "15.0",
        "hc_1": "10",
        "hc_2" : "28",
        "o2_1" : "0.63",
        "o2_2" : "0.53",
        "lambda_1": "1.03",
        "lambda_2": "1.02",
        "coc_1": "0.10",
        "coc_2": "0.12",
        "afr_1": "15.24",
        "afr_2": "15.10"
    },
    {
        "co_1": "0.18",
        "co_2": "0.27",
        "co2_1": "14.8",
        "co2_2": "14.8",
        "hc_1": "33",
        "hc_2" : "72",
        "o2_1" : "0.74",
        "o2_2" : "0.50",
        "lambda_1": "1.03",
        "lambda_2": "1.02",
        "coc_1": "0.18",
        "coc_2": "0.27",
        "afr_1": "15.24",
        "afr_2": "15.10"
    },
    {
        "co_1": "0.26",
        "co_2": "0.22",
        "co2_1": "14.8",
        "co2_2": "14.8",
        "hc_1": "31",
        "hc_2" : "33",
        "o2_1" : "0.21",
        "o2_2" : "0.33",
        "lambda_1": "1.00",
        "lambda_2": "1.01",
        "coc_1": "0.26",
        "coc_2": "0.22",
        "afr_1": "14.80",
        "afr_2": "14.95"
    },
    {
        "co_1": "0.28",
        "co_2": "0.26",
        "co2_1": "14.3",
        "co2_2": "14.4",
        "hc_1": "58",
        "hc_2" : "40",
        "o2_1" : "0.59",
        "o2_2" : "0.41",
        "lambda_1": "1.02",
        "lambda_2": "1.01",
        "coc_1": "0.28",
        "coc_2": "0.26",
        "afr_1": "15.10",
        "afr_2": "14.95"
    },
    {
        "co_1": "0.05",
        "co_2": "0.21",
        "co2_1": "14.7",
        "co2_2": "14.6",
        "hc_1": "14",
        "hc_2" : "19",
        "o2_1" : "0.66",
        "o2_2" : "0.32",
        "lambda_1": "1.03",
        "lambda_2": "1.01",
        "coc_1": "0.05",
        "coc_2": "0.21",
        "afr_1": "15.24",
        "afr_2": "14.95"
    },
    {
        "co_1": "0.12",
        "co_2": "0.14",
        "co2_1": "14.6",
        "co2_2": "14.7",
        "hc_1": "26",
        "hc_2" : "23",
        "o2_1" : "0.76",
        "o2_2" : "0.72",
        "lambda_1": "1.03",
        "lambda_2": "1.03",
        "coc_1": "0.12",
        "coc_2": "0.14",
        "afr_1": "15.24",
        "afr_2": "15.24"
    },
    {
        "co_1": "0.10",
        "co_2": "0.18",
        "co2_1": "15.0",
        "co2_2": "15.0",
        "hc_1": "10",
        "hc_2" : "0",
        "o2_1" : "0.63",
        "o2_2" : "0.53",
        "lambda_1": "1.03",
        "lambda_2": "1.02",
        "coc_1": "0.10",
        "coc_2": "0.18",
        "afr_1": "15.24",
        "afr_2": "15.10"
    },
    {
        "co_1": "0.09",
        "co_2": "0.19",
        "co2_1": "14.8",
        "co2_2": "14.8",
        "hc_1": "30",
        "hc_2" : "22",
        "o2_1" : "0.74",
        "o2_2" : "0.50",
        "lambda_1": "1.03",
        "lambda_2": "1.02",
        "coc_1": "0.09",
        "coc_2": "0.19",
        "afr_1": "15.24",
        "afr_2": "15.10"
    }
];

gas_bun_35 = [
    {
        "co_1": "2.19",
        "co_2": "",
        "co2_1": "9.6",
        "co2_2": "",
        "hc_1": "507",
        "hc_2" : "",
        "o2_1" : "5.4",
        "o2_2" : "",
        "lambda_1": "1.21",
        "lambda_2": "",
        "coc_1": "2.79",
        "coc_2": "",
        "afr_1": "17.91",
        "afr_2": ""
    },
    {
        "co_1": "0.92",
        "co_2": "",
        "co2_1": "9.7",
        "co2_2": "",
        "hc_1": "550",
        "hc_2" : "",
        "o2_1" : "6.2",
        "o2_2" : "",
        "lambda_1": "1.33",
        "lambda_2": "",
        "coc_1": "1.30",
        "coc_2": "",
        "afr_1": "19.68",
        "afr_2": ""
    },
    {
        "co_1": "0.90",
        "co_2": "",
        "co2_1": "9.8",
        "co2_2": "",
        "hc_1": "487",
        "hc_2" : "",
        "o2_1" : "6.6",
        "o2_2" : "",
        "lambda_1": "1.36",
        "lambda_2": "",
        "coc_1": "1.26",
        "coc_2": "",
        "afr_1": "20.13",
        "afr_2": ""
    },
    {
        "co_1": "0.90",
        "co_2": "",
        "co2_1": "9.9",
        "co2_2": "",
        "hc_1": "404",
        "hc_2" : "",
        "o2_1" : "6.2",
        "o2_2" : "",
        "lambda_1": "1.34",
        "lambda_2": "",
        "coc_1": "1.25",
        "coc_2": "",
        "afr_1": "19.83",
        "afr_2": ""
    },
    {
        "co_1": "0.90",
        "co_2": "",
        "co2_1": "9.3",
        "co2_2": "",
        "hc_1": "512",
        "hc_2" : "",
        "o2_1" : "6.8",
        "o2_2" : "",
        "lambda_1": "1.39",
        "lambda_2": "",
        "coc_1": "1.32",
        "coc_2": "",
        "afr_1": "20.57",
        "afr_2": ""
    }
];

gas_bun_45 = [ 
    {
        "co_1": "0.92",
        "co_2": "",
        "co2_1": "9.6",
        "co2_2": "",
        "hc_1": "436",
        "hc_2" : "",
        "o2_1" : "6.7",
        "o2_2" : "",
        "lambda_1": "1.37",
        "lambda_2": "",
        "coc_1": "1.31",
        "coc_2": "",
        "afr_1": "20.28",
        "afr_2": ""
    },
    {
        "co_1": "0.97",
        "co_2": "",
        "co2_1": "11.2",
        "co2_2": "",
        "hc_1": "396",
        "hc_2" : "",
        "o2_1" : "4.7",
        "o2_2" : "",
        "lambda_1": "1.21",
        "lambda_2": "",
        "coc_1": "1.20",
        "coc_2": "",
        "afr_1": "17.91",
        "afr_2": ""
    },
    {
        "co_1": "1.04",
        "co_2": "",
        "co2_1": "11.0",
        "co2_2": "",
        "hc_1": "354",
        "hc_2" : "",
        "o2_1" : "4.8",
        "o2_2" : "",
        "lambda_1": "1.22",
        "lambda_2": "",
        "coc_1": "1.30",
        "coc_2": "",
        "afr_1": "18.06",
        "afr_2": ""
    },
    {
        "co_1": "1.49",
        "co_2": "",
        "co2_1": "9.8",
        "co2_2": "",
        "hc_1": "701",
        "hc_2" : "",
        "o2_1" : "5.8",
        "o2_2" : "",
        "lambda_1": "1.24",
        "lambda_2": "",
        "coc_1": "2.22",
        "coc_2": "",
        "afr_1": "18.35",
        "afr_2": ""
    },
    {
        "co_1": "2.29",
        "co_2": "",
        "co2_1": "9.7",
        "co2_2": "",
        "hc_1": "433",
        "hc_2" : "",
        "o2_1" : "5.0",
        "o2_2" : "",
        "lambda_1": "1.18",
        "lambda_2": "",
        "coc_1": "2.86",
        "coc_2": "",
        "afr_1": "17.46",
        "afr_2": ""
    },
    {
        "co_1": "2.16",
        "co_2": "",
        "co2_1": "9.9",
        "co2_2": "",
        "hc_1": "432",
        "hc_2" : "",
        "o2_1" : "5.1",
        "o2_2" : "",
        "lambda_1": "1.19",
        "lambda_2": "",
        "coc_1": "2.69",
        "coc_2": "",
        "afr_1": "17.61",
        "afr_2": ""
    }
];

let watcher;
const dirPathGas = path.join(__dirname, '/GAS');
const dirPathSmoke = path.join(__dirname, '/SMOKE');

const readFoldersGas = async (dirPath, watcher) => { 

    watch(dirPath, { recursive:true },async (evt, name) => {
        
        let writeFilePath = path.join(__dirname, '../GAS');

        writeFileName = path.join(writeFilePath, name);

        const res = name.split("\\");
        let newFileName;

        writeFilePath = path.join(__dirname, '/GAS_MOD');

        if(res[res.length-1].split(".")[1] === "html"){
            //console.log("from here", res[res.length-1]);
            //console.log("from here", res[res.length-2]);

            try {
                fs.mkdir(path.join(writeFilePath, res[res.length-2]),  err =>{
                
                    newFileName = res[res.length-1]; 
                    writeFilePath = path.join(writeFilePath, res[res.length-2])
                    writeFilePath = path.join(writeFilePath, newFileName);

                });
            } catch (err) {}

            fs.readFile(name, async(err, data) => {
                let htmlString;

                if(data !== undefined){
                    htmlString = data.toString();
                    //console.log(htmlString);
                  
                    let type_gas;
                    let randomNumber; 
                    let tur_rpm_1;
                    let tur_rpm_2;

                    if(htmlString.includes("ADMIS")) {
                        
                    } else if(htmlString.includes("&nbsp;&nbsp;CO&nbsp;ralanti&nbsp;limita:0.30&nbsp;vol.&nbsp;&nbsp;&nbsp;")) {
                       
                        randomNumber = Math.floor(Math.random() * Math.floor(19));
                        type_gas = "30";

                        var resArray = htmlString.split("|");
                        
                        resArray[14] = "&nbsp;&nbsp;&nbsp;" + gas_bun_03[randomNumber].co_1 + "&nbsp;&nbsp;";
                        resArray[15] = "&nbsp;&nbsp;&nbsp;" + gas_bun_03[randomNumber].co_2 + "&nbsp;&nbsp;";

                        resArray[18] = "&nbsp;&nbsp;&nbsp;" + gas_bun_03[randomNumber].co2_1 + "&nbsp;&nbsp;";
                        resArray[19] = "&nbsp;&nbsp;&nbsp;" + gas_bun_03[randomNumber].co2_2 + "&nbsp;&nbsp;";

                        let nbsp = await getNbsp(gas_bun_03[randomNumber].hc_1, 4, 3);

                        resArray[22] = nbsp + gas_bun_03[randomNumber].hc_1 + "&nbsp;&nbsp;";
                        
                        nbsp = await getNbsp(gas_bun_03[randomNumber].hc_2, 4, 3);
                        
                        resArray[23] = nbsp + gas_bun_03[randomNumber].hc_2 + "&nbsp;&nbsp;";

                        resArray[26] = "&nbsp;&nbsp;&nbsp;" + gas_bun_03[randomNumber].o2_1 + "&nbsp;&nbsp;";
                        resArray[27] = "&nbsp;&nbsp;&nbsp;" + gas_bun_03[randomNumber].o2_2 + "&nbsp;&nbsp;";

                        resArray[30] = "&nbsp;&nbsp;&nbsp;" + gas_bun_03[randomNumber].lambda_1 + "&nbsp;&nbsp;";
                        resArray[31] = "&nbsp;&nbsp;&nbsp;" + gas_bun_03[randomNumber].lambda_2 + "&nbsp;&nbsp;";

                        resArray[34] = "&nbsp;&nbsp;&nbsp;" + gas_bun_03[randomNumber].coc_1 + "&nbsp;&nbsp;";
                        resArray[35] = "&nbsp;&nbsp;&nbsp;" + gas_bun_03[randomNumber].coc_2 + "&nbsp;&nbsp;";

                        resArray[38] = "&nbsp;&nbsp;" + gas_bun_03[randomNumber].afr_1 + "&nbsp;&nbsp;";
                        resArray[39] = "&nbsp;&nbsp;" + gas_bun_03[randomNumber].afr_2 + "&nbsp;&nbsp;";

                        tur_rpm_2 = resArray[43].replace(/&nbsp;/gi, "");

                        temp_c_1 = resArray[46].replace(/&nbsp;/gi, "");
                        temp_c_2 = resArray[47].replace(/&nbsp;/gi, "");

                        htmlString = resArray.join("|");

                     

                    } else if(htmlString.includes("&nbsp;&nbsp;CO&nbsp;ralanti&nbsp;limita:0.50&nbsp;vol.&nbsp;&nbsp;&nbsp;")) {
                       
                        randomNumber = Math.floor(Math.random() * Math.floor(9));
                        type_gas = "50";

                        var resArray = htmlString.split("|");
                        
                        resArray[14] = "&nbsp;&nbsp;&nbsp;" + gas_bun_05[randomNumber].co_1 + "&nbsp;&nbsp;";
                        resArray[15] = "&nbsp;&nbsp;&nbsp;" + gas_bun_05[randomNumber].co_2 + "&nbsp;&nbsp;";

                        resArray[18] = "&nbsp;&nbsp;&nbsp;" + gas_bun_05[randomNumber].co2_1 + "&nbsp;&nbsp;";
                        resArray[19] = "&nbsp;&nbsp;&nbsp;" + gas_bun_05[randomNumber].co2_2 + "&nbsp;&nbsp;";

                        let nbsp = await getNbsp(gas_bun_05[randomNumber].hc_1, 4, 3);

                        resArray[22] = nbsp + gas_bun_05[randomNumber].hc_1 + "&nbsp;&nbsp;";
                        
                        nbsp = await getNbsp(gas_bun_05[randomNumber].hc_2, 4, 3);
                        
                        resArray[23] = nbsp + gas_bun_05[randomNumber].hc_2 + "&nbsp;&nbsp;";

                        resArray[26] = "&nbsp;&nbsp;&nbsp;" + gas_bun_05[randomNumber].o2_1 + "&nbsp;&nbsp;";
                        resArray[27] = "&nbsp;&nbsp;&nbsp;" + gas_bun_05[randomNumber].o2_2 + "&nbsp;&nbsp;";

                        resArray[30] = "&nbsp;&nbsp;&nbsp;" + gas_bun_05[randomNumber].lambda_1 + "&nbsp;&nbsp;";
                        resArray[31] = "&nbsp;&nbsp;&nbsp;" + gas_bun_05[randomNumber].lambda_2 + "&nbsp;&nbsp;";

                        resArray[34] = "&nbsp;&nbsp;&nbsp;" + gas_bun_05[randomNumber].coc_1 + "&nbsp;&nbsp;";
                        resArray[35] = "&nbsp;&nbsp;&nbsp;" + gas_bun_05[randomNumber].coc_2 + "&nbsp;&nbsp;";

                        resArray[38] = "&nbsp;&nbsp;" + gas_bun_05[randomNumber].afr_1 + "&nbsp;&nbsp;";
                        resArray[39] = "&nbsp;&nbsp;" + gas_bun_05[randomNumber].afr_2 + "&nbsp;&nbsp;";

                        tur_rpm_1 = resArray[42].replace(/&nbsp;/gi, "");
                        tur_rpm_2 = resArray[43].replace(/&nbsp;/gi, "");

                        temp_c_1 = resArray[46].replace(/&nbsp;/gi, "");
                        temp_c_2 = resArray[47].replace(/&nbsp;/gi, "");

                        htmlString = resArray.join("|");

                   
                        

                    } else if(htmlString.includes("&nbsp;COcorr.&nbsp;Valo.&nbsp;limita:3.50&nbsp;vol.&nbsp;")) {

                        randomNumber =  Math.floor(Math.random() * Math.floor(4));
                        type_gas = "35";

                        var resArray = htmlString.split("|");
                        
                        resArray[14] = "&nbsp;&nbsp;&nbsp;" + gas_bun_35[randomNumber].co_1 + "&nbsp;&nbsp;";
                        // resArray[15] = "&nbsp;&nbsp;&nbsp;" + gas_bun_35[randomNumber].co_2 + "&nbsp;&nbsp;";

                        resArray[18] = "&nbsp;&nbsp;&nbsp;" + gas_bun_35[randomNumber].co2_1 + "&nbsp;&nbsp;";
                        // resArray[19] = "&nbsp;&nbsp;&nbsp;" + gas_bun_35[randomNumber].co2_2 + "&nbsp;&nbsp;";

                        let nbsp = await getNbsp(gas_bun_35[randomNumber].hc_1, 4, 3);

                        resArray[22] = nbsp + gas_bun_35[randomNumber].hc_1 + "&nbsp;&nbsp;";
                        
                        // nbsp = await getNbsp(gas_bun_35[randomNumber].hc_2, 4, 3);
                        
                        // resArray[23] = nbsp + gas_bun_35[randomNumber].hc_2 + "&nbsp;&nbsp;";

                        resArray[26] = "&nbsp;&nbsp;&nbsp;" + gas_bun_35[randomNumber].o2_1 + "&nbsp;&nbsp;";
                        // resArray[27] = "&nbsp;&nbsp;&nbsp;" + gas_bun_35[randomNumber].o2_2 + "&nbsp;&nbsp;";

                        resArray[30] = "&nbsp;&nbsp;&nbsp;" + gas_bun_35[randomNumber].lambda_1 + "&nbsp;&nbsp;";
                        // resArray[31] = "&nbsp;&nbsp;&nbsp;" + gas_bun_35[randomNumber].lambda_2 + "&nbsp;&nbsp;";

                        resArray[34] = "&nbsp;&nbsp;&nbsp;" + gas_bun_35[randomNumber].coc_1 + "&nbsp;&nbsp;";
                        // resArray[35] = "&nbsp;&nbsp;&nbsp;" + gas_bun_35[randomNumber].coc_2 + "&nbsp;&nbsp;";

                        resArray[38] = "&nbsp;&nbsp;" + gas_bun_35[randomNumber].afr_1 + "&nbsp;&nbsp;";
                        // resArray[39] = "&nbsp;&nbsp;" + gas_bun_35[randomNumber].afr_2 + "&nbsp;&nbsp;";

                        // console.log(gas_bun_35[randomNumber].afr_1);

                        tur_rpm_1 = resArray[42].replace(/&nbsp;/gi, "");
                        tur_rpm_2 = resArray[43].replace(/&nbsp;/gi, "");

                        temp_c_1 = resArray[46].replace(/&nbsp;/gi, "");
                        temp_c_2 = resArray[47].replace(/&nbsp;/gi, "");

                        // console.log(resArray[38]);

                        htmlString = resArray.join("|");

                       
                       

                    } else if(htmlString.includes("&nbsp;COcorr.&nbsp;Valo.&nbsp;limita:4.50&nbsp;vol.&nbsp;")) {

                        randomNumber =  Math.floor(Math.random() * Math.floor(5));
                        type_gas = "45";

                        var resArray = htmlString.split("|");
                        
                        resArray[14] = "&nbsp;&nbsp;&nbsp;" + gas_bun_45[randomNumber].co_1 + "&nbsp;&nbsp;";
                        //resArray[15] = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

                        resArray[18] = "&nbsp;&nbsp;&nbsp;" + gas_bun_45[randomNumber].co2_1 + "&nbsp;&nbsp;";
                        //resArray[19] = "&nbsp;&nbsp;&nbsp;" + gas_bun_45[randomNumber].co2_2 + "&nbsp;&nbsp;";

                        let nbsp = await getNbsp(gas_bun_45[randomNumber].hc_1, 4, 3);

                        resArray[22] = nbsp + gas_bun_45[randomNumber].hc_1 + "&nbsp;&nbsp;";
                        
                        // nbsp = await getNbsp(gas_bun_45[randomNumber].hc_2, 4, 3);
                        
                        // resArray[23] = nbsp + gas_bun_45[randomNumber].hc_2 + "&nbsp;&nbsp;";

                        resArray[26] = "&nbsp;&nbsp;&nbsp;" + gas_bun_45[randomNumber].o2_1 + "&nbsp;&nbsp;";
                        //resArray[27] = "&nbsp;&nbsp;&nbsp;" + gas_bun_45[randomNumber].o2_2 + "&nbsp;&nbsp;";

                        resArray[30] = "&nbsp;&nbsp;&nbsp;" + gas_bun_45[randomNumber].lambda_1 + "&nbsp;&nbsp;";
                        //resArray[31] = "&nbsp;&nbsp;&nbsp;" + gas_bun_45[randomNumber].lambda_2 + "&nbsp;&nbsp;";

                        resArray[34] = "&nbsp;&nbsp;&nbsp;" + gas_bun_45[randomNumber].coc_1 + "&nbsp;&nbsp;";
                        //resArray[35] = "&nbsp;&nbsp;&nbsp;" + gas_bun_45[randomNumber].coc_2 + "&nbsp;&nbsp;";

                        resArray[38] = "&nbsp;&nbsp;" + gas_bun_45[randomNumber].afr_1 + "&nbsp;&nbsp;";
                       // resArray[39] = "&nbsp;&nbsp;" + gas_bun_45[randomNumber].afr_2 + "&nbsp;&nbsp;";

                        tur_rpm_1 = resArray[42].replace(/&nbsp;/gi, "");
                        tur_rpm_2 = resArray[43].replace(/&nbsp;/gi, "");

                        temp_c_1 = resArray[46].replace(/&nbsp;/gi, "");
                        temp_c_2 = resArray[47].replace(/&nbsp;/gi, "");



                        htmlString = resArray.join("|");

                       
                      
                    }

                    //htmlString = htmlString.replace("�C|", "&#8451;|")
                    htmlString = htmlString.replace("�C|", "&#176;C|")
                    // let indexOfNr = htmlString.indexOf("N�&nbsp;");

                    // let part1 = htmlString.substring(0, indexOfNr);
                    // let part2 = htmlString.substring(indexOfNr + 15, htmlString.length);

                    // htmlString = part1 + part2;

                    // let indexOfSpaces = htmlString.indexOf("Sag&nbsp;Str&nbsp;XVIII&nbsp;nr&nbsp;6");

                    // part1 = htmlString.substring(0, indexOfSpaces + 45);
                    // part2 = htmlString.substring(indexOfSpaces + 71, htmlString.length-102);
                    
                    // htmlString = part1 + part2;


                    let admisArray = htmlString.split("<BR>");

                    let i = 0;
                    let j = 0;
                    let k = 0; // retin mai jos randul pentru turatie
                    let l = 0; // retin mai jos randul pentru temperatura

                    admisArray.forEach(element => {
                        if(element.includes("RESPINS")) {
                           
                            j = i;
                        } 
                        if(element.includes("Tur.&nbsp;(RPM)")){

                            k = i;
                        }
                        if(element.includes("|Temp")) {
                            l = i;
                        }
                        i++;
                    });
                   
                    let temp = 0;
                    if(parseInt(admisArray[l].split("|")[2].replace(/&nbsp;/gi, "")) < 50) {
                        randomNumberTemp = Math.floor(Math.random() * 40);
                        temp = 50 + randomNumberTemp;

                        temp_string = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + temp + "&nbsp;&nbsp;"
                        
                        
                        let tempArr = admisArray[l].split("|");
                        tempArr[2] = temp_string;

                        admisArray[l] = tempArr.join("|");
                    }

                    
                    randomNumberTur = Math.floor(Math.random() * 20);
                    tur = randomNumberTur * 10 + 800;
                    let tur_string;
                    if(tur < 1000) {
                        tur_string = "&nbsp;" + tur;
                    } else {
                        tur_string = tur;
                    }

                    if(isNaN(parseInt(tur_rpm_1))) {
                        tur_rpm_1 = tur;
                    }
                    if(isNaN(parseInt(temp_c_1)) || parseInt(temp_c_1) < 10){
                        temp_c_1 = temp;
                    }

                    admisArray[k] = admisArray[k].replace("----", tur_string);

                    admisArray[j] = "*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VEHICUL&nbsp;ADMIS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*";

                    let rmNrArray = admisArray[0].split('<FONT FACE="CAP_courier" SIZE="3" COLOR="#000000">');
                    rmNrArray[1] = "";
                    admisArray[0] = rmNrArray.join('<FONT FACE="CAP_courier" SIZE="3" COLOR="#000000">');

                    admisArray.splice(4, 4);

                    if(admisArray.length === 60) {
                        console.log(true);
                        admisArray.splice(j-4+1, 3);
                        console.log(admisArray[60]);
                    }

                    htmlString = admisArray.join("<BR>")

                   

                    fs.writeFile(writeFilePath, htmlString, (error) => {
                        if(error) return console.log(error);
                    });

                  
                    // let sentString = writeFilePath.replaceAll('\\', 'xxx');
                    let sentString = writeFilePath.replace(/\\/gi, 'xxx');

                    if(temp_c_2 === "") {temp_c_2 = 0};
                    if(tur_rpm_2 === "" ) {tur_rpm_2 = 0};
            
                    open("http://localhost:3000/editeaza_benzina/" + type_gas + "/" + randomNumber + "/" + sentString + "/" + tur_rpm_1 + "/" + tur_rpm_2 + "/" + temp_c_1 + "/" + temp_c_2, {app: 'chrome'});
                }
            });

        }
        else return;
    });        
         
};

const readFoldersSmoke = async (dirPath, watcher) => { 

    watch(dirPath, { recursive:true },async (evt, name) => {

        let writeFilePath = path.join(__dirname, '../SMOKE');

        writeFileName = path.join(writeFilePath, name);

        const res = name.split("\\");
        let newFileName;

        writeFilePath = path.join(__dirname, '/SMOKE_MOD');


        if(res[res.length-1].split(".")[1] === "html"){

           
            try {
                fs.mkdir(path.join(writeFilePath, res[res.length-2]),  err =>{
                
                    newFileName = res[res.length-1]; 
                    writeFilePath = path.join(writeFilePath, res[res.length-2])
                    writeFilePath = path.join(writeFilePath, newFileName);

                });
            } catch(err){}

            fs.readFile(name, async(err, data) => {
                let htmlString;
                let ral_rpm;
                let regul_rpm;
                let k_m;
                let tbaza_s;

                if(data !== undefined){
                    htmlString = data.toString();
                    
                    let randomNumber; 
                    let indexOfNr = htmlString.indexOf("N�&nbsp;");


                    let part1 = htmlString.substring(0, indexOfNr);
                    let part2 = htmlString.substring(indexOfNr + 16, htmlString.length);

                    htmlString = part1 + part2;

                    var resArray = htmlString.split("|");

                    // let i = 0;
                    // resArray.forEach(element => {
                    //     console.log(element);
                    //     console.log(i++);
                    //     console.log("++++++++++++++++++++++++++\n");
                    // });

                    //Testam daca este Admis
                    //Daca nu este admis atunci verificam numarul de randuri
                    //Daca numarul de randuri este 1
                    //Daca numarul de randuri este > 1
                    //Daca numarul de randuri este = 0
                    k_m = await getKm(htmlString);
            
                    if(k_m === 0) {
                        k_m = 0.1;
                    }
                

                    if(htmlString.includes("ADMIS")) {
                        
                    } else if(resArray[25] === "&nbsp;&nbsp;2&nbsp;&nbsp;") {
                        //varianta 3
                       // console.log("more than one rows");
                        
                        let prbNr = 2;
                        let removeIndex = 1;
                        let itemsToRemove = 2;

                        resArray.forEach(element => {
                            if(element === "&nbsp;&nbsp;"+prbNr+"&nbsp;&nbsp;"){
                                removeIndex = 25;
                                itemsToRemove +=5;
                                prbNr++;
                            }
                        });

                        if(removeIndex = 25) {
                            await resArray.splice(25, itemsToRemove);
                        }

                        resArray[23] = "&nbsp;"+k_m+"&nbsp;";

                        htmlString = resArray.join("|");

                        let sanitizeString = htmlString.split("<BR>");

                        // let  i = 0;
                        // resArray.forEach(el => {
                        //     console.log(i++);
                        //     console.log(el);
                        //     console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
                        // });

                        ral_rpm = resArray[20].replace(/&nbsp;/gi, "");
                        regul_rpm = resArray[21].replace(/&nbsp;/gi, "");
                        tbaza_s = resArray[22].replace(/&nbsp;/gi, "");

                        sanitizeString.splice(42, 1);

                        htmlString = sanitizeString.join("<BR>");

                        //htmlString = htmlString.replace("RESPINS", "ADMIS");
                        htmlString = htmlString.replace(/�C/gi, "&#176;C");

                        let admisArray = htmlString.split("<BR>");

                        // let  i = 0;
                        // admisArray.forEach(el => {
                        //     console.log(i++);
                        //     console.log(el);
                        //     console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
                        // });

                        admisArray[47] = "*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REZULTAT:&nbsp;ADMIS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*";

                        

                        if(htmlString.includes("K&nbsp;mediu")) {
                            let kmediuArray = admisArray[45].split("=");
                            let addNbspString = "";
                            let startString = "&nbsp;";
                            startString += k_m;
                            startString += "&nbsp;/m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*";

                            for(let i = 0; i < 3 - k_m.length; i++) {
                                addNbspString += "&nbsp;";
                            }

                            startString += addNbspString;

                            kmediuArray[1] = startString;

                            admisArray[45] = kmediuArray.join("="); 

                        } else {

                        }

                        if(htmlString.includes("Delta&nbsp;K")) {

                        } else {
                            
                        }

                        admisArray.splice(4, 4);

                        htmlString = admisArray.join("<BR>");

                        fs.writeFile(writeFilePath, htmlString, (error) => {
                            if(error) return console.log(error);
                        });

                    } else if(resArray[19] === "&nbsp;&nbsp;1&nbsp;&nbsp;") {
                        // console.log("one row");

                        resArray[23] = "&nbsp;"+k_m+"*";

                        ral_rpm = resArray[20].replace(/&nbsp;/gi, "");
                        regul_rpm = resArray[21].replace(/&nbsp;/gi, "");
                        tbaza_s = resArray[22].replace(/&nbsp;/gi, "");

                        htmlString = resArray.join("|");

                        //htmlString = htmlString.replace("RESPINS", "ADMIS");
                        htmlString = htmlString.replace(/�C/gi, "&#176;C")

                        let admisArray = htmlString.split("<BR>");

                        // let  i = 0;
                        // admisArray.forEach(el => {
                        //     console.log(i++);
                        //     console.log(el);
                        //     console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
                        // });

                        admisArray[47] = "*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REZULTAT:&nbsp;ADMIS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*";
                        
                        admisArray[45] = admisArray[46];
                        admisArray[46] = "*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delta&nbsp;K=&nbsp;0.00&nbsp;/m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*";


                          if(htmlString.includes("K&nbsp;mediu")) {
                            let kmediuArray = admisArray[45].split("=");
                            let addNbspString = "";
                            let startString = "&nbsp;";
                            startString += k_m;
                            startString += "&nbsp;/m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*";

                            for(let i = 0; i < 3 - k_m.length; i++) {
                                addNbspString += "&nbsp;";
                            }

                            startString += addNbspString;

                            kmediuArray[1] = startString;

                            admisArray[45] = kmediuArray.join("="); 

                        } else {

                        }

                        if(htmlString.includes("Delta&nbsp;K")) {

                        } else {
                            
                        }

                        admisArray.splice(4, 4);

                        htmlString = admisArray.join("<BR>");


                        fs.writeFile(writeFilePath, htmlString, (error) => {
                            if(error) return console.log(error);
                        });


                    } else {
                        // console.log("0 rows");

                        let probaNr = 1;

                        randomNumber = Math.floor(Math.random() * 20);
                        ral_rpm = randomNumber * 10 + 740;

                        randomNumber = Math.floor(Math.random() * 17);
                        regul_rpm = randomNumber * 20 + 4580;
                        
                        randomNumber = Math.floor(Math.random() * 5);
                        tbaza_s = randomNumber * 0.2 + 1.2;

                        let probaNr_string = "&nbsp;&nbsp;" + probaNr + "&nbsp;&nbsp;";
                        let ral_rpm_string = "&nbsp;&nbsp;" + ral_rpm + "";
                        let regul_rpm_string = "&nbsp;&nbsp;&nbsp;" + regul_rpm + "";
                        let tbaza_s_string = "&nbsp;" + tbaza_s + "";
                        if(tbaza_s_string.length < 5)
                            tbaza_s_string = "&nbsp;" + tbaza_s_string;
                        
                        let k_m_string = "&nbsp;" + k_m + "*";
                        while(k_m_string.length < 6) {
                            k_m_string = "&nbsp;" + k_m_string;
                        }

                        resArray.splice(18, 0, '<BR>', probaNr_string, ral_rpm_string, regul_rpm_string, tbaza_s_string, k_m_string);
                        

                        htmlString = resArray.join("|");

                        // htmlString = htmlString.replace("RESPINS", "ADMIS");
                        htmlString = htmlString.replace(/�C/gi, "&#176;C");
                    

                        let admisArray = htmlString.split("<BR>");

                        // let  i = 0;
                        // admisArray.forEach(el => {
                        //     console.log(i++);
                        //     console.log(el);
                        //     console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++");
                        // });



                        admisArray[45] = "*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;REZULTAT:&nbsp;ADMIS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*";
                                    
                        await admisArray.splice(45, 0, "*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K&nbsp;mediu=&nbsp;1.06&nbsp;/m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*", 
                                                 "*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delta&nbsp;K=&nbsp;0.00&nbsp;/m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*")


                       

                         if(admisArray[45].includes("K&nbsp;mediu")) {
                            let kmediuArray = admisArray[45].split("=");
                            let addNbspString = "";
                            let startString = "&nbsp;";
                            startString += k_m;
                            startString += "&nbsp;/m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*";

                            for(let i = 0; i < 3 - k_m.length; i++) {
                                addNbspString += "&nbsp;";
                            }

                            startString += addNbspString;

                            kmediuArray[1] = startString;

                            admisArray[45] = kmediuArray.join("="); 

                            // console.log(admisArray[45]);
                        } else {

                        }

                        if(htmlString.includes("Delta&nbsp;K")) {

                        } else {
                            
                        }

                        admisArray.splice(4, 4);
    

                        htmlString = admisArray.join("<BR>");
                        try {
                            fs.writeFile(writeFilePath, htmlString, (error) => {
                                if(error) return console.log(error);
                            });
                        } catch (err) { console.log(err)}
                    }
                
                    // let sentString = writeFilePath.replaceAll('\\', 'xxx');
                    let sentString = writeFilePath.replace(/\\/gi, 'xxx');
                    open("http://localhost:3000/editeaza_diesel/" + ral_rpm +"/" + regul_rpm + "/" + tbaza_s + "/" + k_m + "/" + sentString, {app: 'chrome'});
                }
            });

        }
        else return;
    });
         
};

const getNbsp = async (string, initialSize, customSize) => {
    let nbspString = '';
    let nbspSize   = initialSize + customSize - string.length;

    for (let i=0; i<nbspSize; i++) {
        nbspString += "&nbsp;";
    }    

    return nbspString;
}

const getKm = async (htmlString)  => {
    let k_m;
    let randomNumber;

    if(htmlString.includes("VAL&nbsp;REFERINTA&nbsp;K=1.00&nbsp;/m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")) {
        //k=1
        randomNumber = Math.floor(Math.random() * 12);
        k_m = randomNumber * 0.04;
       
    } else if(htmlString.includes("VAL&nbsp;REFERINTA&nbsp;K=1.50&nbsp;/m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")) {
        //k=1.5
        randomNumber = Math.floor(Math.random() * 24);
        k_m = randomNumber * 0.04 + 0.01;

    } else if(htmlString.includes("VAL&nbsp;REFERINTA&nbsp;K=2.50&nbsp;/m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")) {
        //k=2.5
        randomNumber = Math.floor(Math.random() * 11);
        k_m = randomNumber * 0.08 + 1.10;
        
    } else if(htmlString.includes("VAL&nbsp;REFERINTA&nbsp;K=3.50&nbsp;/m&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")) {
        //k=3.5
        randomNumber = Math.floor(Math.random() * 10);
        k_m = randomNumber * 0.12 + 1.10;
    } 
    return k_m;
}

readFoldersGas(dirPathGas);
readFoldersSmoke(dirPathSmoke);