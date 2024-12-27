import React from 'react'
import Header from '../header';
import Navbar from '../navbar';
import Footer from '../Footer';
import { Container,Row } from 'react-bootstrap';
export default function abut() {
  return (
    <>
    <Header/>
    <Navbar/>
  <section className="hero text-center">
    <div className="container">
      <h1>
        Few Words about <strong>Us</strong>
      </h1>
      <nav>
        <a href="#" className="text-white">
          HOME
        </a>{" "}
        &gt;
        <a href="#" className="text-white">
          CONTACT US
        </a>
      </nav>
    </div>
  </section>
  <section className="py-5">
    <div className="container text-center">
      <h2>
        <strong>We Work</strong> for your best Success
      </h2>
      <p className="text-muted">
        Consectetur adipiscing elit. Aliquam sit amet efficitur tortor.
        Uspendisse efficitur orci urna.
      </p>
      <ul className="list-unstyled text-start d-inline-block">
        <li>☑ Ut enim ad minim veniam</li>
        <li>☑ Quis nostrud exercitation ullamco laboris</li>
        <li>☑ Nisi ut aliquip ex ea commodo consequat</li>
      </ul>
      <a href="#" className="btn btn-warning px-4">
        VIEW OUR PRODUCTS
      </a>
      <div className="years mt-5">
        28<span>Years</span>
      </div>
    </div>
  </section>
  <section className="testimonial-section">
  <div className="container">
    <h2 className="mb-4">
      Our <strong>Customer</strong> Says
    </h2>
    <p className="text-muted">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque, eaque ipsa quae ab illo inventore.
    </p>
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit."
          </p>
          <div className="testimonial-author">
            <img src="https://via.placeholder.com/50" alt="Petey Cruis" />
            <div>
              <strong>Petey Cruis</strong>
              <br />
              <span className="text-muted">Caption Here</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit."
          </p>
          <div className="testimonial-author">
            <img src="https://via.placeholder.com/50" alt="Molive Joe" />
            <div>
              <strong>Molive Joe</strong>
              <br />
              <span className="text-muted">Caption Here</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit."
          </p>
          <div className="testimonial-author">
            <img src="https://via.placeholder.com/50" alt="Paige Turner" />
            <div>
              <strong>Paige Turner</strong>
              <br />
              <span className="text-muted">Caption Here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
</>
  )
}
