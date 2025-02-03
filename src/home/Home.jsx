import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand from '../img/brand.png';
import homefigure from '../assets/icons/mailbox.svg';
import firstpro from '../img/first-pro.jpg';
import secondprop from '../img/second-prop.jpg';
import thirdtprop from '../img/third-prop.jpeg';
import rufus from '../img/rufus.webp';
import dibbo from '../img/dibbo.webp';
import dolly from '../img/dolly.webp';
import localone from '../img/local-one.jpg';
import localtwo from '../img/local-two.jpg';
import localthree from '../img/local-trhee.jpg';
import Carousel from 'react-bootstrap/Carousel';
import witcher from '../img/witcher-operation.png';

const rents = [
  {
    id: 1,
    name: "Casa feiticeiro solitário",
    addres: "Estrada da névoa nº13 - Encantadas, Lúmina",
    description: "3 quartos/ 1 sala secreta",
    price: "350.000 G",
    img: firstpro
  },

  {
    id: 2,
    name: "Casa das estrelas",
    addres: "Colina dos astros nº42 - Vila Celestial, Lúmina",
    description: "2 quartos/ 1 observatório",
    price: "420.000 G",
    img: secondprop
  },

  {
    id: 3,
    name: "Casa encantada do lago",
    addres: "Margens místicas nº84 - Bosque nevado, Lúmina",
    description: "4 quartos/ 1 cais privado",
    price: "380.000 G",
    img: thirdtprop
  },
];

const Home = () => {
return (
<>
  <header>
    <div>
      <Navbar expand="lg" className="bg-light custom-navbar">
        <Container className="d-flex align-items-center justify-content-between">

          <Navbar.Brand href="#home" className="navbar-brand m-0">
            <img src={brand} alt="Logomarca" className="img-fluid w-auto h-auto" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-end">
              <Nav.Link href="#property" className="custom-nav-link">Imóveis</Nav.Link>
              <Nav.Link href="#testemony" className="custom-nav-link">Depoimentos Mágicos</Nav.Link>
              <Nav.Link href="#about" className="custom-nav-link">Sobre</Nav.Link>
              <Nav.Link href="#operation" className="custom-nav-link">Como funciona?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </header>



  <main>
    <section className="container text-center text-md-start mt-5" >
      <div className="row align-items-center text-center gy-5">
        <div className="col">
          <h1>O lar perfeito, seja você um bruxo, um elfo ou um fantasma perdido!</h1>
          <p>Aluguel de imóveis na cidade de Lúmina</p>
          <button className="btn btn-primary"><a href="#property">ALUGAR</a></button>
        </div>

        <div className="col-12 col-md-6 d-md-block">
          <figure>
            <img className="w-100" src={homefigure} alt="Figura do Ínicio" />
          </figure>
        </div>
      </div>
    </section>


    <section className="container" id="property">
      <h3 className="mt-5">Alugéis em Lúmina</h3>
      <p className="mb-4 fst-italic custom-opacity">3 imóveis encontrados</p>

      <div className="container mt-4">
      <div className="row g-5">
        {rents.map((rents) => (
          <div key={rents.id} className="col-md-4">
            <div className="card">
              <img src={rents.img} className="card-img-top" alt={rents.name} />
              <div className="card-body">
                <h4 className="card-title">{rents.name}</h4>
                <p className="card-text"><span className="m-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-feather" viewBox="0 0 16 16">
                    <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173" />
                  </svg>
                </span>{rents.addres}</p>
                <p className="card-text"><span className="m-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                  </svg>
                </span>{rents.description}</p>
                <p className="card-text"><span className="m-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                    <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                  </svg>
                </span><strong>{rents.price}</strong></p>
                
                <div className="text-center">
                  <button className="btn btn-primary">Saiba mais</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>


    <section className="container" id="testemony">
      <h2 className="mt-5 mb-4 text-center">Depoimentos</h2>
      
      <div className="d-flex flex-column flex-md-row gap-3">
        <div className="text-center">
          <figure>
            <img className="rounded-circle" src={rufus} alt="Avatar" />
          </figure>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>Finalmente encontrei minha cabana na Floresta Proibida, cortesia da 9 3/4 Imóveis!</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Rufus Hadrig<cite title="Source Title"> em "Avaliações"</cite>
            </figcaption>
          </figure>
        </div>

        <div className="text-center">
          <figure>
            <img className="rounded-circle" src={dibbo} alt="Avatar" />
          </figure>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>Ótimos preços! Até um elfo doméstico pode alugar uma casa aqui.</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Dibbo<cite title="Source Title"> em "Avaliações"</cite>
            </figcaption>
          </figure>
        </div>

        <div className="text-center">
          <figure>
            <img className="rounded-circle" src={dolly} alt="Avatar" />
          </figure>
          <figure className="text-center">
            <blockquote className="blockquote">
              <p>O atendimento é tão rápido quanto um passeio em uma Nimbus 2000!</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Dolly Feasley<cite title="Source Title"> em "Avaliações"</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>


    <section className="color" id="about">
      <h2 className="container pt-4 mt-5">Sobre</h2>

      <div className="container">
        <p className="text-justify fst-italic">Fundada no ano 329 do Ciclo Solar, a Plataforma 9 3/4 Imóveis é a mais
          prestigiada imobiliária de todo o
          Reino dos Sete Céus, é inovadora e surgiu na cidade de Lúmina, onde magia e tecnologia se misturam de maneira
          disruptiva. Criada por um grupo de jovens magos e arquétipos, a startup tem como objetivo transformar a
          experiência de procurar imóveis mágicos em algo mais simples e acessível, para todos, desde feiticeiros
          iniciantes até viajantes interdimensionais. Conheça um pouco dos nossos ambientes:
        </p>

        <div class="carousel slide pb-5" id="carouselabout">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="w-100" src={localone} alt='Ambiente'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100" src={localtwo} alt='Ambiente'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-100" src={localthree} alt='Ambiente'
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>


    <section className="container text-center text-md-start mt-5" id="operation">
      <div className="row align-items-center text-start">
        <div className="col-12 col-md-6 d-md-block">
          <figure>
            <img className="w-100" src={witcher} alt="Bruxa" />
          </figure>
        </div>

        <div className="col">
          <h1>Como funcionamos?</h1>
          <ul className="text-sm-start pb-4">
            <li className="mb-3">O pagamento de nossos imóveis é feito com Galeões de ouro. Para evitar dores de cabeças com quebra de contrato ou débitos, solicitamos que o compromisso seja firmado mediante um feitiço de fidelidade!</li>
            <li className="mb-3">Todo imóvel passa por uma inspeção do Departamento de Regulamentação das Propriedades Bruxas.</li>
            <li className="mb-3">Cada casa recebe um selo mágico com categorias como "Alta Magia Residencial" e "Isolamento Atitrouxas".</li>
            <li className="mb-3">Oferecemos o desconto adivinhação: Todos podem apostar no seu futuro para garantir um menor valor de aluguel...</li>
            <li>Antes de fechar o contrato, o cliente pode experimentar uma ilusão mágica, que recria a casa em outro lugar.</li>
          </ul>
        </div>
      </div>
    </section>
  </main>


<footer>
  <p> &copy; 2025 - Lia Andrade</p>
</footer>
</>
)
}

export default Home

