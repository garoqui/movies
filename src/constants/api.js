import {API_KEY} from '../../config.js'

export const MOVIESPOPULARURL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`

export const TVPOPULARURL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=`

export const MOVIESIMGURL = "https://image.tmdb.org/t/p/original/"

export const MOVIESIMGURLW500 = "https://image.tmdb.org/t/p/w500/"

export const MULTIURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&page=`