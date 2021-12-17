import { LitElement, html, css } from 'lit';

import {
  getMostPopularMovies,
  getMostPopularTV,
} from '../../respository/movies.js';

// components
import '../../components/slider/app-slider.js';
import '../../components/news/app-news.js';
import '../../components/series/app-series.js';

export class Home extends LitElement {
  constructor() {
    super();
    this.mostPopular = [];
  }

  static get properties() {
    return {
      mostPopular: { type: Array },
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
      <app-slider .popularMovies=${this.mostPopular}></app-slider>
      <app-news></app-news>
      <app-series></app-series>
    </div>`;
  }
}
