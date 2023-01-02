import React from 'react'

const SlideCard = ({ name, img }) => {
  return (
      <div className="mv-carousel__slider__item">
        <img src={img} alt="" />
        <p className="mv-carousel__slider__item__name">{name}</p>
      </div>
  )
}

export default SlideCard
