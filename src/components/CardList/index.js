import React from 'react'
import Card from '../Card'

const CardList = () => {
  return (
    <section className='mv-card-list'>
      <div className='container-fluid'>
        <h3>LISTA DE PERSONAGENS DA MARVEL</h3>

        <div className='row'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <nav aria-label="Characters navigation">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="https://google.com" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item active"><a className="page-link" href="https://google.com">1</a></li>
            <li className="page-item"><a className="page-link" href="https://google.com">2</a></li>
            <li className="page-item"><a className="page-link" href="https://google.com">3</a></li>
            <li className="page-item">
              <a className="page-link" href="https://google.com" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default CardList
