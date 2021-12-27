import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

import { MOVIESIMGURLW500 } from '../../constants/api.js';

import '../ranking/app-ranking.js';

export class Card extends LitElement {
  constructor() {
    super();
    this.item = {};
    this.imgMovie = '';
    this.kindOfList = '';
    this.noimage = '/assets/no-image-found.png';
  }

  static get properties() {
    return {
      imgMovie: { type: String },
      items: { type: Object },
      kindOfList: { type: String },
      noimage: { type: String },
    };
  }

  static get styles() {
    return css`
      .container-card {
        overflow: hidden;
        margin: 2px;
        cursor: pointer;
      }

      .container-card img {
        width: 100%;
        border-radius: 15px;
        overflow: hidden;
        height: 100%;
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

  goDetail() {
    Router.go({
      pathname: '/detail',
      search: `?id=${this.item.id}&kind=${this.item.media_type}`,
    });
  }

  stateChanged(state) {
    this.favorites = state.reducer.favorites;
  }

  isFavorite(item) {
    const resu = this.favorites.find(favorite => favorite.task.id === item.id);
    if (resu) {
      return true;
    }
    return false;
  }

  render() {
    // eslint-disable-next-line lit-a11y/click-events-have-key-events
    return html`<div class="container-card" @click=${this.goDetail}>
      <img
        alt=${this.item.title}
        src=${this.item.backdrop_path
          ? MOVIESIMGURLW500 + this.item.backdrop_path
          : this.noimage}
      />
      ${this.item.name
        ? html`<div><strong>${this.item.name}</strong></div>`
        : html`<div><strong>${this.item.title}</strong></div>`}
      <div class="container-ranking">
        <div class="rk-1">${this.item.vote_average}</div>
        <div class="rk-2">
          <app-ranking .rate=${this.item.vote_average}></app-ranking>
        </div>
        <div>
          ${this.isFavorite(this.item)
            ? html` <div class="rk-3">
                <fa-icon
                  @click=${this.addMarginSlider}
                  class="fa fa-heart  isfavorite"
                ></fa-icon>
                <div></div>
              </div>`
            : html`<div class="rk-3">
                <fa-icon
                  @click=${this.addMarginSlider}
                  class="fa fa-heart"
                ></fa-icon>
              </div>`}
        </div>
      </div>
    </div>`;
  }
}
