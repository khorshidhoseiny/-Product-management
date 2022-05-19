import React, { useContext, useState } from 'react';
import { useReducer } from 'react/cjs/react.development';
import {productsData}from '../../db/products';
 const ProductContext=React.createContext(); //State
 const ProductContextDispatcher=React.createContext(); //setCount


  const reduser=(state,action)=>{
    switch(action.type){
        case "increment":{
          const index=state.findIndex((item)=>item.id===action.id);
    const productSelected={ ...
      state[index] };
    productSelected.quantity++;
    
    const productss=[...state];
    productss[index]=productSelected;

    return  productss;
        }
            
        case "remove":{
        const filteredProduct=state.filter(p=> p.id !== action.id );
         return filteredProduct;
        }
        case "edit":{
          const index=state.findIndex((item)=>item.id===action.id);
    const productSelected={ ...state[index] };
    productSelected.title=action.event.target.value;
    
    const productss=[...state];
    productss[index]=productSelected;
    return productss;
        }
        case "decrement":{
          const index=
      state.findIndex((item)=> item.id===action.id);
        const product={...
          state[index]};
        
    if(product.quantity===1){
        const filteredItem=
        state.filter((p)=> p.id!==action.id);
        return filteredItem
    }else{
        product.quantity--;
        const Updatedproducts=[...
          state];
        Updatedproducts[index]=product;
     return Updatedproducts;
    }
        }
        case "filter": {
          console.log(action.selectedOption.value);
          const value = action.selectedOption.value;
    
          if (value === "") {
            return productsData;
          } else {
            const updatedProducts = productsData.filter(
              (p) => p.availableSizes.indexOf(value) >= 0
            ); // "L" => ["L","M","XS"]
            return updatedProducts;
            }
        }
        case "sort":{
         const value=action.selectedOption.value;
         const products=[...state];
         if (value==="Lowest") {
         const sortedProducts= products.sort((a, b) => {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
          return sortedProducts;
         }else{
         const sortedProducts= products.sort((a, b) => {
            if (a.price < b.price) {
              return 1;
            }
            if (a.price > b.price) {
              return -1;
            }
            return 0;
          });
          return sortedProducts;
         }}
         case "search": {
          const value = action.event.target.value;
          if (value === "") {
            return productsData;
          } else {
            const filteredProducts = state.filter((p) =>
              p.title.toLowerCase().includes(value.toLowerCase())
            );
            return filteredProducts;
          }
        }
        default:
            return state;
    }}

const ProductsProvider = ({children}) => {
 const [products,dispatcher]=useReducer(reduser,productsData);

    return <ProductContext.Provider value={products}>
        <ProductContextDispatcher.Provider value={dispatcher}>
            {children}
        </ProductContextDispatcher.Provider>
        </ProductContext.Provider>
}
 
export default ProductsProvider;
export const useProduct=()=> useContext(ProductContext);
export const useProductAction=()=>{ return useContext(ProductContextDispatcher);
    
};


