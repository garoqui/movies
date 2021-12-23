import { LitElement, html, css } from 'lit';
import 'fa-icons';
// import { starsHTML } from '../../constants/stars.js';

export class Ranking extends LitElement {
  constructor() {
    super();
    this.rate = 0;
    this.stars = [];
  }

  static get properties() {
    return {
      rate: { type: Number },
      stars: { type: Array },
    };
  }

  static get styles() {
    return css`
      fa-icon {
        color: #ffe400;
        filter: grayscale(100%);
      }

      .active {
        opacity: 1;
        filter: grayscale(5%);
      }
    `;
  }

  firstUpdated() {
    for (let i = 0; i < 5; i += 1) {
      this.stars.push(
        html`<fa-icon class="fa fa-star ${this.setActive(i)}"></fa-icon>`
      );
    }

    this.update();
  }

  render() {
    return html` <div>${this.stars.map(res => html`${res}`)}</div> `;
  }

  setActive(index) {
    const starsNumber = Math.trunc(this.rate) / 2;
    return index < starsNumber ? 'active' : '';
  }
}
