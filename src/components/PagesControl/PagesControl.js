import { LitElement, html } from 'lit';

export class PagesControl extends LitElement {
  constructor() {
    super();
    this.items = {};
    this.pages = [];
  }

  static get properties() {
    return {
      items: { type: Object },
      pages: { type: Array },
    };
  }

  render() {
    return html` <h1>${this.items.total_pages}</h1> `;
  }
}
