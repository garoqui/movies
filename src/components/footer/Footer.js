import { LitElement, html, css } from 'lit';
import { ITEMSFOOTER } from '../../constants/footerItems.js';

export class Footer extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-size: 0.9rem;
      }
      li {
        list-style: none;
        text-align: left;
        padding: 0.5rem;
        font-size: 12px;
        cursor: pointer;
      }
      .container {
        
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: black;
        color: white;
        text-align: center;
        padding: 15px;
      }

      .container-h1 {
        display: flex;
        width: 100%;
      }
      .container-columns {
        display: flex;
        width: 100%;
        justify-content: space-evenly;
      }
    `;
  }

  static get properties() {
    return {
      itemsFooter: { Type: Array },
    };
  }

  constructor() {
    super();
    this.itemsFooter = ITEMSFOOTER;
  }

  render() {
    return html`<div class="container">
      <div class="container-h1"></div>
      <h1>${this.itemsFooter[0].head}</h1>
      <div class="container-columns">
        <div>
          <ul>
            ${this.itemsFooter[1].firstColumn.map(res => html`<li>${res}</li>`)}
          </ul>
        </div>
        <div>
          <ul>
            ${this.itemsFooter[2].secondColumn.map(
              res => html`<li>${res}</li>`
            )}
          </ul>
        </div>
        <div>
          <ul>
            ${this.itemsFooter[3].thirdColumn.map(res => html`<li>${res}</li>`)}
          </ul>
        </div>
        <div>
          <ul>
            ${this.itemsFooter[4].fourthColumn.map(
              res => html`<li>${res}</li>`
            )}
          </ul>
        </div>
      </div>
    </div>`;
  }
}
