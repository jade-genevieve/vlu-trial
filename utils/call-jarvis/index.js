
const { transform, prettyPrint } = require('camaro')
const fs = require('fs')

const axios = require('axios');
const config = require('../../config/index');


const callAPI = async ( vrm ) => {
    
    const options = {
        method: 'POST',
        url: config.url,
        data: {},
        params: {
            vrm: vrm || config.vrm,
            mileage: config.mileage,
            feedName: config.feedName,
            versionNumber: 2, 
            userName: config.userName,
            password: decodeURI(config.password),
        },
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    
    try {
        const response = await axios(options)
            .catch((error) => { throw error; });
            console.log("Status: ", response.status)
        return response.data;
    } catch (error) { console.error(error); }
    return false;
};

const makeJSON = async (xmlData) => {
    const template = JSON.parse(fs.readFileSync('./features/assets/template.JSON', 'utf8'))
    const result = await transform(xmlData, template)
    console.log('Converted to JSON: ', result)
    return result;
}

const parsedAPIResponse = async ( vrm ) => {
    const xmlData = await callAPI( vrm );
    const result = await makeJSON(xmlData)
    return result;
};

module.exports = { parsedAPIResponse };