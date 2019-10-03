const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/.env') });

const pull = async () => {
    const data = await axios.get(`https://${process.env.API_HOST}/events/04c5cb09dd60999e24b487b6c3d693f7`, {
        query: {
            'include': [
                'scores',
                'all_periods',
            ],
        },
        headers: {
            'x-rapidapi-host': `${process.env.API_HOST}`,
            'x-rapidapi-key': `${process.env.API_KEY}`,
        },
    });
    return data.data;
}

pull().then((data) => console.log(data));
