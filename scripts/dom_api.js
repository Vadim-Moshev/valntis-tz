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

const createProductsList = (arrayOfProducts) => {
  const processedProductsIds = new Set();
  const productsList = mkElem("ol");

  for (let i = 0; i < arrayOfProducts.length; i++) {
    const { brand, id, price, product } = arrayOfProducts[i];
    if (processedProductsIds.has(id)) {
      continue;
    }

    const productString = `Бренд: ${brand || "(Нет)"}, id: ${id}, Цена: ${price}, Название: ${product}`;
    const li = mkElem("li", null, null, productString);

    productsList.appendChild(li);

    processedProductsIds.add(id);
  }

  return productsList;
};
