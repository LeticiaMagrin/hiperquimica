import { Link } from "react-router-dom";
import { images } from "../../../Media/Media"


//css
import './Header.css'

function Headers() {

     const{
        marca2,
     } = images

    return (
        <>
            <nav className="navbar navbar-expand-lg  "id="heads">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to="/" className="link1">
                    <img className="logoHiper navbar-brand" src={marca2}  />
                    </Link>
                    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body " id="cabecalho-hiper">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to="/o-que-fazemos">
                                    <a className="nav-link active text-dark text-uppercase" aria-current="page" >O que fazemos</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/sobre">
                                    <a className="nav-link text-dark text-uppercase" >Sobre nós</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contato">
                                    <a className="nav-link text-dark text-uppercase" >Contato</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" >
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0 0 50 50">
                                    <path fill-rule="evenodd" d="M 34.734375 2 C 27.839844 2 23.359375 7.203125 23.359375 14.101563 C 23.359375 20.878906 26.992188 26.6875 32.4375 29.347656 C 30.136719 33.703125 27.597656 37.820313 24.574219 40.722656 C 19.246094 34.308594 13.800781 25.335938 12.46875 9 L 4 9 C 7.75 36.46875 19.246094 45.5625 22.152344 47.257813 C 23.847656 48.226563 25.175781 48.226563 26.75 47.378906 C 29.171875 46.046875 35.582031 39.148438 39.578125 31.042969 C 41.269531 31.042969 44.0625 30.808594 46 30.445313 L 46 25 C 44.667969 25 42.601563 24.992188 41.515625 24.992188 C 35.585938 24.992188 30.742188 21.242188 30.742188 14.222656 C 30.742188 10.714844 32.316406 9.261719 34.253906 9.261719 C 36.070313 9.261719 37.519531 10.472656 37.519531 13.738281 C 37.519531 15.554688 37.035156 17.609375 36.671875 18.820313 C 36.671875 18.820313 38.367188 22.449219 43.449219 21 C 44.539063 18.699219 45.144531 15.671875 45.144531 13.132813 C 45.144531 6.113281 41.511719 2 34.734375 2 Z"></path>
                                    </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></svg>
                                    </a>
                                    </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
                                    </a>
                                </li>
                             
                            </ul>
                            {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Headers;