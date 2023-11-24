(function () {
  const PRODUCTS_STORAGE_KEY = 'products'

  function renderProduct(name, type, amount) {
    // Клонируем новую строку и вставляем её в таблицу
    const template = document.getElementById("storageRowTemplate");
    console.log(template)

    const clone = template.content.cloneNode(true);
    const cloneName = clone.querySelectorAll(".storage_name")[0];
    const cloneType = clone.querySelectorAll(".storage_type")[0];
    const cloneAmount = clone.querySelectorAll(".storage_amount")[0];

    cloneName.textContent = name;
    cloneType.textContent = type;
    cloneAmount.textContent = amount;

    const storagEl = document.getElementsByClassName('storage')[0]

    storagEl.appendChild(clone);
  }

  window.addEventListener("load", () => {
    const productsStorage = JSON.parse(window.localStorage.getItem(PRODUCTS_STORAGE_KEY))
    const products = Array.isArray(productsStorage) ? productsStorage : []

    products.forEach(product => {
      if (product.name) {
        renderProduct(product.name, product.type, product.amount)
      }
    })


    const form = document.getElementsByName("addProduct")[0]
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const name = form.name.value
      const type = form.type.value
      const amount = form.amount.value
      renderProduct(name, type, amount)
      products.push({ name, type, amount })
      window.localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products))
    })
  })
})();    
