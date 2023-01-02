import React from 'react'

const Newsletter = () => {
  return (
    <section className='mv-newsletter'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-5'>
            <h2 className='text-center mv-colors__text__white'>RECEBA AS NOVIDADES DA MARVEL</h2>
          </div>
          <div className='col-md-7'>
            <p className='mv-colors__text__white'>Cadastre-se para receber nossas notícias em primeira mão<span className='mv-colors__text__red'>!</span></p>

            <label className='mv-colors__text__white' for="email-input">SEU MELHOR E-MAIL</label>
            <div className="input-group mb-3">
              <input id='email-input' type="text" className="form-control" aria-label="email" aria-describedby="send-button" />
              <div className="input-group-append">
                <button className="button btn-red-send" type="button" id="send-button"><span>ENVIAR</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
