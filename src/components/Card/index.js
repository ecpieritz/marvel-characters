import React from 'react'
import ImgOne from '../../assets/images/mv-test-carousel.jpg'

const CardList = () => {
  return (
    <div className='mv-card-list__card col-lg-2 col-md-12 '>
      <img src={ImgOne} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Nome Personagem</h5>
        </div>
    </div>
  )
}

export default CardList
