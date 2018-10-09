import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/find?units=metric&appid=c408b39fc1af9b1d70df69141de6059d';

module.exports = {
  getTemp(location) {
    const encodedLocation = encodeURIComponent(location);
    const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    let temp;

    return axios.get(requestUrl)
      .then((resp) => {
        if (resp.data.count === 0) {
          throw new Error('Not found');
        } else {
          temp = resp.data.list[0];
          return axios.get(`https://restcountries.eu/rest/v2/alpha/${temp.sys.country}`);
        }
      })
      .then((resp) => {
        temp.countryName = resp.data.name;
        return temp;
      })
      .catch((error) => {
        throw error;
      })
  },
};

