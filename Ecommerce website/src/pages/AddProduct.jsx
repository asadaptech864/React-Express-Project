import axios from 'axios';
import React from 'react'

const addproduct = async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const category = document.getElementById('category').value;
    const instock = document.getElementById('stock').value;
    const image = document.getElementById('imageUrl').value;
    if (name === "" || description === "" || price === "" || category === "" || image === "" || stock === "") {
       alert("Please Fill All Fields") 
    } else {
        try {
           let response= await
            axios.post('http://localhost:3000/addproduct', {
                name,
                description,
                price,
                category,
                instock,
                image,
            });
            console.log(response.data);
            alert("Product Added Successfully");
        } catch (error) {
            console.error("Failed To Add Product", error);
            alert("Failed To Add Product");
        }
    }
}
const AddProduct=()=> {
  return (
    <>
 
    <div className="container">
        <form>
        <h1>Add Product</h1>
            <input type="text" className="form-control my-3" id="name" placeholder="Product Name"/>
            <input type="text" className="form-control my-3" id="description" placeholder="Product Description"/>
            <input type="text" className="form-control my-3" id="price" placeholder="Product Price"/>
            <input type="text" className="form-control my-3" id="category" placeholder="Product Category" />
            <input type="text" className="form-control my-3" id="stock" placeholder="Product Stock" />

            <input type="text" className="form-control my-3" id="imageUrl" placeholder="Product Image"/>
            <button className="btn btn-primary" onClick={addproduct}>Add Product</button>
        </form>
    </div>
    </>
  )
}

export default AddProduct
