import { html} from 'lit';
import { fixture, expect} from  '@open-wc/testing';

import '../src/views/home/view-home.js';

describe('Home', ()=>{    
   let element;
   beforeEach(async ()=>{
       element= await fixture(html`<view-home></view-home>`);
   })

   it('render serch component', ()=>{
       const comp = element.shadowRoot.querySelector("app-search");
       expect(comp).to.exist;
   })



})