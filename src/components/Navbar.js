import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/TextEditor/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/TextEditor/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/TextEditor/about">{props.about}</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        <button type="button" className="btn btn-success mx-2" style={{ height: "2vw", width: "2vw", border: "2px solid black" }} onClick={() => { props.mynewclick("success") }}></button>

                        <button type="button" className="btn btn-danger mx-2" style={{ height: "2vw", width: "2vw", border: "2px solid black" }} onClick={() => { props.mynewclick("danger") }}></button>

                        <button type="button" className="btn btn-warning mx-2" style={{ height: "2vw", width: "2vw", border: "2px solid black" }} onClick={() => { props.mynewclick("warning") }}></button>
                        <button type="button" className="btn btn-info mx-2" style={{ height: "2vw", width: "2vw", border: "2px solid black" }} onClick={() => { props.mynewclick("info") }}></button>

                        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                            <input className="form-check-input" onClick={props.mytoggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.writemode}</label>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "new text editor",
    about: "new about us"
}




