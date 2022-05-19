import React, { Component } from 'react';
import Product from "../product/Product";
import { useProduct, useProductAction } from '../Provider/ProductsProvider';

 
const ProductList = (props) => {
    const products=useProduct();
const dispatcher=useProductAction();
    if (products.length===0) {
        return <div>there is no cart</div>
    }

    return (<div>
        {products.map((product,index)=>{
   return(<Product 
   product={product}
       key={index}
       onDelete={()=> dispatcher({type:"remove",id:product.id})}
       onIncrement={()=> dispatcher({type:"increment",id:product.id})}
       onChange={(e)=>dispatcher({type:"edit",id:product.id,event:e})}
       onDecrement={()=> dispatcher({type:"decrement",id:product.id})}
       />); 
  })}
   </div>);
}
 
export default ProductList;
