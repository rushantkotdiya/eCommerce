import React from 'react'
import Header from '../header'
import Navbar from '../navbar'
import Footer from '../Footer'
import { Container,Row } from 'react-bootstrap';
export default function Connect() {
  return (
    <>
    <Header/>
    <Navbar/>
    <section className="contact-section">
  <div className="container">
    <div className="row">
      <div className="col-md-5 contact-info">
        <h3>
          <strong>Connect Us</strong>
        </h3>
        <div>
          <i className="bi bi-geo-alt" />
          <strong>Company Address</strong>
          <br />
          10001, 5th Avenue, 12202 street, USA.
        </div>
        <div>
          <i className="bi bi-telephone" />
          <strong>Call Us</strong>
          <br />
          +1(21) 112 7368
        </div>
        <div>
          <i className="bi bi-envelope" />
          <strong>Email Us</strong>
          <br />
          example@mail.com
        </div>
        <div>
          <i className="bi bi-headset" />
          <strong>Customer Support</strong>
          <br />
          info@support.com
        </div>
      </div>
      <div className="col-md-7">
        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name*"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email*"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Subject*"
            />
          </div>
          <div className="mb-3">
            <input
              type="url"
              className="form-control"
              placeholder="Website URL*"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows={5}
              placeholder="Type your message here*"
              defaultValue={""}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-send">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

    <Footer/>
    </>
  )
}
