import React from 'react'
import Header from '../header';
import Navbar from '../navbar';
import Footer from '../Footer';
import { Container,Row } from 'react-bootstrap';
export default function Page3() {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="container mt-5">
  <h2 className="mb-4">Add a new Details</h2>
  <form>
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Full Name"
        required=""
      />
    </div>
    <div className="mb-3">
      <input
        type="tel"
        className="form-control"
        placeholder="Mobile Number"
        required=""
      />
    </div>
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Landmark"
        required=""
      />
    </div>
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Town/City"
        required=""
      />
    </div>
    <div className="mb-3">
      <select className="form-select" required="">
        <option selected="" disabled="">
          Select Address type
        </option>
        <option value="Home">Home</option>
        <option value="Office">Office</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div className="d-grid gap-2">
      <button type="button" className="btn btn-outline-dark">
        Delivery to this Address
      </button>
      <button type="submit" className="btn btn-custom">
        MAKE A PAYMENT
      </button>
    </div>
  </form>
</div>

    <Footer/>
    </>
  )
}
