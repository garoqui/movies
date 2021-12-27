import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/movie-shop.js';

describe('MovieShop', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<movie-shop></movie-shop>`);
  });


  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  it('renders navbar component', async () =>{
    const comp = element.shadowRoot.querySelector('app-navbar');
    expect(comp).to.exist;
  });

  it('renders main component', ()=>{
    const comp = element.shadowRoot.querySelector('main');
    expect(comp).to.exist;
  })

  it('renders footer component', ()=>{
    const comp = element.shadowRoot.querySelector('app-footer');
    expect(comp).to.exist
  })
});
