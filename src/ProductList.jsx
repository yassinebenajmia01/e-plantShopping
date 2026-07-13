import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";
import CartItem from "./CartItem";

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);

  // Keep your existing plantsArray here exactly as it is.

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const isAddedToCart = (plantName) => {
    return cart.some((item) => item.name === plantName);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const styleObj = {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "20px",
  };

  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1100px",
  };

  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };
    <div className="product-grid">
  {plantsArray.map((category, index) => (
    <div key={index}>
      <h2 className="plant-category">{category.category}</h2>

      <div className="plants-grid">
        {category.plants.map((plant, plantIndex) => (
          <div className="plant-card" key={plantIndex}>
            <img
              className="plant-image"
              src={plant.image}
              alt={plant.name}
            />

            <h3>{plant.name}</h3>

            <p>{plant.description}</p>

            <h4>{plant.cost}</h4>

            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(plant)}
              disabled={isAddedToCart(plant.name)}
            >
              {isAddedToCart(plant.name)
                ? "Added to Cart"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>
    return (
  <div>
    <div className="navbar" style={styleObj}>
      {/* Khalli navbar kif ma hiya */}
    </div>

    {!showCart ? (
      <div className="product-grid">
        {/* Hedhi déjà zidneha fi Part 2 */}
      </div>
    ) : (
      <CartItem onContinueShopping={handleContinueShopping} />
    )}
  </div>
);
}

export default ProductList;
