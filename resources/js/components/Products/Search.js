import React,{useEffect,useState} from 'react';
import Header from '../Header';
import {Table,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Search(props) {
const [data,setData] = useState([]);

    async function searchItem(key){
        let result = await fetch("http://localhost:8000/api/search/"+key);
        result = await result.json();
        setData(result);
        console.log(data);
    }
    return (
        <div>
        <Header />
            <div className="col-sm-6 offset-sm-3">
               <h1><u>Register</u></h1>
               <input type="text"  onChange={(e)=>searchItem(e.target.value)} className="form-control" name="name" placeholder="Name" /> <br/>
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

export default Search;