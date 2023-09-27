



import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

const footerQuickLinks =[
    {
        display: 'Terms & Conditions',
        url: '#'
    },
    {
        display: 'Privacy Policy',
        url: '#'
    },
    {
        display: 'Return & Refund',
        url: '#'
    },
    {
        display: 'Payment Method',
        url: '#'
    }

]
const footerLinks =[
    {
        display: 'About Us',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Contacts',
        url: '#'
    }

]




const Footer = () => {
  return <footer className="footer">
    <div className="footer__top">
        <Container>
            <Row>
                <Col lg='3' md='4' sm='6'>
                <div className="logo">
            <h2 className="d-flex align-items-center gap-1 mb-4 ">
                <span><i class="ri-restaurant-line"></i></span> Best pizza
            </h2>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptates aperiam itaque minus libero nihil?</p> 
        </div>
                </Col>
                <Col lg='3' md='4' sm='6'>
                    <h5 className="footer__link-title">Info Links</h5>
                    <ListGroup>

                        {
                            footerQuickLinks.map((item,index)=><ListGroupItem key={index} className="link__item">
                            <a href={item.url}>{item.display}</a>
                          </ListGroupItem>)
                          }
                      </ListGroup>
                        
                        
                </Col>


                <Col lg='2' md='4' sm='6'>
                    <h5 className="footer__link-title">Quick Links</h5>
                    <ListGroup>

                        {
                            footerLinks.map((item,index)=><ListGroupItem key={index} className="link__item">
                            <a href={item.url}>{item.display}</a>
                          </ListGroupItem>)
                          }
                      </ListGroup>
                </Col>

                <Col lg='4' md='4' sm='6'>
                <h5 className="footer__link-title">Contact</h5>
                <ListGroup>
                    <ListGroupItem className="link__item d-flex align-items-center gap-3">
                        <i class="ri-map-pin-line"></i>Kaunas, Lithuania {""}</ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className="link__item d-flex align-items-center gap-3">
                    <i class="ri-mail-line"></i>bestpizza@gmail.com {""}</ListGroupItem>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className="link__item d-flex align-items-center gap-3">
                    <i class="ri-phone-line"></i>+370 5555555 {""}</ListGroupItem>
                </ListGroup>
                </Col>
            </Row>
        </Container>
        <div className="footer__bottom">
            <Container>
                <Row>
                    <Col lg='12'>
                        <p>Copyright 2023, developed by Giedrė Vičkačkaitė All rights reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>

  </footer>
}

export default Footer