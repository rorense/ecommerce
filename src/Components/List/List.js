import React from 'react'
import "./List.css"
import Card from "../Card/Card"
import useFetch from '../../hooks/useFetch'

// Display each product in a card format
function List({subCats, maxPrice, sort, catId}) {
  
  // Grabbing product from API
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}
    ${subCats.map((item)=>`&[filters][sub_categories][id][$eq]=${item}`)}
    &[filters][price][$lte]=${maxPrice}
    &sort=price:${sort}`
  );

  return (
    <div className='list'>
        { loading 
        ? "loading"
        : data?.map((item)=> 
            <Card item={ item } key={ item.id } />
        )}
    </div>
  )
}

export default List;