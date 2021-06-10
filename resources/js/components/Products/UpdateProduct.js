import React, { useEffect, useState } from 'react';
import Header from '../Header';
import { withRouter } from 'react-router-dom';

function UpdateProduct(props) {

    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState("");

    useEffect(async () => {
        let result = await fetch("http://localhost:8000/api/product/" + props.match.params.id);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setDescription(result.description);
        setData(result);
    }, []);
    async function updateItem() {
        console.log(name,description);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('name', name);
        //console.log(formData);
        // let item = { name, price, description, file };
        // console.log(file);
        let result = await fetch("http://localhost:8000/api/updateProduct/" + props.match.params.id, {
            method: 'POST',
            body: formData,
            // headers: {
            //     'Content-Type': 'application/json',
            //     'Accept': 'application/json'
            // }
        });
        
        alert('Data has been updated');
    }
    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1><u>Add Product</u></h1><br />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" name="name" /> <br />
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" name="price" /><br />
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" name="description" /><br />
                <input type="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" name="name" /><br />
                <img style={{ width: 100 }} src={'http://localhost:8000/' + data.file_path} /> <br /><br />
                <button onClick={updateItem} className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
}

export default withRouter(UpdateProduct);