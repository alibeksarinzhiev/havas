import Home from "./pages/Home/home";
import {Routes, Route, Link} from "react-router-dom";
import About from "./pages/About/about";
import Register from "./pages/register/register";
import Layout from "./Layout/Layout";
import Recipes from './pages/Recipes/Recipes'
import Shop from "./pages/Shop/Shop";

import Career from './pages/Career/career'

import SpecialOffer from "./pages/SpecialOffer/SpecialOffer"
import Login from "./pages/Login/login";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setAllProducts, setPromProducts} from "./redux/Reducer/products";
import OneProduct from "./pages/OneProduct/OneProduct";
import AddProduct from "./pages/AdminPanel/AddProduct";



function App() {

    const {data} = useSelector((state)=>state.products)

    const dispatch = useDispatch()
    useEffect(()=>{
        axios('http://localhost:8080/products')
            .then(({data})=>dispatch(setAllProducts(data)))
    },[]);

  return (
    <>
<Routes>
    <Route path={'/'} element={<Layout/>}>
        <Route path={''} element={<Home/>}/>
        <Route path={'about'} element={<About/>}/>
        <Route path={'specialOffer'} element={<SpecialOffer/>}/>
    <Route path={'oneproduct/:id'} element={<OneProduct/>}/>
        <Route path={'recipes'} element={<Recipes/>}/>
        <Route path={'shop'} element={<Shop/>}/>
    
        <Route path={'career'} element={<Career/>}/>


        <Route path={'addproduct'} element={<AddProduct/>}/>
        <Route path={'addvacancies'} element={<AddProduct/>}/>
        <Route path={'changeproduct'} element={<AddProduct/>}/>

    </Route>
    <Route path={'/register'} element={<Register/>}/>
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'/register'} element={<Register/>}/>
</Routes>



    </>
  );
}

export default App;
