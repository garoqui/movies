import { LitElement, html, css } from 'lit';
import 'fa-icons';

export class Credits extends LitElement {
  constructor() {
    super();
    this.country = '';
    this.genres = [];
    this.detail = {};
  }

  static get styles() {
    return css`
      .container {
        width: 90%;
        display: flex;
        padding: 30px;
        align-content: space-evenly;
      }

      .container div {
        align-items: flex-end;
      }

      .container-generes {
        margin-right: 20px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 40%;
      }

      .container-generes button {
        border-radius: 20px;
        border-style: solid;
        height: 30%;
        width: 80%;
        margin-left: 15px;
        padding: 12px;
        line-height: 2px;
        border-color: rgb(208, 215, 222);
        color: rgb(208, 215, 222);
      }

      .t-20 {
        width: 20%;
        line-height:2px;
      }
      .t-20 div {
        width: 50%;
        text-align: right;
      }

      .icons {
        justify-content: end;
        display: flex;
      }
    `;
  }

  static get properties() {
    return {
      country: { type: String },
      genres: { type: Array },
      detail: { type: Object },
    };
  }

  render() {
    return html`
      <div class="container">
        <div class="t-20">
          <h5>Director</h5>
          <a href="#">SD</a>
        </div>
        <div class="t-20">
          <h5>País</h5>
          <a href="#">${this.detail.production_countries[0].iso_3166_1}</a>
        </div>
        <div class="container-generes">
          ${this.detail.genres.map(
            res =>
              html`<button class="container-genres-item">${res.name}</button>`
          )}
        </div>
        <div class="t-20 icons">
          <div><fa-icon class="fa fa-share-alt"></fa-icon></div>
          <div><fa-icon class="fa fa-search-plus"></fa-icon></div>
        </div>
      </div>
    `;
  }
}
