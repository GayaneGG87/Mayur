import { productsList, viewComponent } from './utils.js';
import { productCard } from './multiComponent.js';


const productListComponent = document.getElementById('products-list');
viewComponent(productsList, productCard, productListComponent)

