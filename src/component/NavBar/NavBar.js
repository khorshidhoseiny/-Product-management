import { useProduct } from "../Provider/ProductsProvider";
import styles from "./NavBar.module.css";
// import App from "../../App";
const NavBar = () => {

    const products=useProduct();
   const totalItems=products.filter((p)=>p.quantity).length
    return ( 
        <header className={styles.navBar}>
            <h2>Sunshid's Shop</h2>
            <span>{totalItems}</span>
        </header>
     );
}
 
export default NavBar;