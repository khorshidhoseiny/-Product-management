
import "./App.css";
import { Component, useState } from "react";
import ProductList from "./component/productList/ProductList";
import NavBar from "./component/NavBar/NavBar";
import react from "react";
import ProductsProvider from "./component/Provider/ProductsProvider"
import Filter from "./component/Filter/Filter";
import SearchBar from "./common/Search/searchBar";


const App = () => {
  
  return(
    
      <ProductsProvider>
       <div className="container" id="title"> 
       <NavBar />
       <Filter/>
       <ProductList/>
       </div>
      </ProductsProvider>
     
  );
}
 


export default App;
