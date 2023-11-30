const axios = require('axios')
require('dotenv').config()

const url = `https://newsapi.org/v2/everything?q=tesla&from=2023-10-30&sortBy=publishedAt&apiKey=${process.env.API_KEY}&pageSize=10&language=en`;

module.exports = async function () {
    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}