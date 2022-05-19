// import "./product.css"
import styles from "./product.module.css";
import { BiTrash} from "react-icons/bi";
import { useContext } from "react";



const Product=({onChange,onIncrement,onDelete,onDecrement,product})=> {
    // console.log(user,wesite);
    return ( 
        <div className={styles.product}>
        <p> product name:{product.title}</p>
        <p> product price:{product.price}</p>
        <span className={styles.value}>{product.quantity}</span>
        {/* <input type="text" className={styles.input} onChange={onChange}/> */}
        <button className={`${styles.button} ${product.quantity===1 && styles.remove }`}onClick={onDecrement} >
        {product.quantity >1 ? "-" : <BiTrash/>}

        </button>
        <button className={`${styles.button} ${styles.inc}`}onClick={onIncrement} >+</button>
        <button className={styles.button} onClick={onDelete}>Delete</button>
        </div>
        
     );

     
}

export default Product;