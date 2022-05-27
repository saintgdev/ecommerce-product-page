import {toggleClass} from './toggle-class.js'
import {productSlider, thumbnailsChange} from './product-slider.js'
import {hoverLinksMenu} from './hover-link-menu.js'

// Variables
const iconMenu = document.getElementById('icon-menu')
const headerNav = document.getElementById('header-nav')
const darkOverlay = document.getElementById('dark-overlay')

// 
const iconCart = document.getElementById('icon-cart')
const cartCheckout = document.getElementById('cart-checkout')
const iconRemove = document.getElementById('remove-item')
const cartNotEmpty = document.getElementById('cart-not-empty')
const checkoutPrice = document.getElementById('checkout-price')
const cartEmpty = document.getElementById('cart-empty')

// 
const slidesContainer = document.getElementById('slides-container')
const slidePrev = document.getElementById('slide-prev')
const slideNext = document.getElementById('slide-next')

// 
const iconRemoveAmount = document.getElementById('remove-amount')
const iconAddAmount = document.getElementById('add-amount')
const totalAmount = document.getElementById('total-amount')


const lightbox = document.getElementById('lightbox-gallery')
const lightboxIconPrev = document.getElementById('lightbox-prev')
const lightboxIconNext = document.getElementById('lightbox-next')
const lightboxSlider = document.getElementById('slider-images')
const lightboxIconClose = document.getElementById('lightbox-icon__close')

const productViewImg = document.getElementById('product-view__img')

const allLinksMenu = Array.from(document.querySelectorAll('.header-menu__link'))

const allThumbnailsLightbox = document.querySelectorAll('.gallery-thumbnails__cover')

// 
const btnAddCart = document.getElementById('btn-add')

const allThumbnailsProduct = document.querySelectorAll('.product-thumbnails__cover')
const mainImgDesktop = document.getElementById('product-view__img')


// Function Toggle
toggleClass(iconMenu, headerNav, 'header-nav--show')
toggleClass(iconMenu, darkOverlay, 'header__overlay--show')
toggleClass(iconMenu, iconMenu, 'icon-menu--show')

toggleClass(iconCart, cartCheckout, 'cart-checkout--show')

productSlider(slideNext, slidesContainer, 'next')
productSlider(slidePrev, slidesContainer, 'prev')

productSlider(lightboxIconPrev, lightboxSlider, 'prev', allThumbnailsLightbox)
productSlider(lightboxIconNext, lightboxSlider, 'next', allThumbnailsLightbox)

thumbnailsChange(allThumbnailsLightbox, lightboxSlider)


productViewImg.addEventListener('click', () => {
  lightbox.classList.add('lightbox-gallery--show')
})
lightboxIconClose.addEventListener('click', () => {
  lightbox.classList.remove('lightbox-gallery--show')
})


let amount = 0

function addAmountProduct() {
  amount++
  totalAmount.textContent = amount
}
function removeAmountProduct() {
  if(amount > 0){
    amount--
    totalAmount.textContent = amount
  }
}

function setTotalAmount() {
  if(amount > 0) {
    iconCart.classList.add('icon-cart--show')
    iconCart.children[0].textContent = amount
  }else{
    iconCart.classList.remove('icon-cart--show')
    iconCart.children[0].textContent = ''
  }
  showCart()
  setTotalPrice()
}

function setTotalPrice() {
  if(amount > 0){
    let totalPrice = 125 * amount
    checkoutPrice.innerHTML = `$125.00 x ${amount} <b>$${totalPrice}.00</b>`
  }else{
    checkoutPrice.innerHTML = ''
  }
}

function showCart() {
  if(amount > 0){
    cartNotEmpty.classList.add('cart-checkout__action--show')
    cartEmpty.classList.add('cart-checkout__empty--hidden')
  }else{
    cartNotEmpty.classList.remove('cart-checkout__action--show')
    cartEmpty.classList.remove('cart-checkout__empty--hidden')
  }
}

function removeItemCart() {
  amount = 0
  totalAmount.textContent = '0'
  setTotalAmount()
}

btnAddCart.addEventListener('click', setTotalAmount)
iconRemove.addEventListener('click', removeItemCart)
iconAddAmount.addEventListener('click', addAmountProduct)
iconRemoveAmount.addEventListener('click', removeAmountProduct)



hoverLinksMenu(allLinksMenu)





Array.from(allThumbnailsProduct).map(singleThumbnail => {
  singleThumbnail.addEventListener('click', (e) => {
    removeClass()
    singleThumbnail.classList.add('product-thumbnails__cover--actived')
    mainImgDesktop.src = `./images/${singleThumbnail.children[0].alt}.jpg`
    
  })
})
function removeClass() {
  Array.from(allThumbnailsProduct).map(singleThumbnail => {
    singleThumbnail.classList.remove('product-thumbnails__cover--actived')
  })
}

export function removeClassLightbox() {
  Array.from(allThumbnailsLightbox).map(singleThumbnail => {
    singleThumbnail.classList.remove('gallery-thumbnails__cover--actived')
  })
}