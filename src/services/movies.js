import {
  MOVIESPOPULARURL,
  TVPOPULARURL,
  MULTIURL,
  DETAILMOVIEURL,
  DETAILSERIESURL,
  REPARTOMOVIEURL,
  REPARTOTVURL,
} from '../constants/api.js';

export const MOVIESENDPOINTS = {
  getPopularMovies: async page => {
    try {
      const popular = await fetch(MOVIESPOPULARURL + page).then(data =>
        data.json()
      );
      return popular;
    } catch (error) {
      return error;
    }
  },

  getPopularSeries: async page => {
    try {
      const popular = await fetch(TVPOPULARURL + page).then(data =>
        data.json()
      );
      return popular;
    } catch (error) {
      return error;
    }
  },

  getMulti: async (query, page) => {
    try {
      const multi = await fetch(
        `${MULTIURL + page}&include_adult=false&query=${query}`
      ).then(data => data.json());
      return multi;
    } catch (error) {
      return error;
    }
  },

  getDetail: async (id, kind) => {
    try {
      let detail = '';
      if (kind === 'movie') {
        detail = await fetch(DETAILMOVIEURL(id)).then(data => data.json());
        return detail;
      }
      detail = await fetch(DETAILSERIESURL(id)).then(data => data.json());
      return detail;
    } catch (error) {
      return error;
    }
  },

  getReparto: async (id, kind) => {
    console.log(REPARTOMOVIEURL(id))
    try {
      let reparto = '';
      if (kind === 'movie') {
        reparto = await fetch(REPARTOMOVIEURL(id)).then(res => res.json());
      } else {
        reparto = await fetch(REPARTOTVURL(id)).then(res => res.json());
      }
      return reparto;
    } catch (error) {
      return error;
    }
  },
};
