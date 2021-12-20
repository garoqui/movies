import { MOVIESPOPULARURL, TVPOPULARURL, MULTIURL } from '../constants/api.js';

export const MOVIESENDPOINTS = {
  getPopularMovies: async (page) => {
    try {
      const popular = await fetch(MOVIESPOPULARURL+page).then(data => data.json());
      console.log(popular)
      return popular;
    } catch (error) {
      return error;
    }
  },

  getPopularSeries: async (page) => {
    try {
      const popular = await fetch(TVPOPULARURL+page).then(data => data.json());
      return popular;
    } catch (error) {
      return error;
    }
  },

  getMulti: async (query, page) => {
    try {
      const multi = await fetch(`${MULTIURL + page  }&include_adult=false&query=${  query}`).then(data => data.json());
      return multi;
    } catch (error){return error;}
  },
};
