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

class ProductItem {
    constructor(product){
        this.product = product;
    }
    render(){
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
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
        return prodEl;
    }
}

class ProductList{
    products = [
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
    constructor(){}
    
    render(){
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';

        for(const prod of this.products) {
            const productItem = new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}

const productList = new ProductList();

productList.render();