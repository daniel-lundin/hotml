function createElement(type, props, children) {
  const element = document.createElement(type);

  const attributes = Object.keys(props).filter(prop => !prop.startsWith("on"));
  const eventHandlers = Object.keys(props).filter(prop =>
    prop.startsWith("on")
  );

  attributes.forEach(prop => {
    element.setAttribute(prop, props[prop]);
  });
  eventHandlers.forEach(handler => {
    const eventName = handler.substr(2).toLowerCase();
    element.addEventListener(eventName, props[handler]);
  });

  if (typeof children === "string") {
    element.textContent = children;
  } else {
    [].concat(children).forEach(child => element.appendChild(child));
  }

  return element;
}

export default new Proxy(
  {},
  {
    get(obj, prop) {
      if (typeof prop === "string") {
        if (prop === "createElement") return createElement;
        return (props, children = []) => createElement(prop, props, children);
      }
      return "h🔥tml";
    }
  }
);
