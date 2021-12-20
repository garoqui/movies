import { LitElement, html, css } from 'lit';
import { MOVIESIMGURLW500 } from '../../constants/api.js';
import '../ranking/app-ranking.js';

export class Card extends LitElement {
  constructor() {
    super();
    this.item = {};
    this.imgMovie = '';
    this.kindOfList = '';
    this.noimage = "/assets/no-image-found.png"
  }

  static get properties() {
    return {
      imgMovie: { type: String },
      items: { type: Object },
      kindOfList: { type: String },
      noimage : { type : String}
    };
  }

  static get styles() {
    return css`
      .container-card {
        overflow: hidden;
        margin: 2px;
      }

      .container-card img {
        width: 100%;
        border-radius: 15px;
        overflow:hidden;
        height:100%;
      }

      .container-ranking {
        display: flex;
        width: 100%;
        /* justify-content: space-evenly; */
      }

      /* @media only screen and (max-width: 988px) {
        .container {
          flex-wrap: wrap;
        }
      } */
    `;
  }

  render() {
    return html`<div class="container-card">
      <img
        alt=${this.item.title}
        src=${this.item.backdrop_path ? MOVIESIMGURLW500 + this.item.backdrop_path : this.noimage}
      />
      ${this.item.name
        ? html`<div><strong>${this.item.name}</strong></div>`
        : html`<div><strong>${this.item.title}</strong></div>`}
      <div class="container-ranking">
        <div>${this.item.vote_average}</div>
        <div><app-ranking .rate=${this.item.vote_average}></app-ranking></div>
      </div>
    </div>`;
   
  }
}
