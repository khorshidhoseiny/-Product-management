import { useContext } from "react/cjs/react.development";
import {  useProductAction } from '../Provider/ProductsProvider';
import { useState } from "react";
import styles from "./filter.module.css"
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/Search/searchBar";




const Filter = () => {
    const dispatch=useProductAction();
    const [filter,setFilter]=useState("");
    const [sort,setSort]=useState("");
    

    const filterHandler = (selectedOption) => {
        dispatch({ type: "filter", selectedOption });
        dispatch({ type: "sort", selectedOption: sort });
        setFilter(selectedOption);
      };
    
      const sortHandler = (selectedOption) => {
        dispatch({ type: "sort", selectedOption });
        setSort(selectedOption);
      };

const filterOptions=[
    { value: '', label: 'All' },
    { value: 'XS', label: 'XS' },
    { value: 'L', label: 'L' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'XL', label: 'XL' },
    { value: 'XXL', label: 'XXL' },
  ];

  const PriceOptions=[
    { value: 'Highest', label: 'Highest' },
    { value: 'Lowest', label: 'Lowest' },
    
  ];
    

    return ( 
        
        <section>
            <SearchBar filter={filter}/>
            <div className={styles.filter}>

            <SelectComponent
            value={sort} 
            onChange={sortHandler}
           options={PriceOptions} 
           title="sort by price:"
            />
            <SelectComponent
            value={filter} 
            onChange={filterHandler}
           options={filterOptions} 
           title="sort by size :"
            />
           </div>
        </section>


     );
    };
     

 
export default Filter;