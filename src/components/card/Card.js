import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

//redux
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store.js';
import { addFavorite } from '../../redux/actions.js';

import { MOVIESIMGURLW500 } from '../../constants/api.js';
import 'fa-icons';

// components
import '../ranking/app-ranking.js';

export class Card extends connect(store)(LitElement) {
  constructor() {
    super();
    this.item = {};
    this.imgMovie = '';
    this.kindOfList = '';
    this.noimage = '/assets/no-image-found.png';
    this.favorites = [];
  }

  static get properties() {
    return {
      imgMovie: { type: String },
      items: { type: Object },
      kindOfList: { type: String },
      noimage: { type: String },
      favorites: { type: Array },
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
        justify-content: space-evenly;
      }
      .rk-1 {
        width: 15%;
      }
      .rk-2 {
        width: 40%;
      }
      .rk-3 {
        width: 15%;
      }
      fa-icon {
        color: #ff0055;
        filter: grayscale(100%);
      }

      .isfavorite {
        opacity: 1;
        filter: grayscale(5%);
      }
    `;
  }

  goDetail() {
    console.log(this.item);
    Router.go({
      pathname: '/detail',
      search: `?id=${this.item.id}&kind=${this.item.media_type}`,
    });
  }

  setFavorite() {
    store.dispatch(addFavorite(this.item));
    this.isFavorite(this.item);
  }

  stateChanged(state) {
    console.log(state.reducer.favorites);
    this.favorites = state.reducer.favorites;
    console.log(this.favorites);
  }

  isFavorite(item) {
    console.log(this.favorites);
    console.log(item.id);
    this.favorites.forEach(e => console.log(e.task.id));
    const resu = this.favorites.find(favorite => favorite.task.id === item.id);
    console.log(resu);
    if (resu) {
      return true;
    }
    return false;
  }

  render() {
    // eslint-disable-next-line lit-a11y/click-events-have-key-events
    return html`<div class="container-card">
      <div @click=${this.goDetail}>
        <img
          alt=${this.item.title}
          src=${this.item.backdrop_path
            ? MOVIESIMGURLW500 + this.item.backdrop_path
            : this.noimage}
        />
        ${this.item.name
          ? html`<div><strong>${this.item.name}</strong></div>`
          : html`<div><strong>${this.item.title}</strong></div>`}
      </div>
      <div class="container-ranking">
        <div class="rk-1">${this.item.vote_average}</div>
        <div class="rk-2">
          <app-ranking .rate=${this.item.vote_average}></app-ranking>
        </div>
        <div>
          ${this.isFavorite(this.item)
            ? html` <div class="rk-3" @click=${this.setFavorite}>
                <fa-icon
                  @click=${this.addMarginSlider}
                  class="fa fa-heart  isfavorite"
                ></fa-icon>
                <div></div>
              </div>`
            : html`<div class="rk-3" @click=${this.setFavorite}>
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
