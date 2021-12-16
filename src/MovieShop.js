import { LitElement, html, css } from 'lit'
import './components/nav-bar/app-navbar.js'
import './components/footer/app-footer.js'

// const logo = new URL('assets/open-wc-logo.svg', import.meta.url).href;

export class MovieShop extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
      }

      main {
        width: 100%;
        margin: 0 auto;
        min-height:100vh;        
      }     
    `;
  }

  constructor() {
    super();
    this.title = 'Movies';
  }

  render() {
    return html`
      <main>
        <app-navbar></app-navbar>        
      
      <app-footer></app-footer>     
      </main>
    `;
  }
}
