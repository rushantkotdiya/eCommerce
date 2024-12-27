import React from 'react'
import Header from '../header';
import Navbar from '../navbar';
import Footer from '../Footer';
import { Container,Row } from 'react-bootstrap';
export default function page1() {
  return (
    <>
    <Header/>
    <Navbar/>
    <section className="terms-section">
  <div className="container">
    <div className="terms-title text-dark">
      Please Read These Terms And Conditions Carefully.
    </div>
    <div className="section-title">Personal Information</div>
    <ol className="terms-list">
      <li>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. It has a more-or-less normal distribution of letters, as
        opposed to Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </li>
      <li>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </li>
      <li>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. It has a more-or-less normal distribution of letters, as
        opposed to Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </li>
    </ol>
    <div className="section-title mt-5">License &amp; Site Access</div>
    <p>
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt.
    </p>
    <p>
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
    <p>
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat.
    </p>
  </div>
</section>

    <Footer/>
    </>
  )
}
