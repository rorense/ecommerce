import React from 'react'
import "./List.css"

function List() {
    // Placeholder data
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/5730956/pexels-photo-5730956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "https://images.pexels.com/photos/5214139/pexels-photo-5214139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            title: "Shoes",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/1943846/pexels-photo-1943846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "",
            title: "Dress",
            isNew: true,
            oldPrice: 34,
            price: 26,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/2850487/pexels-photo-2850487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "",
            title: "Shirt",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/160438/ankle-socks-children-socks-knitted-greeting-160438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            img2: "",
            title: "Socks",
            isNew: false,
            oldPrice: 19,
            price: 12,
        },
    ]
  return (
    <div className='list'>List</div>
  )
}

export default List