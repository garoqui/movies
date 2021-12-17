import { LitElement, html, css } from 'lit';
import { getMostPopularMovies } from '../../respository/movies.js';
import '../card/app-card.js';

export class News extends LitElement {
  constructor() {
    super();
    this.mostPopular = [];
    this.kindOfList = 'movies';
  }

  static get properties() {
    return {
      mostPopular: { type: Array },
      kindOfList: { type: String },
    };
  }

  static get styles() {
    return css`
      .container {
        margin: 10px;
      }
      .container-header {
        display: flex;
        justify-content: space-between;
      }
    `;
  }

  async firstUpdated() {
    const popularListMovies = await getMostPopularMovies();
    this.mostPopular = popularListMovies.slice(2, 7);
    console.log(this.mostPopular);
  }

  render() {
    return html`
      <div class="container">
        <div class="container-header">
          <div><h1>News</h1></div>
          <div><h3>Ver todas</h3></div>
        </div>
        <app-card
          .items=${this.mostPopular}
          .kindOfList=${this.kindOfList}
        ></app-card>
      </div>
    `;
  }
}
