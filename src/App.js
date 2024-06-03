import Home from "./pages/Home/home";
import {Routes, Route, Link} from "react-router-dom";
import About from "./pages/About/about";
import Login from "./pages/Login/Login";
import Layout from "./Layout/Layout";
import Recipes from './pages/Recipes/Recipes'
import Shop from "./pages/Shop/Shop";


function App() {

  return (
    <>
<Routes>
    <Route path={'/'} element={<Layout/>}>
        <Route path={''} element={<Home/>}/>
        <Route path={'about'} element={<About/>}/>
        <Route path={'recipes'} element={<Recipes/>}/>
        <Route path={'shop'} element={<Shop/>}/>
    </Route>
    <Route path={'/login'} element={<Login/>}/>
</Routes>



    </>
  );
}

export default App;
