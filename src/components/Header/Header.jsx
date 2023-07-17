import './Header.css';

import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import { FaExchangeAlt } from 'react-icons/fa';

export const Header = () => {
    return (
        
    <header className="container-header">
        <nav className="navbar navbar-expand-lg border-bottom border-bottom-dark" data-bs-theme="dark">
            <div className="container-fluid d-flex align-items-center justify-content-between">
                <a className="navbar-brand mx-sm-5 mx-0" href="#">
                                <img
                                src="https://www.mdp.com.pe/wp-content/uploads/2017/05/logo_top_header_shadow.png"
                                alt="LogoMdp"
                                className="d-inline align-text-top header-logo"
                                />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className='nav flex-nowrap align-items-center order-lg-2 hidden-navbar-elements'>
                    <a className="navbar-brand text-white header-icons-show" href="#"><AiOutlineSearch /></a>
                    <a className="navbar-brand text-white header-icons-show" href="#"><IoIosNotifications /></a>
                    <a className="navbar-brand text-white header-icons-show" href="#"><IoMdSettings /></a>
                    <div className="navbar-brand text-white">
                        <div className='dropdown'>
                            <a href="#" className='d-block link-body-emphasis text-decoration-none dropdown-toggle remove-dropdown-arrow' data-bs-toggle="dropdown" aria-expanded="false" >
                                <FaExchangeAlt className="header-icons" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-centrar header-option mt-4">
                                <li><a className="dropdown-item" href="#"><img src="https://www.mdp.com.pe/wp-content/uploads/2017/05/logo_top_header_shadow.png" alt="MDP" className="rounded-2 header-company" height="34"/> MDP Consulting</a></li>
                                <li><a className="dropdown-item" href="#"><img src="https://media.licdn.com/dms/image/C4E0BAQFn866Ld6jYWA/company-logo_200_200/0/1601254484011?e=2147483647&v=beta&t=7ywSIi-VPj5U5S1xeriS6isbuZNBR69f8g5H1oFZ4O0" alt="CEOL" className="rounded-circle header-company" height="38"/> CEOL Technology</a></li>
                                <li><a className="dropdown-item active" href="#"><img src="https://mob.datosperu.org/marcasi/marcas2006/SERIES_LOGOS_2006_269908.gif" alt="Oportunity" className="rounded-2 header-company" height="34"/> Opportunity Empresas</a></li>
                                <li><a className="dropdown-item" href="#"><img src="https://media.licdn.com/dms/image/C4E0BAQGJ_0ORVVaLNw/company-logo_200_200/0/1550093258431?e=2147483647&v=beta&t=RhFJ1H2kz0pkAMYcapmZQvhuNzuUzyWtJkEQoY__s9w" alt="mdp" className="rounded-2 header-company" height="32"/> Background IT</a></li>
                            </ul>
                        </div>
                    </div>
                    <a className="navbar-brand text-white mx-lg-4 header-username" href="#">Jhon Doe</a>

                    <div className="navbar-nav me-lg-3 mx-lg-4">
                        <div className="flex-shrink-0 dropdown">
                            <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle remove-dropdown-arrow" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" className="rounded-circle header-image-user" />
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end text-small shadow position-absolute mt-4 header-option custom-dropdown-menu">
                                <li className="dropdown-item bg-transparent">
                                    <div className="d-flex align-items-center">
                                        <img src="https://github.com/mdo.png" alt="jhon doe" className="rounded-2 header-image-user" />
                                        <div className="ms-3 text-white">
                                            <h5 className="mb-1 fs-sm-5 fs-6">Jhon Doe</h5>
                                            <p className="text-muted email-text">jhondoe@correo.com</p>
                                        </div>
                                    </div>
                                </li>
                                <li><div className="dropdown-divider"></div></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-bell-fill"></i> Recent Activity</a></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-gear-fill"></i> Settings</a></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-person-fill"></i> Profile</a></li>
                                <li><div className="dropdown-divider"></div></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-door-open-fill"></i> Sign out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
}