import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './productList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        let result = await fetch('http://localhost:4000/products')
        result = await result.json();
        setProducts(result);
    }

    const deleteProduct = async(_id)=>{
        console.log(_id)
        let result = await fetch(`http://localhost:4000/product/${_id}`,{
            method :"Delete"
        });
        result = result.json()
        if(result)
        {
            getProducts();
            alert("Record is deleted");
        }
    }
    console.log("Products", products);
    return (
        <div className="product-list">
            <h1>Product List</h1>
            <ul>
                <li>S. No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Company</li>
                <li>Operation</li>
            </ul>
            {
                products.map((item, index) => {
                    return (<ul>
                        <li>{index + 1 || '-'}</li>
                        <li>{item?.name || '-'}</li>
                        <li>{item?.price || '-'}</li>
                        <li>{item?.category || '-'}</li>
                        <li>{item?.company || '-'}</li>
                        <li><button onClick={()=>deleteProduct(item._id)} >Delete</button>
                        <Link to={"/update/"+item._id}> Update</Link>
                        </li>
                        
                    </ul>)

                })
            }
        </div>
    )
}


export default ProductList;