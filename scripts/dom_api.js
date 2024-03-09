const mkElem = (name, attributes, cssProps, textContent) => {
  const e = document.createElement(name);

  if (attributes) {
    for (const attributeName in attributes) {
      e[attributeName] = attributes[attributeName];
    }
  }

  if (cssProps) {
    for (const cssPropName in cssProps) {
      e.style[cssPropName] = cssProps[cssPropName];
    }
  }

  if (textContent) {
    e.textContent = textContent;
  }

  return e;
};
