import React from 'react'
import Slider from './slider';
import { Container,Row } from 'react-bootstrap';
import img4 from '../assets/img/img-4.png';
import img5 from '../assets/img/img-5.png';
import img6 from '../assets/img/img-6.png';
import img7 from '../assets/img/img-7.png';
import img8 from '../assets/img/img-8.png';
import img9 from '../assets/img/img-9.png';
import img10 from '../assets/img/img-10.png';
import img11 from '../assets/img/img-11.png';
import img12 from '../assets/img/img-12.png';
import img13 from '../assets/img/img-13.png';
import img14 from '../assets/img/img-14.png';
import img15 from '../assets/img/img-15.png';
import img16 from '../assets/img/img-16.png';
import img17 from '../assets/img/img-17.png';
import img18 from '../assets/img/img-18.png';
import img19 from '../assets/img/img-19.png';
import img20 from '../assets/img/img-20.png';
import img21 from '../assets/img/img-21.png';
import img22 from '../assets/img/img-22.png';
import img23 from '../assets/img/img-23.png';

export default function Contant() {
  return (
    <>
    < Slider/>
    < Container fluid>
      <div className='row'>

    <div className='section col-md-3   '>
    <div className="container my-4">
  <div className="row">
    {/* Customer Review Section */}
    <div className="col-12 mb-4">
      <h5 className="fw-bold">CUSTOMER REVIEW</h5>
      <div className="mb-2">
        <span className="stars">★★★★★</span> <span>5.0</span>
      </div>
      <div className="mb-2">
        <span className="stars">★★★★☆</span> <span>4.0</span>
      </div>
      <div className="mb-2">
        <span className="stars">★★★☆☆</span> <span>3.5</span>
      </div>
      <div className="mb-2">
        <span className="stars">★★★☆☆</span> <span>3.0</span>
      </div>
      <div className="mb-2">
        <span className="stars">★★☆☆☆</span> <span>2.5</span>
      </div>
    </div>
    {/* Price Section */}
    <div className="col-12">
      <h5 className="fw-bold">PRICE</h5>
      <ul className="list-unstyled">
        <li>Under $1,000</li>
        <li>$1,000 - $5,000</li>
        <li>$5,000 - $10,000</li>
        <li>$10,000 - $20,000</li>
        <li>$20,000 - $30,000</li>
        <li>Over $30,000</li>
      </ul>
    </div>
    <div className="container my-4">
  <div className="row">
    {/* Discount Section */}
    <div className="col-12 mb-4">
      <h5 className="fw-bold">DISCOUNT</h5>
      <form>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="discount5" />
          <label className="form-check-label" htmlFor="discount5">
            5% or More
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="discount10" />
          <label className="form-check-label" htmlFor="discount10">
            10% or More
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="discount20" />
          <label className="form-check-label" htmlFor="discount20">
            20% or More
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="discount30" />
          <label className="form-check-label" htmlFor="discount30">
            30% or More
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="discount50" />
          <label className="form-check-label" htmlFor="discount50">
            50% or More
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="discount60" />
          <label className="form-check-label" htmlFor="discount60">
            60% or More
          </label>
        </div>
      </form>
    </div>
    {/* Electronics Section */}
    <div className="col-12">
      <h5 className="fw-bold">ELECTRONICS</h5>
      <form>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="accessories"
          />
          <label className="form-check-label" htmlFor="accessories">
            Accessories
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="cameras" />
          <label className="form-check-label" htmlFor="cameras">
            Cameras &amp; Photography
          </label>
        </div>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="carElectronics"
          />
          <label className="form-check-label" htmlFor="carElectronics">
            Car &amp; Vehicle Electronics
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="computers" />
          <label className="form-check-label" htmlFor="computers">
            Computers &amp; Accessories
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="gps" />
          <label className="form-check-label" htmlFor="gps">
            GPS &amp; Accessories
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="headphones" />
          <label className="form-check-label" htmlFor="headphones">
            Headphones
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="homeAudio" />
          <label className="form-check-label" htmlFor="homeAudio">
            Home Audio
          </label>
        </div>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="homeTheater"
          />
          <label className="form-check-label" htmlFor="homeTheater">
            Home Theater, TV &amp; Video
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="mobiles" />
          <label className="form-check-label" htmlFor="mobiles">
            Mobiles &amp; Accessories
          </label>
        </div>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="portableMedia"
          />
          <label className="form-check-label" htmlFor="portableMedia">
            Portable Media Players
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="tablets" />
          <label className="form-check-label" htmlFor="tablets">
            Tablets
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="mobiles" />
          <label className="form-check-label" htmlFor="mobiles">
          Telephones  &amp; Accessories
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="mobiles" />
          <label className="form-check-label" htmlFor="mobiles">
          Wearable Technology
          </label>
        </div>
      </form>
    </div>
  </div>
</div>
<div className="col-12">
      <h5 className="fw-bold">Cash On Delivery</h5>
      <form>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="accessories"
          />
          <label className="form-check-label" htmlFor="accessories">
          Eligible for Cash On Delivery
          </label>
        </div>
        </form>
        </div>
<div className="col-12">
      <h5 className="fw-bold">New Arrivals</h5>
      <form>
        <div className="form-check mb-2">
          <input
            className="form-check-input"
            type="checkbox"
            id="accessories"
          />
          <label className="form-check-label" htmlFor="accessories">
          Last 30 days
          </label>
        </div>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="cameras" />
          <label className="form-check-label" htmlFor="cameras">
          Last 90 days
          </label>
        </div>
        </form>
        </div>
        <div className="container mt-5">
  <h2 className="mb-4">BEST SELLER</h2>
  <div className="row">
    
    {/* First Item */}
    <div className="col-md-12">
        
      <div className=" mb-4 ">
        <div className='ng'>
        <img
          src={img22}
          className="card-img-top"
          alt="Samsung Refrigerator"
        />
        </div>
        </div>
        <div className="card-body ">
          <p className="card-title">
            Samsung 192 L Direct Cool Single Door 3 Star (2021) Refrigerator
          </p>
          <p className="card-text text-success fw-bold">$12,499.00</p>
        </div>
    </div>
    {/* Second Item */}
    <div className="col-md-12">
      <div className=" mb-4 ">
        <div className='ng'>
        <img
          src={img23}
          className="card-img-top"
          alt="boAt Headset"
        />
        </div>
        </div>
        <div className="card-body ">
          <p className="card-title">
            boAt Rockerz 450 Bluetooth Headset (Luscious Black, On the Ear)
          </p>
          <p className="card-text text-success fw-bold">$1,199.00</p>
        </div>
      
    </div>
  </div>
</div>

  </div>
</div>

    </div>
    <div className=' col-md-9'>
      
    <div className="container py-5">
    <div className="row mb-4">
    <div className="col-md-4">
      <div className="card">
        <div className="position-relative">
          <div className='mg'>
          <img
            src={img5}
            className=" card-img-top "
            alt="Mi 4A Horizon"
          />
          </div>
          <span className="badge bg-danger text-white position-absolute top-0 start-0 m-2">
            New
          </span>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Redmi 9 Prime</h5>
          <p className="text-muted">
            <s>$400.00</s>
          </p>
          <p className="fw-bold text-primary">$360.00 </p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
      <div className='mg'>
        <img
          src={img6}
          className="card-img-top  "
          alt="Smart AC with Wi-fi"
        />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Refrigerator</h5>
          <p className="text-muted">
            <s>$500.00</s>
          </p>
          <p className="fw-bold text-primary">$400.00</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className='mg'>
        <img
          src={img7}
          className=" card-img-top"
          alt="Microwave Oven"
        />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Apple iPhone 11</h5>
          <p className="text-muted">
            <s>$300.00</s>
          </p>
          <p className="fw-bold text-primary">$280.00</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  {/* Product Cards */}
  <div className="row mb-4">
    <div className="col-md-4">
      <div className="card">
        <div className="position-relative">
          <img
            src={img8}
            className="card-img-top"
            alt="Mi 4A Horizon"
          />
          <span className="badge bg-danger text-white position-absolute top-0 start-0 m-2">
            New
          </span>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Mi 4A Horizon</h5>
          <p className="text-muted">
            <s>$340.00</s>
          </p>
          <p className="fw-bold text-primary">$320.00</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img
          src={img9}
          className="card-img-top"
          alt="Smart AC with Wi-fi"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Smart AC with Wi-fi</h5>
          <p className="text-muted">
            <s>$399.00</s>
          </p>
          <p className="fw-bold text-primary">$349.00</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img
          src={img10}
          className="card-img-top"
          alt="Microwave Oven"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Microwave Oven</h5>
          <p className="text-muted">
            <s>$300.00</s>
          </p>
          <p className="fw-bold text-primary">$249.00</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  {/* Promotional Banner */}
  <div className="banner text-center py-5">
    <h2 className="fw-bold text-white">Exciting Deals</h2>
    <p className="text-white fw-bold">Up to 40% Off</p>
    <img
      src={img4}
      alt="Deals Banner"
      className="img-fluid"
    />
  </div>
  {/* Product Cards */}
  <div className="row mb-4 mt-4">
    <div className="col-md-4">
      <div className="card">
        <div className="position-relative">
          <div className='mg'>
          <img
            src={img11}
            className="card-img-top"
            alt="Mi 4A Horizon"
          />
          </div>
          <span className="badge bg-danger text-white position-absolute top-0 start-0 m-2">
            New
          </span>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Desert Air Cooler</h5>
          <p className="text-muted">
            <s>$280.00</s>
          </p>
          <p className="fw-bold text-primary">$230.00</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className='mg'>
        <img
          src={img12}
          className="card-img-top"
          alt="Smart AC with Wi-fi"
        />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Auto Washing Machine</h5>
          <p className="text-muted">
            <s>$200.00</s>
          </p>
          <p className="fw-bold text-primary">$180.00</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className='mg'>
        <img
          src={img13}
          className="card-img-top"
          alt="Microwave Oven"
        />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Water Purifier</h5>
          <p className="text-muted">
            <s>$299.00</s>
          </p>
          <p className="fw-bold text-primary">$199.00</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
  {/* Product Cards */}
  <div className="row mb-4">
    <div className="col-md-4">
      <div className="card">
        <div className="position-relative">
          <img
            src={img14}
            className="card-img-top"
            alt="Mi 4A Horizon"
          />
          <span className="badge bg-danger text-white position-absolute top-0 start-0 m-2">
            New
          </span>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Panasonic Tab 8</h5>
          <p className="text-muted">
            <s>$599.00</s>
          </p>
          <p className="fw-bold text-primary">$499.00</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img
          src={img15}
          className="card-img-top"
          alt="Smart AC with Wi-fi"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Lenovo Yoga Tab</h5>
          <p className="text-muted">
            <s>$699.00</s>
          </p>
          <p className="fw-bold text-primary">$599.00</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <img
          src={img16}
          className="card-img-top"
          alt="Microwave Oven"
        />
        <div className="card-body text-center">
          <h5 className="card-title">Samsung Galaxy Tab</h5>
          <p className="text-muted">
            <s>$899.00</s>
          </p>
          <p className="fw-bold text-primary">$699.00</p>
          <button className="btn btn-dark">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
    </Container>
<div className="container py-5">
  <div className="row g-4">
    {/* Smart Watches Card */}
    <div className="col-md-6">
      <div className="promo-card d-flex align-items-center">
        <div className="flex-grow-1 me-3">
          <h6 className="text-muted">New Collections, New Trendy</h6>
          <h3 className="fw-bold">Smart Watches</h3>
          <p className="text-muted">Sale up to 25% off all in store</p>
        </div>
        <div>
          <img src={img17} alt="Smart Watch" />
        </div>
      </div>
    </div>
    {/* Smart Phones Card */}
    <div className="col-md-6">
      <div className="promo-card d-flex align-items-center">
        <div className="flex-grow-1 me-3">
          <h6 className="text-muted">Top Brands, Lowest Prices</h6>
          <h3 className="fw-bold">Smart Phones</h3>
          <p className="text-muted">Free shipping order over $100</p>
        </div>
        <div>
          <img src={img18} alt="Smart Phone" />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container my-5">
  {/* Electronics Section */}
  <h2>Electronics :</h2>
  <p>
    If you're considering a new laptop, looking for a powerful new car stereo,
    or shopping for a new HDTV, we make it easy to find exactly what you need at
    a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell
    phones, tablets and iPads, video games, desktop computers, cameras and
    camcorders, audio, video, and more.
  </p>
  <div className="row text-center my-4">
    <div className="col-md-4">
      <div className="icon-box">
        <img src={img19} alt="Free Shipping Icon" />
        <div>
          <h5 className="fw-bold">Free Shipping</h5>
          <p className="text-muted">on orders over $100</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="icon-box">
        <img src={img20} alt="Fast Delivery Icon" />
        <div>
          <h5 className="fw-bold">Fast Delivery</h5>
          <p className="text-muted">World Wide</p>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="icon-box">
        <img src={img21} alt="Big Choice Icon" />
        <div>
          <h5 className="fw-bold">Big Choice</h5>
          <p className="text-muted">of Products</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}