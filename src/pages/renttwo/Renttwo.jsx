import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand from '../../img/brand.png';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../rentone/rent.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import secondprop from '../../img/second-prop.jpg';
import renttwotwo from '../../img/renttwo-two.jpg';
import renttwothree from '../../img/renttwo-three.jpg';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';  
import button from '../../components/button/button';

const Renttwo = () => {
const navigate = useNavigate();

  return (
    <div className={classNames(styles["custom-rent"])}>
      <header>
          <div>
            <Navbar expand="lg" className={classNames("bg-light", styles["custom-navbar"])}>
              <Container className={classNames("d-flex", "align-items-center", "justify-content-between")}>

                <Navbar.Brand href="#home" className={classNames("navbar-brand", styles["m-0"])}>
                    <img src={brand} alt="Logomarca" className={classNames("img-fluid")} style={{ maxWidth: '90px', height: 'auto', objectfit:'cover' }} onClick={() => navigate("/")}></img>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls={classNames("basic-navbar-nav")} />
                <Navbar.Collapse id={classNames("basic-navbar-nav")}>
                  <Nav className={classNames("ms-auto text-end")}>
                    <Nav.Link href="/" className={classNames("custom-nav-link")}>Início</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
      </header>

    

      <main>     
        <section id="property-two">

            <div className={classNames("p-5", styles["color"])}>
              <h2 className={classNames("container")}>Casa das estrelas</h2>
              <p className={classNames("text-justify", "fst-italic", "container")}>Rua Colina dos astros nº42, Vila Celestial - Lúmina</p>
              
              <div>

                <div className={classNames("carousel", "slide", "container")} id="carouselabout">
                    <Carousel className={classNames("card-img")} fade>
                      <Carousel.Item>
                        <img
                          className={classNames("w-100", styles["custom-carousel-img"])} src={secondprop} alt='Ambiente'
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={classNames("w-100", styles["custom-carousel-img"])} src={renttwotwo} alt='Ambiente'
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={classNames("w-100", styles["custom-carousel-img"])} src={renttwothree} alt='Ambiente'
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
            </div>

            <div className={classNames("mt-4", "container")}>
              <h4 className={classNames("mb-3")}><strong>Aluguelj 4.200 G</strong></h4>
              <h4>Características do Imóvel</h4>
              <Row>
                <Col sm={6}>
                  <p><strong>Área Total:</strong> 90 m²</p>
                  <p><strong>Quartos:</strong> 2</p>
                  <p><strong>Banheiros:</strong> 2</p>
                </Col>
                <Col sm={6}>
                  <p><strong>Mobilia</strong> Mobiliado</p>
                  <p><strong>Tipo:</strong> Casa</p>
                  <p><strong>Comodidades:</strong> Varanda e observaório</p>
                </Col>
              </Row>
              </div>

            <div className={classNames("mt-4", "container")} style={{ paddingBottom: '70px' }}>
              <h4>Descrição Completa</h4>
              <p>&nbsp;Localizada em uma colina, esta casa tem um teto de vidro encantado, proporcionando uma visão deslumbrante do céu noturno. A casa tem decoração moderna com toques mágicos, como móveis flutuantes e objetos que se movem por encantamento. Ideal para quem gosta de astronomia e magia.</p>
              <p>&nbsp;Durante o dia, a luz natural inunda os ambientes através do teto de vidro, criando um jogo de reflexos encantador que destaca os detalhes mágicos da decoração. Plantas encantadas que florescem de acordo com o humor do morador e lareiras que acendem com um estalar de dedos tornam o espaço ainda mais acolhedor. A biblioteca, repleta de livros que sussurram histórias antigas, é um convite irresistível para aqueles que buscam conhecimento místico.</p>
              <p>&nbsp;À noite, a casa se transforma em um verdadeiro observatório celestial, onde estrelas cadentes e constelações parecem ao alcance das mãos. O quarto principal conta com um sistema de levitação suave que permite dormir flutuando sob o brilho da lua. A varanda, cercada por uma névoa cintilante, é perfeita para encontros mágicos ou momentos de contemplação. Um refúgio único, onde ciência e feitiçaria se encontram em perfeita harmonia.</p>
            </div>      
        </section>
      </main>


      <footer className={classNames("position-fixed", "bottom-0","w-100", "py-2", styles["custom-footer"])}>
        <button className={classNames("text-center", styles["custom-btn"])} onClick={button}>Agendar visita</button>
      </footer>
    </div>
  )
}

export default Renttwo