import React from "react";
import logo from "../assets/logonew.png";
import "./FeedStyle.css";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";
function NavigationBar() {
  const handleLogout = () => {
    localStorage.clear();

    window.location.reload();
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">
        <img
          src={logo}
          width="120"
          height="120"
          id="ima"
          alt="logo"
          style={{ margin: "0 15px" }}
        />
        Youngistaan
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <div>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </div>
          <div onClick={handleLogout}>
            <Nav.Link eventKey={2}>Logout</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    //         <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    //     <a class="navbar-brand" href="/"><img src={logo} width="60" height="60" id="ima" alt="logo"  style={{margin : "0 15px"}}/>
    //         Youngistaan</a>
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //     </button>

    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul class="navbar-nav ml-auto ">
    //         <li >
    //        <a href='/profile'>
    //        <button
    //                         type="button"
    //                         class="btn btn-dark"
    //                         style={{ margin: "20px 0" }}

    //                       >Profile </button>
    //        </a>
    //         </li>
    //             <li class="nav-item">
    //             <button
    //                         type="button"
    //                         class="btn btn-primary"
    //                         style={{ margin: "20px 0" }}
    //                         onClick={handleLogout}
    //                       >Logout </button>
    //             </li>

    //         </ul>
    //           <span class="navbar-text">
    //       Navbar text with an inline element
    //     </span>
    //     </div>
    // </nav>
  );
}

export default NavigationBar;
