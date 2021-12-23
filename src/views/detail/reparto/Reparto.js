import { LitElement, html, css } from 'lit';
import { getReparto } from '../../../respository/movies.js';
import { MOVIESIMGURLW500 } from '../../../constants/api.js';
import 'fa-icons';

export class Reparto extends LitElement {
  constructor() {
    super();
    this.reparto = [];
    this.marginSlider = 0;
    this.classMargin ="0"
  }

  static get properties() {
    return {
      reparto: { type: Array },
      marginSlider : { type : String},
      classMargin:{ type : String}
    };
  }

  static get styles() {
    return css`
    fa-icon{
        color:red;
    }
    
      .container {
        /* display: flex; */
        width: 98%;
        position: relative;
        overflow: hidden;
        height: 400px;
      }

      .container-flechas {
        position: absolute;
        margin-top: 120px;
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 95%;
        padding: 20px;
      }
      .container-reparto {
        height: 100%;
        display: flex;
        padding: 20px;
        width: 100%;
      }

      .container-reparto div {
        display: inline-block;
        width: 12%;
        justify-content: space-evenly;
        text-align: center;
        padding: 20px;
      }

      .container-reparto div div {
        width: 100%;
      }

      .container-reparto img {
        width: 100%;
        border-radius: 60%;
      }
    `;
  }

  async firstUpdated() {
    this.reparto = await getReparto(1927, 'movie').then(res => res.cast);
  }

  render() {
    return html`
      <style>
        .margin-container {
          margin-left: ${this.classMargin};
        }
      </style>
      <h2>Reparto</h2>
      <div class="container">
        <div class="container-flechas">
          <fa-icon @click=${this.lessMarginSlider} class="fa fa-angle-left fa-lg"></fa-icon>
            
        </div>
        <div class="container-reparto margin-container">
          ${this.reparto.map(
            res => html`<div>
              <div>
                <img src=${MOVIESIMGURLW500 + res.profile_path} />
              </div>
              <div>${res.name}</div>
            </div>`
          )}
        </div>
      </div>
    `;
  } 

  lessMarginSlider(){
      this.marginSlider-= 100
      this.classMargin= "-50px"
      this.classMargin = this.classMargin.replace("-50",this.marginSlider)      
  }

  addMarginSlider(){
    this.marginSlider-= -100;
    this.classMargin= "-50px"
    this.classMargin = this.classMargin.replace("-50",this.marginSlider)      
}
}
