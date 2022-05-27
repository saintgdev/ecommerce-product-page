export function toggleClass(handlerElement, itemToHandle, className) {
  handlerElement.addEventListener('click', () => {
    itemToHandle.classList.toggle(className)
  })
}