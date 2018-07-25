# H🔥TML

Tiny helper(~300 bytes) for creating complex DOM structues. Can be used as a target for JSX.


```js

const list = h.ul({class: 'list'}, [
  h.li({ onClick: (event) => {}}, 'one'),
  h.li({}, 'two')
]);

document.body.appendChild(list);
```

# With JSX

TDB. babel-transform-jsx
