import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';

export class Search extends LitElement {

  constructor(){
    super()
    this.searchValue = ""
  }


  static get properties(){
    return {
      searchValue : { type: String}
    }
  }

    static get styles(){
        return css`
        input{
            border-radius: 20px;
            padding:10px;
        }
        
        .container{
          position:fixed;
          margin-top:10px;
          right:0;
          margin-right:30px;
        }`
    }

    
  render() {
    return html` <div class="container"><input id="searchbox" type="text" .value=${this.searchValue} @input=${this.search} @keypress= ${this.sendSearch} placeholder="Search..."></div> `;
  }

  search(e){
        this.searchValue = e.target.value;
        console.log(e.target.value)
    // console.log(this.searchValue)
    
  }

  sendSearch(e){
    if(e.code==="Enter"){
      Router.go({
        pathname : '/search',
        search:'?query=spider'
        

      })
      this.dispatchEvent(new CustomEvent('app-search'),{
        detail : this.searchValue,
        bubbles:true,
        composed:true})
    }
  
  }
    
  


}