import { Controller } from 'stimulus'

interface Option {
  offset?: number
  behavior?: string
}

export default class extends Controller {
  offset: number
  behavior: string

  // @ts-ignore
  element: HTMLAnchorElement
  offsetValue: number
  behaviorValue: string

  static values = {
    offset: Number,
    behavior: String
  }

  initialize (): void {
    this.scroll = this.scroll.bind(this)
  }

  connect (): void {
    this.element.addEventListener('click', this.scroll)
  }

  disconnect (): void {
    this.element.removeEventListener('click', this.scroll)
  }

  scroll (event: Event): void {
    event.preventDefault()

    const id: string = this.element.hash.replace(/^#/, '')
    const target: HTMLElement = document.getElementById(id)

    if (!target) {
      console.warn(`[stimulus-scroll-to] The element with the id: "${id}" does not exist on the page.`)
      return
    }

    const elementPosition: number = target.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition: number = elementPosition - this.offset

    window.scrollTo(<ScrollToOptions>{
      top: offsetPosition,
      behavior: this.behavior
    })
  }

  get offset () {
    if (this.hasOffsetValue) {
      return this.offsetValue
    }

    if (this.defaultOptions.offset !== undefined) {
      return this.defaultOptions.offset
    }

    return 10
  }

  get behavior () {
    return this.behaviorValue || this.defaultOptions.behavior || 'smooth'
  }

  get defaultOptions (): Option {
    return {}
  }
}
