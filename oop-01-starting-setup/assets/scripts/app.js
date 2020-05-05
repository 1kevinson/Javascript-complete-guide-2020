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
    this.price = price
  }

}

console.log(new Product());

const productList = {
  products: [
    new Product(
      'A Kyrie 4',
      'https://www.basketsession.com/statics/uploads/2018/02/Nike-Kyrie-4-0-1100x604.jpg',
      'A Kyrie 4 - Black & White',
      49.99
    ),
    new Product(
      'A Kyrie 3',
      'https://www.basketusa.com/wp-content/uploads/2017/03/Nike-Kyrie-3-1-1.jpg',
      'A Kyrie 3 - City of guardians',
      59.99
    ),
    new Product(
      'A Kyrie 2',
      'https://www.sneakers-actus.fr/wp-content/uploads/2015/12/Basket-Nike-Kyrie-Irving-2-Multicolor-1.png',
      'A K2',
      59.99
    ),
    new Product(
      'A Kyrie 5',
      'https://trashtalk.co/wp-content/uploads/2018/11/NIKE-KYRIE-5-6-1.jpg',
      'A Kyrie 5 - Power of ganesha',
      69.99
    ),
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';

    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
