import React from "react";

const Categories = () => {
  const categories = [
    {
      img: "https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-gab-master-catalog/default/dwa1b6bad9/products/2025/A2608%20RESTAGE/3614273954167_02.jpg?sw=100&sh=100&sm=cut&sfrm=jpg&q=85",
      text: "Floral Essence"
    },
    {
      img: "https://www.chanel.com/images/t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.1/w_480//bleu-de-chanel-eau-de-parfum-spray-3-4fl-oz--packshot-default-107360-9564894232606.jpg",
      text: "Citrus Breeze"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_usNea2WRhPjgv_6HAdjF3JpJ7NmZ4LS3qQ&s",
      text: "Velvet Oud"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6iGLYik9266gY2eXpJ0j0JYNPEut6e19Wg&s",
      text: "Amber Mystique"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZGbjNpO31jbbXVnq8nDY4in4Wj59PeV9Cqw&s",
      text: "Silk Rose"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqHOsdtOHwUr7SWMszzHEdc5TuCtE1e_obw&s",
      text: "Tropical Garden"
    }
  ];

  return (
    <div className="text-center p-5" id="categories">
    
      <h2
        style={{
          fontFamily: 'Timesnewroman',
          fontSize: '2.8rem',
          color: '#2c2c2c',
        
          marginBottom: '40px'
        }}
      >
        Indulge in Timeless Fragrance
      </h2>

      {/* Categories Grid */}
      <div className="d-flex justify-content-center flex-wrap gap-5 mt-4">
        {categories.map((item, index) => (
          <div
            className="border p-4 rounded text-center shadow-lg"
            key={index}
            style={{
              width: "150px",
              backgroundColor: "#f4f4f4",
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
          >
            <img
              src={item.img}
              alt={item.text}
              className="img-fluid mb-2"
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                borderRadius: "8px",
                transition: 'transform 0.3s'
              }}
            />
            <p
              className="mb-0 fw-semibold"
              style={{
                fontSize: '14px',
                fontFamily: 'Poppins, sans-serif',
                color: '#444',
                transition: 'color 0.3s'
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
