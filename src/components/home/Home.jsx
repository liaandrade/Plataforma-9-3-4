import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brand from '../../img/brand.png';
import homefigure from '../../assets/icons/mailbox.svg';
import rufus from '../../img/rufus.webp';
import dibbo from '../../img/dibbo.webp';
import dolly from '../../img/dolly.webp';
import localone from '../../img/local-one.jpg';
import localtwo from '../../img/local-two.jpg';
import localthree from '../../img/local-trhee.jpg';
import Carousel from 'react-bootstrap/Carousel';
import witcher from '../../img/witcher-operation.png';
import ListOrder from '../list-order/ListOrder';


const Home = () => {
return <>
  <header>
    <div>
      <Navbar expand="lg" className="bg-light custom-navbar">
        <Container className="d-flex align-items-center justify-content-between">

          <Navbar.Brand href="#home" className="navbar-brand m-0">
            <img src={brand} alt="Logomarca" className="img-fluid w-auto h-auto"></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-end">
              <Nav.Link href="#about" className="custom-nav-link">Sobre</Nav.Link>
              <Nav.Link href="#testemony" className="custom-nav-link">Depoimentos Mágicos</Nav.Link>
              <Nav.Link href="#property" className="custom-nav-link">Imóveis</Nav.Link>
              <Nav.Link href="#operation" className="custom-nav-link">Como funciona?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  </header>



  <main>
    <section className="container text-center text-md-start d-flex align-items-center custom-vh" >
      <div className="row align-items-center text-center gy-5">

        <div className="col">
          <h1>O lar perfeito, seja você um bruxo, um elfo ou um fantasma perdido!</h1>
          <p>Aluguel de imóveis na cidade de Lúmina</p>
          <button className="btn"><a href="#property">ALUGAR</a></button>
        </div>

        <div className="col-12 col-md-6 d-md-block">
          <figure>
            <img className="w-100" src={homefigure} alt="Figura do Ínicio" />
          </figure>
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


  <ListOrder />

  
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
</>;
}

export default Home
