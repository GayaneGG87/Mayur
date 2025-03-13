import {checkContentLength}  from './utils.js'

export const productCard = (item) => `
<div class="product-card card open-modal">
    <img src="assets/images/${item.img}" alt="${item.title}">
    <h4 class='content-title'>${item.title}</h4>
  <p class='description content-text'>
  ${checkContentLength(item.description, 100)}
  </p>
  <div class="details">
  <p class="right-side">${item.value}</p>
  <p class="left-dise"><sup>&#0036</sup>${item.price}</p>
  </div>
      <button class='btn-order btn-card' id="product-order">Order in bulk</button>
</div>`
  

export const testFn = (item) => `
<div class="item-card">
  <h4>${item.title}</h4>
  <p>${item.description}</p>
</div>`
  