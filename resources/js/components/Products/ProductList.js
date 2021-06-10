import React,{useEffect,useState} from 'react';
import Header from '../Header';
import {Table,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ProductList(props) {
    const [data,setData] = useState([ ]);
    useEffect(()=>{
         getData();
    },[]);

    async function deleteProduct($id){
        let result = await fetch("http://localhost:8000/api/delete/"+$id,{
            method:'DELETE'
        });
        result = result.json();
        getData();
    }

    async function getData(){

        let result = await fetch("http://localhost:8000/api/productlist");
        result = await result.json();
        setData(result);
        console.log(data);

    }

    return (
        <div>
            <Header />
            <div className="col-sm-6 offset-sm-3">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Image</th>

                    </tr>
                </thead>
                <tbody>
                    
                        {data.map((item)=>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td><img  style={{width:100,}} src={"http://localhost:8000/"+item.file_path} /></td>
                                <td style={{padding:5,margin:5}}>
                                  <Link to={"/update/"+item.id}><Button className="btn btn-success">Update</Button></Link>&emsp;
                                  <Button onClick={()=>deleteProduct(item.id)} className="btn btn-danger">Delete </Button>
                                </td>
                            </tr>
                        )}
                   
                    
                </tbody>
            </Table>
            </div>
        </div>
    );
}

export default ProductList;