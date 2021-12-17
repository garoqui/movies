import { LitElement, html, css } from 'lit';
import { MOVIESIMGURLW500 } from '../../constants/api.js';
import '../ranking/app-ranking.js';

export class Card extends LitElement {
  constructor() {
    super();
    this.items = [];
    this.imgMovie = '';
    this.kindOfList = '';
  }

  static get properties() {
    return {
      imgMovie: { type: String },
      items: { type: Array },
      kindOfList: { type: String },
    };
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
        row-gap: 5px;
        column-gap: 40px;
        padding: 10px;
      }

      .container-card {
        overflow: hidden;
        margin: 2px;
      }

      .container img {
        width: 100%;
        border-radius: 15px;
      }

      .container-ranking {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
      }

      @media only screen and (max-width: 988px) {
        .container {
          flex-wrap: wrap;
        }
      }
    `;
  }

  render() {
    return html`<div class="container">${this.items.map(
      res =>
        html`<div class="container-card">
          <img alt=${res.title} src=${MOVIESIMGURLW500 + res.backdrop_path} />
          ${this.kindOfList === 'series'
            ? html`<div><strong>${res.name}</strong></div>`
            : html`<div><strong>${res.title}</strong></div>`}
          <div class="container-ranking">
            <div>${res.vote_average}</div>
            <div><app-ranking .rate=${res.vote_average}></app-ranking></div>
          </div>
        </div>`
    )}</div></div>`;
  }
}
