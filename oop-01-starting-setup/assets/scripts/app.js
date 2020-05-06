/** @format */

class Product {
  title = 'DEFAULT';
  imageUrl;
  description;
  price;

  constructor(title, image, description, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addTocart() {
    App.addProductToCart(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addTocart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'BOOKS',
      'https://www.avenuecalgary.com/wp-content/uploads/2019/04/NextPageBookstore-960x640.jpg',
      'Books',
      49.99
    ),
    new Product(
      'PILLOW',
      'https://media.istockphoto.com/photos/many-samples-bright-color-pillow-hanging-on-shelf-in-store-picture-id876908618?k=6&m=876908618&s=612x612&w=0&h=I68DPUPMerhQa9e5gMvLpf-6SAKYQ88LggDxS3NtamY=',
      'Pillows',
      59.99
    ),
    new Product(
      'COMPUTERS',
      'https://60a99bedadae98078522-a9b6cded92292ef3bace063619038eb1.ssl.cf2.rackcdn.com/images_stores_BROOKLYNrotatorLAPTOPS2.jpg',
      'Computers',
      59.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class ShoppingCart {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
      2
    )}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, curItem) => {
      return prevValue + curItem.price;
    }, 0);
    return sum;
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = 'cart';

    this.totalOutput = cartEl.querySelector('h2');
    return cartEl;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    this.cart = new ShoppingCart();
    const cardEl = this.cart.render();
    const productList = new ProductList();
    const productListEl = productList.render();

    renderHook.append(cardEl);
    renderHook.append(productListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    // Render then have access to cart
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}

App.init();
