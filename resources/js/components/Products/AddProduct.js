import React, { useState } from 'react';
import Header from '../Header';

function AddProduct(props) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");

    async function addProduct() {
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('name', name);
        let result = await fetch("http://localhost:8000/api/add", {
            method: 'POST',
            body: formData
        });
        alert('Data has been saved');
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1><u>Add Product</u></h1><br/>
                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" name="name" placeholder="Name" /> <br />
                <input type="text" onChange={(e) => setPrice(e.target.value)} className="form-control" name="email" placeholder="Price" /><br />
                <input type="text" onChange={(e) => setDescription(e.target.value)} className="form-control" name="description" placeholder="description" /><br />
                <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" name="name" placeholder="password" /><br />
                <button onClick={addProduct} className="btn btn-primary">Add Product</button>
            </div>
        </div>
    );
}

export default AddProduct;