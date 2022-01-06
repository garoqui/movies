/* eslint-disable no-unneeded-ternary */
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

  it('remove token in localstorage', async () => {
    // await element.startSesion();
    await element.closeSesion();
    const token = localStorage.getItem('token');
    expect(token).to.equal(null);
  });

  it('start sesion ok', async () => {
    await element.startSesion();
    // await element.closeSesion();
    const token = localStorage.getItem('token') ? true : false;
    console.log(token)
    expect(token).to.equal(true);
  });

  // testing a funciones
  // it('suma works', async () => {
  //   const resultado = await element.suma(3, 3);
  //   expect(resultado).to.equal(2);
  // });
});
