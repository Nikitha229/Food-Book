import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Home from "./pages/Home.js";
import Recepies from "./pages/Recepies.js";
import Settings from "./pages/Settings.js";
import Ingredients from "./components/Ingredients.js";

const App = ({data}) => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/recipes' element={<Recepies />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/recipes/ingredients' element={<Ingredients recipe={data}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
