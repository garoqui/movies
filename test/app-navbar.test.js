import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/components/nav-bar/app-navbar.js';

describe('NavBar', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<app-navbar></app-navbar>`);
  });

  it('renders a img', () => {
    const img = element.shadowRoot.querySelector('img');
    expect(img).to.exist;    
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
