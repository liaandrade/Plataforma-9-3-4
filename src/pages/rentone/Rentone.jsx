import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand from '../../img/brand.png';
import Carousel from 'react-bootstrap/Carousel';
import styles from './rent.module.css';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import firstpro from '../../img/first-pro.jpg';
import rentonetwo from '../../img/rentone-two.jpg';
import rentonethree from '../../img/rentone-three.jpg';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';  
import button from '../../components/button/button';


const Rentone = () => {
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
        <section id="property-one">

            <div className={classNames("p-5", styles["color"])}>
              <h2 className={classNames("container")}>Casa Feiticeiro Solitário</h2>
              <p className={classNames("text-justify", "fst-italic", "container")}>Rua Estrada da Névoua nº13, Encantadas - Lúmina</p>
              
              <div>

                <div className={classNames("carousel", "slide", "container")} id="carouselabout">
                    <Carousel className={classNames("card-img")} fade>
                      <Carousel.Item>
                        <img
                          className={classNames("w-100", styles["custom-carousel-img"])} src={firstpro} alt='Ambiente'
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={classNames("w-100", styles["custom-carousel-img"])} src={rentonetwo} alt='Ambiente'
                        />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className={classNames("w-100", styles["custom-carousel-img"])} src={rentonethree} alt='Ambiente'
                        />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>
            </div>

            <div className={classNames("mt-4", "container")}>
              <h4 className={classNames("mb-3")}><strong>Aluguel 3.500 G</strong></h4>
              <h4>Características do Imóvel</h4>
              <Row>
                <Col sm={6}>
                  <p><strong>Área Total:</strong> 50 m²</p>
                  <p><strong>Quartos:</strong> 3</p>
                  <p><strong>Banheiros:</strong> 2</p>
                </Col>
                <Col sm={6}>
                  <p><strong>Mobilia</strong> Semi mobiliado</p>
                  <p><strong>Tipo:</strong> Casa</p>
                  <p><strong>Comodidades:</strong> Jardim e sala secreta</p>
                </Col>
              </Row>
              </div>

            <div className={classNames("mt-4", "container")} style={{ paddingBottom: '70px' }}>
              <h4>Descrição Completa</h4>
              <p>&nbsp;Uma casa isolada, localizada à beira de uma floresta encantada. Seu design é rústico, com paredes de pedra, janelas com vitrais mágicos e uma grande lareira. O imóvel possui um pequeno jardim com ervas e plantas raras, ideais para feitiçarias. A casa também conta com uma sala secreta, acessível apenas por um feitiço.</p>
              <p>&nbsp;A casa é envolta por uma aura de mistério, com suas paredes de pedra antigas que guardam segredos de gerações passadas. O teto, de madeira escura, é sustentado por vigas robustas, e o cheiro de terra molhada permeia o ar, criando uma sensação de conexão profunda com a natureza ao redor. No interior, os vitrais mágicos das janelas projetam uma luz suave e multicolorida, alterando suas tonalidades de acordo com a hora do dia. A lareira central, sempre acesa, emite uma chama azulada que parece ter vida própria, iluminando os cantos escuros e aquecendo os corações dos que entram.</p>
              <p>&nbsp;O jardim ao redor da casa é um verdadeiro refúgio de plantas raras, com flores que só florescem à noite e ervas que têm propriedades místicas poderosas. Entre as árvores antigas que cercam o local, algumas espécies raras de plantas crescem em segredo, utilizadas por magos e bruxas para realizar feitiçarias e poções. A sala secreta, oculta em algum ponto da casa, só pode ser acessada por aqueles que conhecem os feitiços certos. Dizem que é lá que antigos grimórios e artefatos mágicos estão escondidos, aguardando ser descobertos por aqueles dignos o suficiente para desvendar os mistérios que a casa guarda.</p>
            </div>      
        </section>
      </main>


      <footer className={classNames("position-fixed", "bottom-0","w-100", "py-2", styles["custom-footer"])}>
        <button className={classNames("text-center", styles["custom-btn"])} onClick={button}>Agendar visita</button>
      </footer>
    </div>
  )
}

export default Rentone
