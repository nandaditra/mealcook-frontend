import logo from '../img/logo-mealcook.png'
import '../index.css'

export default function Header() {
    return (
        <div>
            <header className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#">
                             <img src={logo} width="30" height="30" className="d-inline-block align-top float-left" alt="#"/>
                             <h4 className="float-left">mealcook</h4>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ml-md-auto" id="navbarNav">
                           <ul className="navbar-nav ml-auto">
                            <li className="nav-item nav-color">
                                <a className="nav-link nav-color" href="#home">Home</a>
                            </li>
                            <li className="nav-item nav-color">
                                <a className="nav-link nav-color" href="#about">What's Is</a>
                            </li>
                            <li className="nav-item nav-color">
                                <a className="nav-link nav-color" href="#benefit">Advantages</a>
                            </li>
                            <li className="nav-item nav-color">
                                <a className="nav-link nav-color" href="#example-recipe">Example</a>
                            </li>
                            <li className="nav-item nav-color">
                                <a className="nav-link nav-color" href="#lets-cook">Let's Try</a>
                            </li>
                            </ul>
                        </div>
                 </nav>
            </header>
        </div>
    )
}