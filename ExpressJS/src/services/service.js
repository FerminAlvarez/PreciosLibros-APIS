const axios = require('axios');

async function getBookPrice(URL, ISBN) {
    return await axios.get(URL + "/" + ISBN)
    .then(response => response.data);
}

module.exports = {
    getBookPrice
}