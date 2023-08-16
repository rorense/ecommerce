import React, { useState } from 'react';
import "./Products.css";
import List from '../../Components/List/List';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

// Each individual product pages
function Products() {

  const catId = parseInt(useParams().id);
  // Sorting state
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  // fetching data from API with filter
  const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

  // Category filter logic
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value))
  }

  return (
    <div className='products'>

      {/* The left hand menu bar */}
      <div className="left">
        <div className="filterItem">

          {/* Sort by category looping through API items */}
          <h2>Product Categories</h2>
            {data?.map((item)=> (
              <div className="inputItem" key={item.id}>
                <input type="checkbox" id={item.id} value={item.id} onChange={ handleChange }/>
                <label htmlFor={item.id}>{item.attributes.title}</label>
              </div>
            ))}
        </div>

        {/* Filter by price range */}
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={ 0 } max={ 1000 } onChange={ (e)=>setMaxPrice(e.target.value) }/>
            <span>{maxPrice}</span>
          </div>
        </div>

        {/* Filter by lowest to highest, vice versa */}
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={ e=>setSort("asc") } />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="dsc" value="dsc" name="price" onChange={ e=>setSort("dsc") } />
            <label htmlFor="dsc">Price (Highest first)</label>
          </div>
        </div>
      </div>

      {/* Right side category page */}
      <div className="right">
        <img className="catImg" src="https://images.pexels.com/photos/552784/pexels-photo-552784.jpeg?
        auto=compress&cs=tinysrgb&w=1600&h=750&dpr=2" alt="" />
        {/* Reusing card component */}
        <List catId={ catId } maxPrice={ maxPrice } sort={ sort } subCats={ selectedSubCats } />
      </div>
      
    </div>
  )
}

export default Products;