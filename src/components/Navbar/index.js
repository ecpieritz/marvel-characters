import mvLogo from '../../assets/images/mv-logo.png'
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
  return (
    <>
      <nav className="mv-navbar navbar navbar-expand-md mv-colors__bg__black mv-colors__text__white">
        <a className="navbar-brand" href="https://google.com">
          <img src={mvLogo} alt="Logotipo Marvel" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars color='white' size='40px' />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="https://google.com">FILMES <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://google.com">QUADRINHOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://google.com">PROGRAMAS DE TV</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://google.com">JOGOS</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
