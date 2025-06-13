import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";


const Products = ({products}) => {
  return (
    <div className="container py-5">
      <h5 className="text-danger">Our Products</h5>
      <h2 className="mb-4">Explore Premium Perfumes</h2>
      <div className="row">
        {products.map((item, index) => (
          <div className="col-md-3 mb-4" key={index}>
            {/* <Link to={`/product/${index}`} style={{ textDecoration: 'none', color: 'inherit' }}> */}
              <ProductCard
                id={index}
                img={item.imageUrl}
                title={item.name}
                oldPrice={item.price}
                newPrice={item.price}
              />
            {/* </Link> */}
          </div>
        ))}
      </div>
      {/* <div className="text-center mt-4">
        <button className="btn btn-danger btn-lg rounded-pill px-5">
          View All Perfumes
        </button>
      </div> */}
    </div>
  );
};

export default Products;
