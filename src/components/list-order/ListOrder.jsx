import React, { useState } from 'react';
import firstpro from '../../img/first-pro.jpg';
import secondprop from '../../img/second-prop.jpg';
import thirdtprop from '../../img/third-prop.jpeg';
import { useNavigate } from 'react-router-dom';


const ListOrder = () => {

    const navigate = useNavigate()
    const [rents, setRents] = useState([
    {
        id: 1,
        name: "Casa feiticeiro solitário",
        addres: "Estrada da névoa nº13 - Encantadas, Lúmina",
        description: "3 quartos/ 1 sala secreta",
        price: 3500,
        img: firstpro,
        url: "/imovel001"

    },

    {
        id: 2,
        name: "Casa das estrelas",
        addres: "Colina dos astros nº42 - Vila Celestial, Lúmina",
        description: "2 quartos/ 1 observatório",
        price: 4200,
        img: secondprop,
        url: "imovel002"
    },

    {
        id: 3,
        name: "Casa encantada do lago",
        addres: "Margens místicas nº84 - Bosque, Lúmina",
        description: "4 quartos/ 1 cais privado",
        price: 3800,
        img: thirdtprop,
        url: "imovel003"
    },
    ]);
    const filterlower = () => {
    const lowerPrice = [...rents].sort((a, b) => a.price - b.price) 
    setRents (lowerPrice);
    };
    const filterhighest = () => {
    const highestPrice = [...rents].sort((a, b) => b.price - a.price) 
    setRents (highestPrice);
    };

return (
<>
<section className="container">
<h3 className="mt-5" id="property">Aluguéis em Lúmina</h3>
<p className="mb-4 fst-italic custom-opacity">3 imóveis encontrados</p>

<div className="d-grid d-md-flex gap-2">
    <button className="btn" onClick = {filterlower}>Ordenar por menor preço </button>
    <button className="btn" onClick = {filterhighest}>Ordenar por maior preço </button>
</div>

<div className="container mt-4">

<div className="row g-5">
  {rents.map((rents) => (

    <div key={rents.id} className="col-md-4">
        
      <div className="card custom-card">
        <img src={rents.img} className="card-img-top" alt={rents.name}/>
        
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
          </span><strong>{rents.price.toString().slice(0, 1) + "." + rents.price.toString().slice(1)} G</strong></p>
          
            <div className="text-center">
              <button className="btn" onClick={() => navigate(rents.url)}>Saiba mais</button>
            </div>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</section>
</>
);
}
export default ListOrder
