import { MOVIESPOPULARURL, TVPOPULARURL } from '../constants/api.js';

export const MOVIESENDPOINTS = {
  getPopularMovies: async () => {
    try {
      const popular = await fetch(MOVIESPOPULARURL).then(data => data.json());
      return popular;
    } catch (error) {
      return error;
    }
  },

  getPopularSeries: async () => {
    try {
      const popular = await fetch(TVPOPULARURL).then(data => data.json());      
      return popular;
    } catch (error) {
      return error;
    }
  },
};
