import { LitElement, html, css } from 'lit';

import {
  getMostPopularMovies,
  getMostPopularTV,
} from '../../respository/movies.js';

// components
import '../../components/slider/app-slider.js';
import '../../components/news/app-news.js';
import '../../components/series/app-series.js';
import '../../components/search/app-search.js'

export class Home extends LitElement {
  constructor() {
    super();
    this.mostPopular = [];
    this.search = "xx"
  }

  static get properties() {
    return {
      mostPopular: { type: Array },
      search : { type : String}
    };
  }

  static get styles() {
    return css`
      .container {
        margin: 15px;
      } 
       
    `;
  }

  async firstUpdated() {
    const popularListMovies = await getMostPopularMovies();
    const popularListTV = await getMostPopularTV();
    this.mostPopular = popularListMovies
      .slice(0, 2)
      .concat(popularListTV.slice(0, 2));

     
  }

  render() {
    return html` <div class="container">
        <app-search @app-search=${this.test}></app-search>
      <app-slider .popularMovies=${this.mostPopular}></app-slider>
      <app-news></app-news>
      <app-series></app-series>
    </div>`;
  }

  getSearch(e){
    this.search = e.detail
  }

  test(e){
    console.log(this.search)
      console.log(e)
  }

 
}
