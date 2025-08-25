import "./Products.css";
import { useState } from "react";
import CheesePizza from "../../assets/Cheese-Pizza.webp";
import VegPizza from "../../assets/Veg-Pizza.webp";
import CheeseBurgers from "../../assets/Cheese-Burgers.webp";
import BeefBurger from "../../assets/Beef-Burger.webp";
import RegularFries from "../../assets/Regular-Fries.webp";
import CheeseFries from "../../assets/Cheese-Fries.webp";
import Coke from "../../assets/Coke.avif";
import Pepsi from "../../assets/Pepsie.avif";
import ChickenSandwich from "../../assets/Chicken-Sandwich.webp";
import VegSandwich from "../../assets/Veg-Sandwich.webp";
import ChocolateCake from "../../assets/Chocolate-Cake.webp";
import IceCream from "../../assets/Ice-Cream.webp";
import MargheritaPizza from "../../assets/Margherita-Pizza.avif"
import Pepperoni from "../../assets/Pepperoni.avif"
import ChickenBurger from "../../assets/Chicken-Burger.webp" 
import VeggieBurger from "../../assets/Veggie-Burger.webp"
import SpicyFries from "../../assets/Spicy-Fries.webp"
import CurlyFries from "../../assets/Curly-Fries.webp"
import Sprite from "../../assets/Sprite.avif"
import Fanta from "../../assets/Fanta.avif"
import ClubSandwich from "../../assets/Club-Sandwich.webp"
import GrilledSandwich from "../../assets/Grilled-Sandwich.webp"
import Brownie from "../../assets/Brownie.webp"
import Cupcake from "../../assets/Cupcake.webp"
 

const productsData = [
  {
    category: "Pizzas",
    items: [
      { id: 1, name: "Cheese Pizza", price: 500, img: CheesePizza },
      { id: 2, name: "Veg Pizza", price: 600, img: VegPizza },
       { id: 3, name: "Margherita Pizza", price: 550, img: MargheritaPizza },
      { id: 4, name: "Pepperoni Pizza", price: 650, img: Pepperoni },
    ],
  },
  {
    category: "Burgers",
    items: [
      { id: 5, name: "Cheese Burger", price: 350, img: CheeseBurgers },
      { id: 6, name: "Beef Burger", price: 450, img: BeefBurger },
       { id: 7, name: "Chicken Burger", price: 400, img: ChickenBurger },
       { id: 8, name: "Veggie Burger", price: 380, img: VeggieBurger },
    ],
  },
  {
    category: "Fries",
    items: [
      { id: 9, name: "Regular Fries", price: 150, img: RegularFries },
      { id: 10, name: "Cheese Fries", price: 250, img: CheeseFries },
       { id: 11, name: "Spicy Fries", price: 200, img: SpicyFries },
       { id: 12, name: "Curly Fries", price: 220, img: CurlyFries },
    ],
  },
  {
    category: "Drinks",
    items: [
      { id: 13, name: "Coke", price: 100, img: Coke },
      { id: 14, name: "Pepsi", price: 100, img: Pepsi },
      { id: 15, name: "Sprite", price: 100, img: Sprite },
       { id: 16, name: "Fanta", price: 100, img: Fanta },
    ],
  },
  {
    category: "Sandwiches",
    items: [
      { id: 17, name: "Chicken Sandwich", price: 400, img: ChickenSandwich },
      { id: 18, name: "Veg Sandwich", price: 300, img: VegSandwich },
      { id: 19, name: "Club Sandwich", price: 450, img: ClubSandwich },
      { id: 20, name: "Grilled Sandwich", price: 350, img: GrilledSandwich },
    ],
  },
  {
    category: "Desserts",
    items: [
      { id: 21, name: "Chocolate Cake", price: 500, img: ChocolateCake },
      { id: 22, name: "Ice Cream", price: 200, img: IceCream },
      { id: 23, name: "Brownie", price: 250, img: Brownie },
       { id: 24, name: "Cupcake", price: 150, img: Cupcake },
    ],
  },
];


const Product = ({ setCurentPage }) => {
  const [quantities, setQuantities] = useState({});

  const increaseQty = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  return (
    <div className="products-container">
      <div className="products-hero">
        <h1>Our Delicious Menu</h1>
        <p>Choose your favorite food below</p>
        <a href="#product-cards" className="down-arrow">
          &#x2193;
        </a>
      </div>

      {/* Product Cards */}
      <div id="product-cards">
        {productsData.map((set, index) => (
          <div key={index} className="product-set">
            <h2>{set.category}</h2>
            <div className="product-grid">
              {set.items.map((item) => (
                <div key={item.id} className="product-card">
                  <img src={item.img} alt={item.name} />
                  <h3>{item.name}</h3>
                  <p>Price: Rs {item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{quantities[item.id] || 0}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button className="add-btn">Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <footer className='footer'> <p>© 2025 Food Store. All rights reserved.</p></footer>
    </div>
  );
};

export default Product;
