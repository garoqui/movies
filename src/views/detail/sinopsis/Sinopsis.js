import { LitElement, html, css } from 'lit';

export class Sinopsis extends LitElement {
  constructor() {
    super();
    this.overview = '';
  }

  static get styles() {
    return css`
      .container {
        display: flex;
        flex-flow:column wrap;
        flex:1;
        
      }

      p {
        width: 100%;
      }

      button{
          border-radius:15px;
          padding : 0px 15px px 15px;
      }

      .dark{
          background-color: black;
          color: white;
      }

      .container-buttons{
          width:100%;
      }

      .container-overview{
          width:100%;
      }
    `;
  }

  static get properties() {
    return {
      overview: { type: String },
    };
  }

  render() {
    return html`
      <div><h2>Sinopsis</h2></div>
      <div class="container">
        <div class="container-overview"><p>${this.overview}</p></div>
        <div class="container-buttons"><button class="dark">Visualizar</button> <button>Descargar</button></div>
      </div>
    `;
  }
}
