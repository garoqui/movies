import { LitElement, html, css } from 'lit';
import { getMulti } from '../../respository/movies.js';
import '../../components/card/app-card.js';
import '../../components/PagesControl/app-pages-control.js'

export class SearchResult extends LitElement {
  constructor() {
    super();
    this.items = [];
    this.resu = [];
  }

  static get properties() {
    return {
      items: { type: Array },
      resu: { type: Array },
    };
  }

  static get styles() {
    return css`
      .container {
        margin: 10px;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        padding: 10px;
        justify-content: center;
        align-items: flex-start;
        row-gap: 10px;
        column-gap: 5px;
      }

      .container-header {
        padding: 10px;
      }

      .container-item {
        width: 33%;
        height: 100%;
      }
    `;
  }

  async firstUpdated() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    this.items = await getMulti(query).then(res => res);
    this.resu = await this.changeOrder();
  }

  async changeOrder() {
    const resu = [];
    const movies = this.items.results.filter(res => res.media_type === 'movie');
    const series = this.items.results.filter(res => res.media_type === 'tv');
    movies.forEach((element, index) => {
      resu.push(element);
      if (series[index]) {
        resu.push(series[index]);
      }
    });
    return resu;
  }

  render() {
    return html`<div class="container-header"><h1>Mi lista</h1></div>
      <div class="container">      
        ${this.resu.map(
          (res) =>
            html`<div class="container-item">
              <app-card .item=${res}></app-card>
            </div>`
        )} 
               
        </div> 
        <div class="container-pages"></div><app-pages-control .items=${this.items}></app-pages-control>       
      </div>`;
  }
}
