export default class OverlayMenu {
  selector = {
    root: '[data-js-overlay-menu]',
    dialog: '[data-js-overlay-menu-dialog]',
    burger: '[data-js-overlay-menu-burger]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selector.root)
    this.dialogElenent = this.rootElement.querySelector(this.selector.dialog)
    this.burgerElement = this.rootElement.querySelector(this.selector.burger)
    this.bindEvents()
  }

  onBurgerClick = () => {
    this.burgerElement.classList.toggle(this.stateClasses.isActive)
    this.dialogElenent.open = !this.dialogElenent.open
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  bindEvents() {
    this.burgerElement.addEventListener('click', this.onBurgerClick)
  }
}
