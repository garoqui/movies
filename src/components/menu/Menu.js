import { LitElement, html, css } from 'lit';
import { ITEMSMENU } from '../../constants/menu.js';

export class Menu extends LitElement {
  constructor() {
    super();
    this.isOpen = false;
    this.showMenu = 'none';
    this.itemsMenu = ITEMSMENU;
  }

  static get styles() {
    return css`
    li{
        list-style:none;
        padding-top:20px;
        font-size:2.5rem;
        cursor:pointer;
    }
    
    .container-items-menu {
        position: absolute;
        top: 30%;
        left: 50%;
        height: 30%;
        width: 50%;
        margin: -15% 0 0 -25%;
      }`;
  }

  static get properties() {
    return {
      isOpen: { type: String },
      showMenu: { type: String },
      itemsMenu: { type: Array },
    };
  }

  render() {
    return html` <style>
        .container {
          display: ${this.showMenu};
          background-color: black;
          position: fixed;
          text-align: center;
          color: white;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 9999;
        }
      
      </style>
      <div class="container">
        <div class="container-items-menu">
          <nav><ul>${this.itemsMenu.map(res => html`<li>${res}</li>`)}</ul></nav>
        </div>
      </div>`;
  }
}
