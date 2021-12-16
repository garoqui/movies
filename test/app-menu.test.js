import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/components/menu/app-menu.js';

describe('Menu', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<app-menu></app-menu>`);
  });

  it('renders a nav', () => {
    const nav = element.shadowRoot.querySelector('nav');
    expect(nav).to.exist;    
  });

  it('renders a ul', () => {
    const ul = element.shadowRoot.querySelector('ul');
    expect(ul).to.exist;    
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
