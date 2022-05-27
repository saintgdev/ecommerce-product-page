export function hoverLinksMenu(arrayLinks) {
  arrayLinks.map(singleLink => {
    singleLink.addEventListener('mouseenter', () => {
      singleLink.parentElement.classList.add('header-menu__item--show')
    })
    singleLink.addEventListener('mouseleave', () => {
      singleLink.parentElement.classList.remove('header-menu__item--show')
    })
  })
}