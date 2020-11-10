class Product {
    title = 'DEFAULT';
    imageUrl;
    description;
    price;

    constructor(title, image, desc, price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}
class ElementAttribute{
    constructor(attrName, attrValue){
        this.name = attrName;
        this.value = attrValue;
    }
}
class Component{

    constructor(renderHook, shouldRender = true){
        this.hookId = renderHook;
        if(shouldRender){
            this.render();
        }
    }

    render(){}

    createRootElement(tag, cssClasses, attributes){
        const rootElement = document.createElement(tag);
        if(cssClasses){
            rootElement.className = cssClasses;
        }
        if(attributes && attributes.length > 0){
            for(const attr of attributes){
                rootElement.setAttribute(attr.name, attr.value);
            }
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItems(value){
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: ${this.totalAmount.toFixed(2)}\$</h2>`
    }

    get totalAmount(){
        const sum = this.items.reduce((prevValue, curItem)=>{
            return prevValue + curItem.price
        }, 0);
        return sum;
    }

    constructor(renderHookId){
        super(renderHookId);
    }

    addProduct(product){
        this.items.push(product);
        const updatedItems = [...this.items];
        this.cartItems = updatedItems;
    }

    render(){
      const cartEl = this.createRootElement('section', 'cart');
      cartEl.innerHTML = `
        <h2>Total: ${0}\$</h2>
        <button>Order Now</button>
      `;  
      this.totalOutput = cartEl.querySelector('h2');
      return cartEl;
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId){
        super(renderHookId, false);
        this.product = product;
        this.render();
    }



    addToCart(){
        App.addProductToCart(this.product);
    }

    render(){
        const prodEl = this.createRootElement('li', 'product-item');
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl} alt="${this.product.title}">
                <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>${this.product.price}\$</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
                </div>
            </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        
    }
}

class ProductList extends Component{
    products = [];
    constructor(renderHookId){
        super(renderHookId);
        this.fetchProducts();
    }
        fetchProducts() {
            this.products = [
                new Product(
                    'Sneakers',
                    'https://ae01.alicdn.com/kf/HTB1Gu5fXXzsK1Rjy1Xbq6xOaFXaN/FEOZYZ-Genuine-Leather-Running-Shoes-Women-Trendy-Vintage-Sneakers-Women-Designer-Sport-Shoes-Woman-2018-Black.jpg_q50.jpg',
                    'Trendy sneakers',
                    49.99 
                    ),
                    
                    new Product(
                    'Socks',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHIkG2MDsBKdGZZNR8nbuIeZuCCw72zwBYrg&usqp=CAU',
                    'Trendy socks with sick pattern',    
                     5.99,
                    )
            ];
            this.renderProducts();
        }
    
    renderProducts(){
        for(const prod of this.products) {
            new ProductItem(prod, 'prod-list');
        }
    }        

    render(){
        this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);
        if(this.products && this.products.length > 0){
            this.renderProducts();
        }
    }
}

class Shop{
    constructor(){
        this.render();
    }

    render(){
     this.cart = new ShoppingCart('app');
     new ProductList('app');
    }
}

class App {
    static cart;
    static init(){
        const shop = new Shop();
        this.cart = shop.cart;
    }

    static addProductToCart(product){
        this.cart.addProduct(product);
    }
}

App.init();