import { MOVIESENDPOINTS } from '../services/movies.js';

// getting date by months ago
const dateMonthsAgo = months => {
  const date = new Date();
  date.setMonth(date.getMonth() - months);
  return date;
};

// getting two most popular
export const getMostPopular = async () => {
  let popularList = [];
  popularList = await MOVIESENDPOINTS.getPopularMovies("1").then(
    res => res.results
  );
  const resuMovies = popularList.filter(
    res => new Date(res.release_date) > dateMonthsAgo(2)
  );

  let popularTvList = [];
  popularTvList = await MOVIESENDPOINTS.getPopularSeries("1").then(
    res => res.results
  );
  const resuSeries = popularTvList.filter(
    res => new Date(res.first_air_date) > dateMonthsAgo(2)
  );

  const resu = resuMovies.slice(0, 2).concat(resuSeries.slice(0, 2));
  return resu;
};

// gettin most popular movies

export const getMostPopularMovies = async () => {
  let popularList = [];
  popularList = await MOVIESENDPOINTS.getPopularMovies("1").then(
    res => res.results
  );
  const resuMovies = popularList.filter(
    res => new Date(res.release_date) > dateMonthsAgo(2)
  );

  return resuMovies;
};
// getting most popular series
export const getMostPopularTV = async () => {
  let popularTvList = [];
  popularTvList = await MOVIESENDPOINTS.getPopularSeries("1").then(
    res => res.results
  );
  const resuSeries = popularTvList.filter(
    res => new Date(res.first_air_date) > dateMonthsAgo(2)
  );

  return resuSeries;
};

export const getMulti = async (query)=>{
  let multi = [];
  multi = await MOVIESENDPOINTS.getMulti(query).then(res=>res)
  console.log(multi)
  return multi
}
