import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

// components
import './components/nav-bar/app-navbar.js';
import './components/footer/app-footer.js';
import './views/home/view-home.js';
import './views/movies/view-movies.js';
import './views/searchResult/view-search-result.js';
import './views/detail/app-detail.js';

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
        width: 95%;
        margin: 0 auto;
        min-height: 100vh;
      }
    `;
  }

  firstUpdated() {
    const node = this.renderRoot.querySelector('main');
    const router = new Router(node);

    router.setRoutes([
      { path: '/', component: 'view-home' },
      { path: '/home', component: 'view-home' },
      { path: '/movies', component: 'view-movies' },
      { path: '/search', component: 'view-search-result' },
      { path: '/detail', component: 'view-detail' },
    ]);
  }

  constructor() {
    super();
    this.title = 'Movies';
  }

  render() {
    return html`
      <app-navbar></app-navbar>
      <main></main>
      <app-footer></app-footer>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('app-search', this.goResults);
  }

  disconnectedCallback() {
    window.removeEventListener('app-search', this.goResults);
    super.disconnectedCallback();
  }

  goResults(e){
    const { detail} = e;
    Router.go({
      pathname: "/search",
      search :`?query=${detail}`
    })
  }
}
