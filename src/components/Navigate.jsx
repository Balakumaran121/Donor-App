import React from 'react'
import { Link } from 'react-router-dom'

const Navigate = () => {
    const data =[
        {
            id:1,
            link:"/about",
            icon:"fa-solid fa-user",
            name:"About"
        },{
            id:2,
            link:"/contact",
            icon:"fa-solid fa-envelope",
            name:"Contact"
        }
    ]
  return (
    <ul>
        {
            data.map((item)=>(<li key={item.id}><Link to={item.link}>{item.name}</Link></li>))
        }
    </ul>
  )
}

export default Navigate