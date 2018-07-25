# H🔥TML

[![Build Status](https://travis-ci.org/daniel-lundin/hotml.svg?branch=master)](https://travis-ci.org/daniel-lundin/hotml)

Tiny helper(321 bytes) for creating complex DOM structues. Can be used as a target for JSX.

Example:

```js

const list = h.ul({class: 'list'}, [
  h.li({ onClick: (event) => {}}, 'one'),
  h.li({}, 'two')
]);

document.body.appendChild(list);
```

## API

### ```h.[type](attrs, children | text)```

 - **type** - type of element to create(ul, li, button etc)
 - **attrs** - object with attributes to be applied to the element
 - **children** - array of children

Any attribute that starts with *on* will be treated as an event handler. For example, `onClick` will turn into addEventHandler('click').


# With JSX

Use `babel-transform-react-jsx` to turn JSX into h🔥tml-calls:

```
{
  "plugins": [
    ["transform-react-jsx", { "pragma":"h" }]
  ]
}
```
