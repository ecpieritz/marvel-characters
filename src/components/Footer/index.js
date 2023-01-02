import React from 'react'
import miniLogo from '../../assets/images/mv-m-logo.png'
import imgBlog from '../../assets/images/mv-blog.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='mv-footer'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='row'>
            <div className='col-md-1'>
              <img className='mv-footer__logo' src={miniLogo} alt="" />
            </div>
            <div className='col-md-3 d-flex flex-column'>
              <h3>A Marvel</h3>
              <a className='button btn-gray-text' href="https://www.marvel.com/corporate/about" target="_blank" rel='noreferrer'><button>Sobre a Marvel</button></a>
              <a className='button btn-gray-text' href="https://help.marvel.com/hc/en-us" target="_blank" rel='noreferrer'><button>Ajuda</button></a>
              <a className='button btn-gray-text' href="https://jobs.disneycareers.com/search-jobs?orgIds=391-1635-24091&ascf=[{%22key%22:%22custom_fields%252EIndustryCustomField%22,%22value%22:%22Marvel%20Entertainment%22}]" target="_blank" rel='noreferrer'><button>Carreiras</button></a>
            </div>
            <div className='col-md-4 d-flex flex-column'>
              <h3>Mídia</h3>
              <a className='button btn-gray-text' href="https://www.marvel.com/movies" target="_blank" rel='noreferrer'><button>Filmes</button></a>
              <a className='button btn-gray-text' href="https://www.marvel.com/comics?&options%5Boffset%5D=0&totalcount=12" target="_blank" rel='noreferrer'><button>Quadrinhos</button></a>
              <a className='button btn-gray-text' href="https://www.marvel.com/tv-shows" target="_blank" rel='noreferrer'><button>Programas de TV</button></a>
              <a className='button btn-gray-text' href="https://www.marvel.com/games" target="_blank" rel='noreferrer'><button>Jogos</button></a>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='row'>
            <div className='col-md-8'>
              <h3>Última do blog</h3>

              <div className='row'>
                <div className='col-2'>
                  <img src={imgBlog} alt="imagem Blog" />
                </div>
                <div className='col-8'>
                  <p>2022 Year In Review: Favorite MCU Moment</p>
                </div>
              </div>

              <a className='button btn-gray-text' href="https://www.marvel.com/articles/movies/2022-year-in-review-favorite-mcu-moment"><button>Continue lendo</button></a>
            </div>
            <div className='col-md-4'>
              <h3>Siga a Marvel</h3>
              <div className='d-flex'>
                <a href="" target="_blank" rel='noreferrer'><FaFacebookSquare size="24px" color="#9B9B9B" /></a>
                <a href="" target="_blank" rel='noreferrer'><FaSpotify size="24px" color="#9B9B9B" /></a>
                <a href="" target="_blank" rel='noreferrer'><FaInstagram size="24px" color="#9B9B9B" /></a>
                <a href="" target="_blank" rel='noreferrer'><FaYoutube size="27px" color="#9B9B9B" /></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
