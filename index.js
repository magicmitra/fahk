const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/.env') });

const pull = async () => {
    const data = await axios.get(`https://${process.env.API_HOST}/sports/2/events/2019-09-29`, {
        query: {
            'include': [
                'scores',
                'all_periods',
            ],
            'offset': '0',
        },
        headers: {
            'x-rapidapi-host': `${process.env.API_HOST}`,
            'x-rapidapi-key': `${process.env.API_KEY}`,
        },
    });
        /**
        * data.events -> fucking array
        * data.events[index].teams_normalized[0].abbreviation (away team abbr)
        * data.events[index].teams_normalized[1].abbreviation (home team abbr)
        * data.events[index].score.score_away
        * data.events[index].score.score_home
        */
    const games = [];
    for(let i = 0; i < data.data.events.length; i++) {
        games.push({
            team_away: data.data.events[i].teams_normalized[0].abbreviation,
            team_home: data.data.events[i].teams_normalized[1].abbreviation,
            // score_away: data.data.events[i].score.score_away,
            // score_home: data.data.events[i].score.score_home,
            score: data.data.events[i].score,
        });
    }
    return games;
    //return data.data.events;
}

pull().then((data) => console.log(data));
