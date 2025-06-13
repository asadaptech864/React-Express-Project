import { useWishlist } from "./wishlistContext";

const ProductCard = ({ id, img, title, oldPrice, newPrice }) => {
  // Wishlist logic not needed for this card design
  return (
    <div className="product-card-custom">
      <style>{`
        .product-card-custom {
          background: #fafafa;
          border-radius: 14px;
          box-shadow: 0 2px 12px #eee;
          padding: 18px 12px 10px 12px;
          transition: box-shadow 0.2s;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }
        .product-card-custom:hover {
          box-shadow: 0 4px 24px #e0e0e0;
        }
        .product-card-img {
          width: 120px;
          height: 120px;
          object-fit: contain;
          border-radius: 8px;
          margin-bottom: 18px;
        }
        .product-card-title {
          font-size: 1.08rem;
          font-weight: 500;
          color: #222;
          margin-bottom: 6px;
          text-align: left;
          width: 100%;
        }
        .product-card-price {
          color: #ff6a00;
          font-weight: 600;
          font-size: 1rem;
          margin-bottom: 8px;
          text-align: left;
          width: 100%;
        }
        .product-card-rating {
          color: #ffb800;
          font-size: 1.1rem;
          margin-bottom: 8px;
          text-align: left;
          width: 100%;
        }
        .product-card-cart-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          background: #fff;
          border: 2px solid #222;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border 0.2s;
        }
        .product-card-cart-btn:hover {
          background: #f5f5f5;
          border-color: #ff6a00;
        }
        .product-card-cart-btn i {
          font-size: 1.2rem;
          color: #222;
        }
      `}</style>
      <button className="product-card-cart-btn" title="Add to cart">
        <i className="bi bi-cart"></i>
      </button>
      <img src={img} alt={title} className="product-card-img" />
      <div className="product-card-title">{title}</div>
      <div className="product-card-price">Price: ${newPrice}</div>
      <div className="product-card-rating">
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-fill"></i>
        <i className="bi bi-star-half"></i>
      </div>
    </div>
  );
};

export default ProductCard;
