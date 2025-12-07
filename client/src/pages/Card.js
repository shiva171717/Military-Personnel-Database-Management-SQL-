// Card.js
import React from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductCard = ({ p, cart, setCart, BASE_URL }) => {
  const navigate = useNavigate();

  const addToCart = () => {
    const auth = localStorage.getItem("auth");

    if (!auth) {
      toast.error("You need to log in first!");
      return;
    }

    const updatedCart = [...cart, p];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item Added to cart");
  };

  return (
    <div className="card m-1" key={p._id}>
      <img
        src={`${BASE_URL}/api/v1/product/product-photo/${p._id}`}
        className="card-img-top"
        alt={p.name}
      />
      <div className="card-body">
        <div className="card-name-price">
          <h5 className="card-title">{p.name.substring(0, 25)}</h5>
          <h5 className="card-title card-price">
            {p.price.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
          </h5>
        </div>

        <p className="card-text">{p.description.substring(0, 60)}...</p>

        <div className="card-name-price">
          <button
            className="btn btn-info-custom ms-1"
            onClick={() => navigate(`/product/${p.slug}`)}
          >
            More Details
          </button>

          <button className="btn btn-dark ms-1" onClick={addToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
