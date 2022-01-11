import { LitElement, html, css } from 'lit';
import { getMostPopularTV } from '../../respository/movies.js';
import '../card/app-card.js';

export class Series extends LitElement {
  constructor() {
    super();
    this.mostPopular = [];
    this.kindOfList = 'series';
    this.kind = "tv";
  }

  static get properties() {
    return {
      mostPopular: { type: Array },
      kindOfList: { type: String },
      kind : { type : String}
    };
  }

  static get styles() {
    return css`
     .container {
        margin: 10px;
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        row-gap: 5px;
        column-gap: 40px;
        padding: 10px;
      }
      .container-header {
        display: flex;
        justify-content: space-between;
      }
    `;
  }

  async firstUpdated() {
    const popularListMovies = await getMostPopularTV();
    this.mostPopular = popularListMovies.slice(2, 7);
  }

  render() {
    return html`
      <div class="container-header">
        <div><h1>Series</h1></div>
        <div><h3>Ver todas</h3></div>
      </div>
      <div class="container">
        ${this.mostPopular.map(
          res => html`<div><app-card .item=${res} .kind=${this.kind}></app-card></div>`
        )}
      </div>
    `;
  }
}
