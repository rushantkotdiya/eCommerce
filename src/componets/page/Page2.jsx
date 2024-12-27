import React from 'react'
import Header from '../header';
import Navbar from '../navbar';
import Footer from '../Footer';
import { Container,Row } from 'react-bootstrap';
export default function Page2() {
  return (
    <>
    <Header/>
    <Navbar/>
    <div className="container mt-5">
  <h2 className="text-center mb-4">Payment</h2>
  <ul
    className="nav nav-tabs justify-content-center"
    id="paymentTab"
    role="tablist"
  >
    <li className="nav-item" role="presentation">
      <button
        className="nav-link active"
        id="cod-tab"
        data-bs-toggle="tab"
        data-bs-target="#cod"
        type="button"
        role="tab"
        aria-controls="cod"
        aria-selected="true"
      >
        Cash on delivery (COD)
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="credit-tab"
        data-bs-toggle="tab"
        data-bs-target="#credit"
        type="button"
        role="tab"
        aria-controls="credit"
        aria-selected="false"
      >
        Credit/Debit
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="netbanking-tab"
        data-bs-toggle="tab"
        data-bs-target="#netbanking"
        type="button"
        role="tab"
        aria-controls="netbanking"
        aria-selected="false"
      >
        Net Banking
      </button>
    </li>
    <li className="nav-item" role="presentation">
      <button
        className="nav-link"
        id="paypal-tab"
        data-bs-toggle="tab"
        data-bs-target="#paypal"
        type="button"
        role="tab"
        aria-controls="paypal"
        aria-selected="false"
      >
        Paypal Account
      </button>
    </li>
  </ul>
  <div className="tab-content mt-3" id="paymentTabContent">
    <div
      className="tab-pane fade show active"
      id="cod"
      role="tabpanel"
      aria-labelledby="cod-tab"
    >
      <h4 className="mt-3">COD</h4>
      <p>
        <input type="checkbox" id="acceptCOD" />
        <label htmlFor="acceptCOD">
          We also accept Credit/Debit card on delivery. Please check with the
          agent.
        </label>
      </p>
    </div>
    <div
      className="tab-pane fade"
      id="credit"
      role="tabpanel"
      aria-labelledby="credit-tab"
    >
      <h4 className="mt-3">Credit/Debit</h4>
      <p>Credit/Debit payment option coming soon.</p>
    </div>
    <div
      className="tab-pane fade"
      id="netbanking"
      role="tabpanel"
      aria-labelledby="netbanking-tab"
    >
      <h4 className="mt-3">Net Banking</h4>
      <p>Net Banking payment option coming soon.</p>
    </div>
    <div
      className="tab-pane fade"
      id="paypal"
      role="tabpanel"
      aria-labelledby="paypal-tab"
    >
      <h4 className="mt-3">Paypal Account</h4>
      <p>Paypal payment option coming soon.</p>
    </div>
  </div>
</div>

    <Footer/>
    </>
  )
}
