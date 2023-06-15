import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

import './Product.css'

const UpdateProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async() =>{
        console.log("params:-",params)
        console.warn("warn",name,price,category,company)
        let result = await fetch(`http://localhost:4000/product/${params.id}`);
        console.log("ID",params.id);
        result = await result.json();
        
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);

        console.warn(result);
    }


    const updateProduct = async () => {
        console.warn("warn",name,price,category,company)

        const updatedProduct = {
            name: name,
            price: price,
            category: category,
            company: company
          };
      

        let result = await fetch(`http://localhost:4000/product/${params.id}`,{
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(updatedProduct)
        
        });
        result = await result.json();

    }
       

    return (
        <div className="product">
            <h1>Update Products</h1>
            <input className='inputbox' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Product Name"
            />

            <input className='inputbox' value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Enter Product Price"
            />


            <input className='inputbox' value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Enter Product Category"
            />


            <input className='inputbox' value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Enter Product Company"
            />

            <button onClick={updateProduct} className="appbutton">Update</button>
        </div>
    )
}


export default UpdateProduct;