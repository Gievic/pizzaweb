import React, {useRef, useState} from 'react'
import "./header.css"
import ShoppingCart from './shopping-cart/ShoppingCart'

import { Container } from 'reactstrap'



const navLinks = [
 {
    display: 'Home',
    url: '#'
 },
 {
    display: 'About',
    url: '#'
 },
 {
    display: 'Menu',
    url: '#'
 },
 {
    display: 'Contact',
    url: '#'
 },

]




const Header = () => {

    const [cartVisibility, setCartVisible] = useState(false);
    const [productsInCart, setProducts] = useState([]);

    const menuRef= useRef()

    const menuToggle =()=> menuRef.current.classList.toggle('active__menu')
  
    return (
    <header className="header">

<Container>
     <ShoppingCart
            visibility={cartVisibility}
            products={productsInCart}/>
    <div className="navigation">
        <div className="logo">
            <h2 className="d-flex align-items-center gap-1 ">
                <span><i class="ri-restaurant-line"></i></span> Best pizza
            </h2>
        </div>

    <div className="nav__menu " ref={menuRef}>
        <div className="nav__list__wrapper d-flex align-items-center gap-5">
             <ul className="nav__list">
                { navLinks.map((item,index)=>(
            <li className="nav__item" key={index}>
             <a href={item.url}  onClick={menuToggle} >{item.display}</a>
            </li>
          )) }
         </ul>
         <div className="menu__right">
            <div className="custom__search">
                <input type="text" placeholder='Search'/>
                <span>
                    <i class="ri-search-line"></i>
                </span>
         </div>
         </div>
         </div>
         </div>
        
        <div>
           
            <span className="cart__icon">
           <button onClick={() => setCartVisible(true)}> <i class="ri-shopping-bag-line"></i></button>
            
            </span>
        </div>
           
            <div className="mobile__menu">
                <span><i class="ri-menu-line" onClick={menuToggle}></i></span>
            </div>
        </div>
    
</Container>

    </header>
  )
}

export default Header