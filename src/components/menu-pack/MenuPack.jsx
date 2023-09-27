


import React from 'react'
import { Container,Row,Col} from 'reactstrap'
import ProductCard from '../product-card/ProductCard'
import { pizzaProducts } from '../../assets/fake-data/products'
import './menu-pack.css'

const MenuPack = () => {
  return<section>
    <Container>
        <Row>
            <Col lg='12' className="mb-5">
                <h2 className="menu__title">Menu</h2>
                </Col>
            
        
          {
            pizzaProducts.map(item=>(
                <Col lg='3' key={item.id} className="mb-4"><ProductCard item={item}/></Col>
            ))
          }
        
        </Row>
    </Container>

  </section>
}

export default MenuPack