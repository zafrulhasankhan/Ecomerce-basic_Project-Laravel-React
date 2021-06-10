import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import Header from './Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../../css/app.css';
import Login from './Auth/Login';
import Register from './Auth/Register';
import AddProduct from './Products/AddProduct';
import UpdateProduct from './Products/UpdateProduct';
import ProductList from './Products/ProductList';
import Search from './Products/Search';
import ProtectedRoute from './Auth/ProtectedRoute';

function App() {
    return (
        <div className="App">
            <Router>
                {/* <Header /> */}
                <Route exact path="/" > <ProtectedRoute Component={ProductList} /> </Route>
                <Route path="/login"> <Login /> </Route>
                <Route path="/register"> <Register /> </Route>
                <Route path="/add"> <ProtectedRoute Component={AddProduct} /> </Route>
                <Route path="/update/:id"> <ProtectedRoute Component={UpdateProduct} /> </Route>
                <Route path="/search"> <ProtectedRoute Component={Search} /> </Route>
            </Router>



        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
