const axios = require('axios');

const req = axios(`GET https://therundown-therundown-v1.p.rapidapi.com/sports/2/events`);

req.query({
    'include': [
        'all_periods',
        'scores'
    ]
});

req.headers({
    'x-rapidapi-host': 'therundown-therundown-v1.p.rapidapi.com',
    'x-rapidapi-key': ``,
});