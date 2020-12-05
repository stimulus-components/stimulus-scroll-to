import { Controller } from 'stimulus'

export default class extends Controller {
  static values = {
    offset: Number,
    behavior: String
  }

  initialize () {
    this.scroll = this.scroll.bind(this)
  }

  connect () {
    this.element.addEventListener('click', this.scroll)

    this.offset = this.offsetValue || this.defaultOptions.offset || 10
    this.behavior = this.behaviorValue || this.defaultOptions.behavior || 'smooth'
  }

  disconnect () {
    this.element.removeEventListener('click', this.scroll)
  }

  scroll (event) {
    event.preventDefault()

    const id = this.element.hash.replace(/^#/, '')
    const target = document.getElementById(id)

    if (!target) {
      console.warn(`[stimulus-scroll-to] The element with the id: "${id}" does not exist on the page.`)
      return
    }

    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - this.offset

    window.scrollTo({
      top: offsetPosition,
      behavior: this.behavior
    })
  }

  get defaultOptions () {
    return {}
  }
}
