import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" className='navbar-body'>
      <Navbar.Brand href="#home" className='navbar-title'><span className='name-title'>S</span>hakeeb.</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-tab-body">
        <Nav className="ms-auto">
          <ScrollLink href="#home" className='navbar-tab'>Home</ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className='navbar-tab' href="#about">
            About
          </ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500} className='navbar-tab' href="#services">Services</ScrollLink>
          <ScrollLink to="project" smooth={true} duration={500} className='navbar-tab' href="#services">Projects</ScrollLink>
          <ScrollLink to="foote" className='navbar-tab' href="#contact">Contact</ScrollLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
