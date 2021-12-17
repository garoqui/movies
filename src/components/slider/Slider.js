import { LitElement, html, css } from 'lit';
import { MOVIESIMGURL } from '../../constants/api.js';

export class Slider extends LitElement {
  constructor() {
    super();
    this.popularMovies = [];
    this.imgSlider = '';
  }

  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      popularMovies: { type: Array },
      imgSlider: { type: String },
    };
  }

  connectedCallback() {
    // be sure to call the super
    let pos = 0;
    super.connectedCallback();
    this.interval = window.setInterval(() => {
      if (pos === 4) {
        pos = 0;
      }
      this.imgSlider = this.popularMovies[pos];
      pos += 1;
    }, 3000);
  }

  render() {
    return html`
      <style>
        .container-img {
          width: 300px;
          height: 300px;
          background-image: url(${MOVIESIMGURL + this.imgSlider.backdrop_path});
          background-color: black;
          transition-duration: 500ms;
          background-size: cover;
          width:100%;
        }

        .container-img:valid {
          width: 300px;
          height: 300px;
          background-color: white;
          transition-duration: 500ms;
          background-image: url(${MOVIESIMGURL + this.imgSlider.backdrop_path});
        }
      </style>
      <div class="container-img"></div>
    `;
  }
}
