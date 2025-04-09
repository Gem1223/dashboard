import React, { useState } from "react";
import "./foodorderapp.css";
import Navbar from "./Navbar";

type FoodItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const foodItems: FoodItem[] = [
  { id: 1, name: "Pizza", price: 300, image: "/src/components/images/pizza.jpg" },
  { id: 2, name: "Burger", price: 200, image: "/src/components/images/burger.jpg" },
  { id: 3, name: "Pasta", price: 130, image: "/src/components/images/pasta.jpg" },
  { id: 4, name: "Sushi", price: 250, image: "/src/components/images/sushi.jpg" },
  // {id:5,name:"momo",price:9,image:"/src/components/images/momo.jpg"},
];

const FoodOrderApp: React.FC = () => {
  const [cart, setCart] = useState<FoodItem[]>([]);

  const addToCart = (food: FoodItem) => {
    setCart((prevCart) => [...prevCart, food]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <main style={{ 
        paddingTop: '80px',
        minHeight: 'calc(100vh - 80px)'
      }}>
        <div className="app-container">
          <div className="menu">
            <h3>Menu</h3>
            <div className="menu-items">
              {foodItems.map((item) => (
                <div className="menu-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="food-image" />
                  <div className="food-details">
                    <h3>{item.name}</h3>
                    <p>Rs {item.price}</p>
                    <button className="add-to-cart-btn" onClick={() => addToCart(item)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart">
            <h2>Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
            )}
            <h3>Total: ${getTotalPrice()}</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FoodOrderApp;
