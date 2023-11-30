const axios = require('axios')

const url = 'https://newsapi.org/v2/everything?q=tesla&from=2023-10-30&sortBy=publishedAt&apiKey=0bf01d8be29347cc81aea76eca698c78&pageSize=10&language=en';

module.exports = async function () {
    try {
        const response = await axios.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}