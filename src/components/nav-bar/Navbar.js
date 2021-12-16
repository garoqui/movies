import { LitElement, html, css} from "lit";
import 'fa-icons';

import '../menu/app-menu.js'


// const logo = new URL('./assets/logo.png', import.meta.url).href;

export class Navbar extends LitElement{

    static get properties(){
        return {
            logo: { type: String},
            menuIsOpen : { type : String}
        }
     }

    static get styles(){
        return css`
        .container{
            background-color : black;
            height:45px;
            width:100%;
            display: flex;            
            
        }

        .container-logo{
          width:50%;
          height:100%;
          padding-left:20px;
        }

        .container-logo img{
            max-height : 100%;
            width:10%;
        }

        .container-button-menu{
            width:50%;
            color : white;
            text-align:right;
            padding-top: 10px;
            padding-right: 30px;
            z-index:10000;
        }

        fa-icon{
            cursor:pointer;
        }

        `;
    }

    constructor()
        {
            super();
            this.logo="assets/logo.png";
            this.menuIsOpen = "none";
        }
    
    
    render(){
        return html`<div class="container">
             <div class="container-logo" > <img alt="movies logo" src=${this.logo} /></div>
            <div class="container-button-menu"><fa-icon class="fas fa-bars" @click=${this.showMenu}></fa-icon></div>
           
            </div>
            <app-menu .showMenu=${this.menuIsOpen}></app-menu>`
    }

    showMenu(){
        if(this.menuIsOpen === "none"){
            this.menuIsOpen = "block"  
        } else{
            this.menuIsOpen = "none"
        }
        console.log(this.menuIsOpen)
    } 
}