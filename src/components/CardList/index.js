import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from '../Card'

const CardList = () => {
  const marvelApi = 'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=a6bdc001c25f333a673aaf8136daf65a&hash=a3a5e8eacc201e35fbfd73b000c68d55&limit=36'

  const [url, setUrl] = useState(marvelApi)
  const [item, setItem] = useState()

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(url)
      setItem(response.data.data.results)
    }
    fetch()
  }, [url])

  return (
    <section className='mv-card-list'>
      <div className='container-fluid'>
        <h3>LISTA DE PERSONAGENS DA MARVEL</h3>

        <div className='row'>
        {
          (!item) ? <p>Nada encontrado</p> : <Card data={item} />
        }
        </div>
      </div>
    </section>
  )
}

export default CardList
