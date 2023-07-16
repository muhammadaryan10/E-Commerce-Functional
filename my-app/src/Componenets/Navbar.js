import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function Navbar() {

  const { loginWithRedirect, logout,isAuthenticated }= useAuth0();

  const getdata = useSelector((state) => state.CartReducer.carts);
  // console.log(getdata);
  return (
    <>
      <nav className="navbar navbar-expand-md bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mx-2  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-brand-container">
            <Link className="navbar-brand" href="/">
              Navbar
            </Link>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo02"
          >
            <Link className="btn btn-danger position-relative mx-2" to="/CartPage">
              cart{""}
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                {getdata.length}{" "}
                <span className="visually-hidden">unread messages</span>
              </span>
            </Link>
          </div>
          {isAuthenticated?
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
             Log Out
           </button>: 
          <button  onClick={()=>loginWithRedirect()} type="button" className="btn btn-sm btn-danger my-2">
            Log in
          </button>}
        </div>
      </nav>
    </>
  );
}
