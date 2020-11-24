# Stimulus ScrollTo

[![](https://img.shields.io/npm/dt/stimulus-scroll-to.svg)](https://www.npmjs.com/package/stimulus-scroll-to)
[![](https://img.shields.io/npm/v/stimulus-scroll-to.svg)](https://www.npmjs.com/package/stimulus-scroll-to)
[![](https://github.com/stimulus-components/stimulus-scroll-to/workflows/Lint/badge.svg)](https://github.com/stimulus-components/stimulus-scroll-to)
[![](https://img.shields.io/github/license/stimulus-components/stimulus-scroll-to.svg)](https://github.com/stimulus-components/stimulus-scroll-to)

## Getting started

A Stimulus controller to scroll to elements.

## Installation

```bash
$ yarn add stimulus-scroll-to
```

And use it in your JS file:
```js
import { Application } from "stimulus"
import ScrollTo from "stimulus-scroll-to"

const application = Application.start()
application.register("scroll-to", ScrollTo)
```

## Usage

```html
<a href="#awesome-stuff-here" data-controller="scroll-to">Scroll to #awesome-stuff-here</a>

<h2 id="awesome-stuff-here">Awesome stuff here</h2>
```

With options:
```html
<a
  href="#awesome-stuff-here"
  data-controller="scroll-to"
  data-scroll-to-offset="150"
  data-scroll-to-behavior="auto"
>Scroll to #awesome-stuff-here</a>

<h2 id="awesome-stuff-here">Awesome stuff here</h2>
```

## Configuration

| Attribute | Default | Description | Optional |
| --------- | ------- | ----------- | -------- |
| `data-scroll-to-offset` | `10` | Offset in pixels from top of the element. | ✅ |
| `data-scroll-to-behavior` | `smooth` | The scroll behavior. `auto` or `smooth`. | ✅ |

## Extending Controller

You can use inheritance to extend the functionality of any Stimulus component.

```js
import ScrollTo from "stimulus-scroll-to"

export default class extends ScrollTo {
  connect() {
    super.connect()
    console.log("Do what you want here.")
  }

  // You can set default options in this getter for all your anchors.
  get defaultOptions () {
    return {
      offset: 100,
      behavior: 'auto'
    }
  }
}
```

This controller will automatically have access to targets defined in the parent class.

If you override the `connect`, `disconnect` or any other methods from the parent, you'll want to call `super.method()` to make sure the parent functionality is executed.

## Development

### Linter
[Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are responsible to lint and format this component:
```bash
$ yarn lint
$ yarn format
```

## Contributing

Do not hesitate to contribute to the project by adapting or adding features ! Bug reports or pull requests are welcome.

## Credits

This controller is inspired [excid3/tailwindcss-stimulus-components](https://github.com/excid3/tailwindcss-stimulus-components/blob/master/src/autosave.js).

## License

This project is released under the [MIT](http://opensource.org/licenses/MIT) license.
