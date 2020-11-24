import { Controller } from 'stimulus'

export default class extends Controller {
  initialize () {
    this.scroll = this.scroll.bind(this)
  }

  connect () {
    this.element.addEventListener('click', this.scroll)

    this.offset = this.data.get('offset') || this.defaultOptions.offset || 10
    this.behavior = this.data.get('behavior') || this.defaultOptions.behavior || 'smooth'
  }

  disconnect () {
    this.element.removeEventListener('click', this.scroll)
  }

  scroll (event) {
    event.preventDefault()

    const id = this.element.hash.replace(/^#/, '')
    const target = document.getElementById(id)

    if (!target) {
      console.warn(`The element with the id: "${id}" does not exist on the page.`)
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
