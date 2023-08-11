import React from 'react';
import "./product.css";
import List from '../../Components/List/List';

// Each individual product pages
function Product() {
  return (
    <div className='product'>

      {/* The left hand menu bar */}
      <div className="left">
        <div className="filterItem">

          {/* Sort by category */}
          <h2>Product Categories</h2>
            <div className="inputItem">
              <input type="checkbox" id="1" value={ 1 } />
              <label htmlFor="1">Shoes</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="2" value={ 2 } />
              <label htmlFor="2">Skirts</label>
            </div>
            <div className="inputItem">
              <input type="checkbox" id="3" value={ 3 } />
              <label htmlFor="3">T-Shirt</label>
            </div>
        </div>

        {/* Filter by price range */}
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={ 0 } max={ 1000 } />
            <span>1000</span>
          </div>
        </div>

        {/* Filter by lowest to highest, vice versa */}
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price"  />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="dsc" value="dsc" name="price"  />
            <label htmlFor="dsc">Price (Highest first)</label>
          </div>
        </div>
      </div>

      {/* Right side category page */}
      <div className="right">
        <img className="catImg" src="https://images.pexels.com/photos/552784/pexels-photo-552784.jpeg?
        auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      </div>
      <List />
    </div>
  )
}

export default Product