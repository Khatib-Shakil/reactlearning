import React, { useState } from 'react';

import './Product.css'

const Products = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);


    const addProduct = async () => {
        console.log(name, price, category, company);

        if (!name || !price || !category || !company) {
            setError(true)
            return false;
        }

        const userId = JSON.parse(localStorage.getItem('user')).id;
        console.log(userId);
        console.log(JSON.stringify({ name, price, category, company, userId }))

        let result = await fetch('http://localhost:4000/add-product',
            {
                method: "POST",
                body: JSON.stringify({ name, price, category, company, userId }),
                headers: {
                    'Content-Type': "application/json",
                    authorization: JSON.parse(localStorage.getItem('token'))
                }
            })
        console.log("---->", JSON.stringify(result));
        result = await result.json()
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result))

        setName('');
        setPrice('');
        setCategory('');
        setCompany('');
    }

    return (
        <div className="product">
            <h1>Add Products</h1>
            <input className='inputbox' value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Product Name"
            />
            {error && !name && <span className="invalid-input">Enter Name</span>}
            <input className='inputbox' value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Enter Product Price"
            />
            {error && !price && <span className="invalid-input">Enter Price</span>}

            <input className='inputbox' value={category} onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Enter Product Category"
            />
            {error && !category && <span className="invalid-input">Enter Category</span>}

            <input className='inputbox' value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Enter Product Company"
            />
            {error && !company && <span className="invalid-input">Enter Company Name</span>}

            <button onClick={addProduct} className="appbutton">Add Product</button>
        </div>
    )
}


export default Products;