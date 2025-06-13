import ProductCard from "./ProductCard";

const BestSelling = () => {
  const bestSellingProducts = [
    {
      img: "https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_480//bleu-de-chanel-eau-de-toilette-spray-3-4fl-oz--packshot-default-107460-9564920184862.jpg",
      title: "Floral Essence",
      oldPrice: 26590,
      newPrice: 30000,
    },
    {
      img: "https://www.giorgioarmanibeauty-usa.com/on/demandware.static/Sites-armani-us-Site/Sites-armani-us-Library/en_US/images/plp/nav/fragrance/section-2-2.jpg?staticlink", 
      title: "Citrus Breeze",
      oldPrice: 12000,
      newPrice: 19000,
    },
    {
      img: "https://fimgs.net/mdimg/secundar/o.30563.jpg", // Bag
      title: "Velvet Oud",
      oldPrice: 40000,
      newPrice: 350000,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6iGLYik9266gY2eXpJ0j0JYNPEut6e19Wg&s", 
      title: "Amber Mystique",
      oldPrice: 50000,
      newPrice: 42000,
    },
  ];

  return (
    <div className="container py-5">
      <h5 className="text-danger">This Month</h5>
      <h2>Best Selling Perfumes</h2>
      <div className="row mt-4">
        {bestSellingProducts.map((product, i) => (
          <div className="col-md-3 mb-4" key={i}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
