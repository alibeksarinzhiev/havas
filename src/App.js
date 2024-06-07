import Home from "./pages/Home/home";
import {Routes, Route, Link} from "react-router-dom";
import About from "./pages/About/about";
import Register from "./pages/register/register";
import Layout from "./Layout/Layout";
import Recipes from './pages/Recipes/Recipes'
import Shop from "./pages/Shop/Shop";
import Login from "./pages/login/login";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setAllProducts} from "./redux/Reducer/products";


function App() {

    const {data} = useSelector((state)=>state.products)

    const dispatch = useDispatch()
    useEffect(()=>{
        axios('http://localhost:8080/products')
            .then(({data})=>dispatch(setAllProducts(data)))
    },[])

  return (
    <>
<Routes>
    <Route path={'/'} element={<Layout/>}>
        <Route path={''} element={<Home/>}/>
        <Route path={'about'} element={<About/>}/>
        <Route path={'recipes'} element={<Recipes/>}/>
        <Route path={'shop'} element={<Shop/>}/>
    </Route>
    <Route path={'/register'} element={<Register/>}/>
    <Route path={'/login'} element={<Login/>}/>
</Routes>



    </>
  );
}

export default App;
