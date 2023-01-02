import React from 'react'
import MasterImg from '../../assets/images/mv-mastercard.png'

const Mastercad = () => {
  return (
    <section className='mv-mastercard'>
      <div className='container-fluid'>
        <h2 className='text-center mv-colors__text__black'>MARVEL MASTERCARD</h2>
        <h3 className='text-center mv-colors__text__gray font-weight-normal'>Desbloqueie seus super poderes</h3>

        <img src={MasterImg} alt="Cartões Marvel da Mastercard" />

        <a className='button btn-red-lg' href="https://google.com"><button>CADASTRE-SE AGORA</button></a>
        <a className='button btn-red-text' href="https://google.com"><button>ENTENDA COMO FUNCIONA</button></a>
      </div>
    </section>
  )
}

export default Mastercad
