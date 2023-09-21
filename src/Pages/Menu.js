import React from 'react'
import { MenuList } from "../helpers/MenuList"
import  MenuItem  from '../Components/MenuItem'
import "../Styles/Menu.css"
function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Menu</h1>
      <div className='menuList'>
       {
         MenuList.map((item,key)=>{
           return <MenuItem key={key} name={item.name} image={item.image} price={item.price}/>
         })
       }
      </div>
    </div>
  )
}

export default Menu
