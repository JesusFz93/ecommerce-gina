import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { NavLink } from 'react-router-dom';

const NavbarPublico = () => {

  const { auth } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            DOODLE CAFÉ.
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/productos"
                >
                  Productos
                </NavLink>
              </li>
            </ul>
            <div className="dropdown">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {auth.username ? auth.username : "Cuenta"}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "dropdown-item active" : "dropdown-item"
                        }
                        aria-current="page"
                        to="/login"
                      >
                        Iniciar sesión
                      </NavLink>
                    </li>
                    <li>
                      <hr className='dropdown-divider'/>
                    </li>
                    <li>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "dropdown-item active" : "dropdown-item"
                        }
                        aria-current="page"
                        to="/registro"
                      >
                        Registrarse
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarPublico;