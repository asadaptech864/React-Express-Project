import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { products } from "./Products";
import { useCart } from "./cartContext";
import { useWishlist } from "./wishlistContext";

const relatedItems = [
  {
    img: "https://i.pinimg.com/736x/86/88/8b/86888bd15ddebc78a0500cce1b1125c4.jpg",
    title: "AquaDiGO",
    price: 7260,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9EHbiufdevy09g0F9asZtIigSDzP5IgLEmw&s",
    title: "BlueDEchannel",
    price: 9600,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvk3zEX_vSvQBr1bV1w5nXdCpgjMdmqOSOXg&s",
      title: "Versace",
    
    price: 1640,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKYn5mhVmIWZ4PQxscvoTcoD4oTgHbSeLLQ&s",
    title: "J.",
    price: 3609,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NcLoQEwnx_2TXTivbQkiK-6eFNFGK14ESw&s",
    title: "TomFord",
    price: 9460,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GLcMmyicnxCO1C3eIpF5-C8QiL6vVAg8yg&s",
      title: "Janan",

    price: 16320,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQU78_3AQNDt8NwOHH4bb2r7p9qn2i1Kiy5zCCyKucp15EZDCwwZ8rJyer71sGm6cYXA&usqp=CAU",
    title: "Zarar",
    price: 3600,
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products[parseInt(id)];
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  if (!product) return <div className="container py-5">Product not found.</div>;

  return (
    <div className="container py-5">
      <div className="row">
        {/* Product Images */}
        <div className="col-md-6">
          <img
            src={product.img}
            alt={product.title}
            className="img-fluid mb-3"
            style={{ maxHeight: 350, objectFit: "contain", borderRadius: 12, boxShadow: "0 2px 16px #eee" }}
          />
          <div className="d-flex gap-2 mt-3">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src={product.img}
                alt={product.title}
                className="img-thumbnail"
                style={{ width: 70, height: 70, objectFit: "cover", borderRadius: 8 }}
              />
            ))}
          </div>
        </div>
        {/* Product Info */}
        <div className="col-md-6">
          <h4 className="fw-bold mb-1">{product.title}</h4>
          <div className="mb-2">
            <span className="text-warning">★★★★★</span>
            <span className="ms-2 text-success fw-semibold">In Stock</span>
          </div>
          <h3 className="fw-bold mb-3">${product.newPrice.toFixed(2)}</h3>
          <p className="text-muted" style={{ maxWidth: 400 }}>
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.
          </p>
          <div className="mb-3">
            <span className="fw-semibold me-2">Colours:</span>
            <input type="radio" checked readOnly />
            <span className="ms-2 me-3">●</span>
          </div>
          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-outline-secondary" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span className="mx-3 fs-5">{quantity}</span>
            <button className="btn btn-outline-secondary" onClick={() => setQuantity(q => q + 1)}>+</button>
            <button className="btn btn-danger ms-4 px-4" onClick={() => { addToCart({ ...product, id: parseInt(id) }, quantity); navigate('/cart'); }}>Add to Cart</button>
            {isInWishlist(parseInt(id)) ? (
              <button className="btn btn-outline-danger ms-2" onClick={() => removeFromWishlist(parseInt(id))}>
                Remove from Wishlist
              </button>
            ) : (
              <button className="btn btn-outline-primary ms-2" onClick={() => addToWishlist({ ...product, id: parseInt(id) })}>
                Add to Wishlist
              </button>
            )}
          </div>
          <div className="border p-3 rounded mb-2 d-flex align-items-center gap-3" style={{ maxWidth: 400 }}>
            <i className="bi bi-truck fs-3"></i>
            <div>
              <div className="fw-semibold">Free Delivery</div>
              <small>Enter your postal code for Delivery Availability</small>
            </div>
          </div>
          <div className="border p-3 rounded d-flex align-items-center gap-3" style={{ maxWidth: 400 }}>
            <i className="bi bi-arrow-counterclockwise fs-3"></i>
            <div>
              <div className="fw-semibold">Return Delivery</div>
              <small>Free 30 Days Delivery Returns. <a href="#">Details</a></small>
            </div>
          </div>
        </div>
      </div>
      {/* Related Items */}
      <div className="mt-5">
        <h6 className="text-danger mb-3">Related Item</h6>
        <div className="row">
          {relatedItems.map((item, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <div className="card h-100 text-center p-3 border-0 shadow-sm">
                <img src={item.img} alt={item.title} className="card-img-top mx-auto" style={{ width: 100, height: 100, objectFit: "contain" }} />
                <div className="card-body">
                  <div className="fw-semibold mb-1" style={{ fontSize: 16 }}>{item.title}</div>
                  <div className="text-danger mb-1">Price: ${item.price}</div>
                  <div className="text-warning">★★★★★</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="btn btn-outline-secondary mt-3" onClick={() => navigate(-1)}>Back to Products</button>
    </div>
  );
};

export default ProductDetails; 