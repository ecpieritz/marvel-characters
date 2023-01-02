import React from 'react'

const CardList = ({data}) => {
  return (
    <>
      {
        (data) ? (
          data.map(item => {
            return (
              <div className='mv-card-list__card col-lg-2 col-md-12 '>
                <img src={`${item.thumbnail.path}/standard_xlarge.${item.thumbnail.extension}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Nome: {`${item.name}`}</h5>
                </div>
              </div>
            )
          })
        ) : ""
      }
    </>
  )
}

export default CardList
