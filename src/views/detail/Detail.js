import { LitElement, html, css } from 'lit';
import { getDetail } from '../../respository/movies.js';
import { MOVIESIMGURL } from '../../constants/api.js';

// components
import './credits/app-credits.js';
import './sinopsis/app-sinopsis.js';
import './reparto/app-reparto.js'

export class Detail extends LitElement {
  constructor() {
    super();
    this.id = '';
    this.detail = {};
    this.img = '';
    this.production_countries = [];
  }

  static get properties() {
    return {
      id: { type: String },
      detail: { type: Object },
      production_countries: { type: Array },
    };
  }

  static get styles() {
    return css`
      .container {
        width: 98%;
        display: flex;
        flex-direction: column;
      }

      .container-img {
        width: 100%;
        height: 400px;
        overflow: hidden;
      }

      .container-img img {
        width: 100%;
      }

    
    `;
  }

  async firstUpdated() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const kind = params.get('kind');
    this.detail = await getDetail(id, kind);
    this.production_countries = this.detail.production_countries;
    console.log(this.detail)
  }

  render() {
    return html` <div class="container">
      <h1>Detalle</h1>
      <div class="container-img">
        <img
          alt=${this.title}
          src=${MOVIESIMGURL + this.detail.backdrop_path}
        />
      </div>

      <div class="container-detail">
        <app-credits .detail=${this.detail}></app-credits>
        <app-sinopsis .overview=${this.detail.overview}></app-sinopsis>
        <app-reparto></app-reparto>
      </div>
    </div>`;
  }
}
