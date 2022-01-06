/* eslint-disable class-methods-use-this */
/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, html, css } from 'lit';
import 'fa-icons';

import { login } from '../../services/auth/auth.js';

import '../menu/app-menu.js';

export class Navbar extends LitElement {
  static get properties() {
    return {
      logo: { type: String },
      menuIsOpen: { type: String },
      result : { type: String}
    };
  }

  static get styles() {
    return css`
      .container {
        background-color: black;
        height: 45px;
        width: 100%;
        display: flex;
      }

      .container-logo {
        width: 50%;
        height: 100%;
        padding-left: 20px;
      }

      .container-logo img {
        max-height: 100%;
        width: 10%;
      }

      .container-button-menu {
        width: 50%;
        color: white;
        text-align: right;
        padding-top: 10px;
        padding-right: 30px;
        z-index: 10000;
      }
      .container-button-menu span {
        cursor: pointer;
        padding-left: 20px;
        padding-right: 20px;
        padding: 0px, 20px, 0px, 20px;
      }

      fa-icon {
        cursor: pointer;
      }

      #resultado {
         color:white
      }
    `;
  }

  constructor() {
    super();
    this.logo = 'assets/logo.png';
    this.menuIsOpen = 'none';
  }

  render() {
    return html`<div class="container">
        <div class="container-logo">
          <img alt="movies logo" src=${this.logo} />
        </div>
        <div class="container-button-menu">
       
          <!-- eslint-disable-next-line lit-a11y/click-events-have-key-events -->
          <span @click=${this.startSesion}>Iniciar Sesion </span>
          <span @click=${this.closeSesion}> Cerrar Sesion </span>
          <fa-icon class="fas fa-bars" @click=${this.showMenu}></fa-icon>
        
        </div>
        <button id="boton" @click=${()=>this.suma(2,3)}>sumar</button>
        <div id="resultado">${this.result}</div>
      </div>
      <app-menu .showMenu=${this.menuIsOpen}></app-menu>`;
  }

  showMenu() {
    if (this.menuIsOpen === 'none') {
      this.menuIsOpen = 'block';
    } else {
      this.menuIsOpen = 'none';
    }
  }

  // suma(a,b) {
  //   this.result = a+b
  //   return a+b
  // }

  // eslint-disable-next-line class-methods-use-this
  async startSesion() {
    const token = await login().then(res => res);
    localStorage.setItem('token', token.request_token);
  }

  closeSesion() {
    localStorage.removeItem('token');
  }
}
