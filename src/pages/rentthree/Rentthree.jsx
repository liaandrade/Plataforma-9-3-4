import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand from '../../img/brand.png';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../rentone/rent.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import thirdprop from '../../img/third-prop.jpeg';
import rentthreetwo from '../../img/rentthree-two.jpg';
import rentthreethree from '../../img/rentthree-three.jpg';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import button from '../../components/button/button';

const Rentthree = () => {
const navigate = useNavigate()
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
        <section id="property-three">

            <div className={classNames("p-5", styles["color"])}>
              <h2 className={classNames("container")}>Casa encantada do lago</h2>
              <p className={classNames("text-justify", "fst-italic", "container")}>Às margens do lago nº7, Bosque Místico - Lúmina</p>
              
              <div>

                <div className={classNames("carousel", "slide", "container")} id="carouselabout">
                    <Carousel className={classNames("card-img")} fade>
                      <Carousel.Item>
                        <img
                          className={classNames("w-100", styles["custom-carousel-img"])} src={thirdprop} alt='Ambiente'
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={classNames("w-100", styles["custom-carousel-img"])} src={rentthreetwo} alt='Ambiente'
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={classNames("w-100", styles["custom-carousel-img"])} src={rentthreethree} alt='Ambiente'
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
            </div>

            <div className={classNames("mt-4", "container")}>
              <h4 className={classNames("mb-3")}><strong>Aluguel 3.800 G</strong></h4>
              <h4>Características do Imóvel</h4>
              <Row>
                <Col sm={6}>
                  <p><strong>Área Total:</strong> 120 m²</p>
                  <p><strong>Quartos:</strong> 4</p>
                  <p><strong>Banheiros:</strong> 3</p>
                </Col>
                <Col sm={6}>
                  <p><strong>Mobilia</strong> Sem mobília</p>
                  <p><strong>Tipo:</strong> Casa</p>
                  <p><strong>Comodidades:</strong> Deck e cais privativo</p>
                </Col>
              </Row>
              </div>

            <div className={classNames("mt-4", "container")} style={{ paddingBottom: '70px' }}>
              <h4>Descrição Completa</h4>
              <p>&nbsp;Situada ao lado de um lago mágico, esta casa tem uma fachada de vidro que reflete as águas calmas e místicas. O imóvel é rodeado por árvores antigas e uma trilha de pedras que leva até uma ilha no meio do lago. A casa possui um ambiente sereno, ideal para quem deseja um lugar de descanso e conexão com a natureza.</p>
              <p>&nbsp;Dentro da casa, a decoração mistura elementos rústicos e encantados, com móveis esculpidos em madeira viva que parecem respirar junto ao ambiente. Velas flutuantes iluminam os cômodos à noite, emitindo um brilho suave e reconfortante. Uma lareira de chamas azuladas aquece os dias frios, enquanto janelas encantadas se ajustam à luz natural, proporcionando sempre a melhor vista do lago e da floresta ao redor.</p>
              <p>&nbsp;No exterior, a trilha de pedras leva a um pequeno cais, onde um barco encantado aguarda para levar os moradores até a ilha secreta. Dizem que, em noites de lua cheia, a ilha revela ruínas antigas com símbolos brilhantes e um jardim de flores luminescentes. O som das águas calmas misturado ao farfalhar das folhas cria uma melodia natural que embala os momentos de descanso, tornando essa casa um verdadeiro refúgio para a alma.</p>
            </div>      
        </section>
      </main>


      <footer className={classNames("position-fixed", "bottom-0","w-100", "py-2", styles["custom-footer"])}>
        <button className={classNames("text-center", styles["custom-btn"])} onClick={button}>Agendar visita</button>
      </footer>
    </div>
  )
}

export default Rentthree