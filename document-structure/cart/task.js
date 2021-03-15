const quantityControls = Array.from(document.querySelectorAll('.product__quantity-control'));
const quantityValue = Array.from(document.querySelectorAll('.product__quantity-value'));
const addBtn = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart');
const cartProducts = document.querySelector('.cart__products');
const products = Array.from(document.querySelectorAll('.product'));

quantityControls.forEach(item => item.addEventListener('click', changeQuantity));
addBtn.forEach(item => item.addEventListener('click', addItem));

function changeQuantity(event) {
  if (event.target.classList.contains('product__quantity-control_dec')) {
    if (+event.target.nextElementSibling.textContent === 1) {
      return;
    }
    event.target.nextElementSibling.textContent--;
  } else if (event.target.classList.contains('product__quantity-control_inc')) {
    event.target.previousElementSibling.textContent++;
  }
}

function addItem(event) {
  const product = event.target.closest('.product');
  const productID = product.dataset.id;
  const imageSrc = product.getElementsByTagName('img')[0].src;
  const productCount = +product.querySelector('.product__quantity-value').textContent;
  const productsInCart = Array.from(document.querySelectorAll('.cart__product'));
  const isAdded = productsInCart.find(item => item.dataset.id === productID);
  
  if (cart.classList.contains('hidden')) {
    cart.classList.remove('hidden');
  }
  
  if (isAdded) {
    // почему не работает += ?
    isAdded.querySelector('.cart__product-count').textContent = +isAdded.querySelector('.cart__product-count').textContent + productCount;
    return;
  }

  cartProducts.insertAdjacentHTML('beforeend', `
    <div class="cart__product" data-id="${productID}">
      <img class="cart__product-image" src="${imageSrc}">
      <div class="cart__product-count">${productCount}</div>
      <a href="#" class="cart__product-remove">&times;</a>
    </div>
  `);

  cartProducts.addEventListener('click', removeProduct);
}

function removeProduct(event) {
  if (event.target.className !== 'cart__product-remove') {
    return;
  }

  event.target.closest('.cart__product').remove();

  if (cartProducts.children.length === 0) {
    cart.classList.add('hidden');
  }
}

