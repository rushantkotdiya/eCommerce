import React from 'react';
import { Container,Row } from 'react-bootstrap';

export default function Header() {
  return (
    <>
    <Container fluid className='p-4 bg-white '>
      <header className='navbar navbar-expand-lg bg-white '>
  <div className="container">
    {/* Brand Name */}
    <a className="navbar-brand d-flex align-items-center" href="#">
      <span style={{ color: "orange", fontWeight: "bold" }}>E</span>
      <span style={{ fontWeight: "normal" }}>lectronics</span>
      <span style={{ color: "orange", fontWeight: "bold" }}>M</span>
      <span style={{ fontWeight: "normal" }}>art</span>
    </a>
    {/* Search Bar */}
    <form className="d-flex mx-auto" style={{ width: "50%" }}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search for products, brands and more"
        aria-label="Search"
      />
      <button className="btn btn-warning text-white" type="submit">
        Search
      </button>
    </form>
    {/* Right Icons */}
    <div className="d-flex align-items-center">
      <button className="btn btn-link text-dark">
        <i className="bi bi-moon" />
      </button>
      <button className="btn btn-link text-dark">
        <i className="bi bi-heart" />
      </button>
      <button className="btn btn-link text-dark">
        <i className="bi bi-cart4" /> Cart
      </button>
    </div>
  </div>
</header>
    </Container>
    </>
  )
}
