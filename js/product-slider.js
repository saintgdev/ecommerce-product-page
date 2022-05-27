import {removeClassLightbox} from './index.js'

let slides = 0
export function productSlider(handlerElement, itemToHandle, actions, thumbnailsControl) {
  handlerElement.addEventListener('click', () => {
    if(actions == 'next' && slides < 3){
      slides++
      itemToHandle.style.transform = `translateX(-${slides}00%)`
    }
    if(actions == 'prev' && slides > 0){
      slides--
      itemToHandle.style.transform = `translateX(-${slides}00%)`
    }
    if(thumbnailsControl){
      thumbnailsControl[slides].click()
    }
  })
}

export function thumbnailsChange(allThumbnails, itemToHandle) {
  const arrayThumbnails = Array.from(allThumbnails)
  arrayThumbnails.map(singleThumbnail => {
    singleThumbnail.addEventListener('click', () => {
      removeClassLightbox()
      singleThumbnail.classList.add('gallery-thumbnails__cover--actived')
      if(singleThumbnail.classList.contains('slide-1')) {
          slides = 0
          itemToHandle.style.transform = `translateX(${slides}%)`
      }
      if(singleThumbnail.classList.contains('slide-2')) {
          slides = 1
          itemToHandle.style.transform = `translateX(-${slides}00%)`
      }
      if(singleThumbnail.classList.contains('slide-3')) {
          slides = 2
          itemToHandle.style.transform = `translateX(-${slides}00%)`
      }
      if(singleThumbnail.classList.contains('slide-4')) {
          slides = 3
          itemToHandle.style.transform = `translateX(-${slides}00%)`
      }
      
    })

  })
}