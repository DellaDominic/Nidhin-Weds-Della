import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import Flower from '../assets/images/flowerssidebar.png'
function Sidebar () {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle('slide');
  }

  return (
    <>
      <a href='/' onClick={openMenu} className={`js-oliven-nav-toggle oliven-nav-toggle${show ? ' active': ''}`}>
        <i></i>
      </a>
      <aside id='oliven-aside'>
      <img src={Flower} alt='' />
        <div className='oliven-logo'>
          <a href='/'>
            {/* <img src={Logo} alt='' /> */}
            <span>
              Nidhin <small>&</small> Della
            </span>
            <h3>Betrothal</h3>
            <h6>23.05.2024</h6>
            <h6>Little Flower Church, Elamkulam, Kochi</h6>
            <h3>Wedding</h3>
            <h6>26.05.2024</h6>
            <h6>St.George Basilica Church, Angamaly</h6>
            <img src={Logo} alt='' />
          </a>
        </div>
        <nav className='oliven-main-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#couple'>Couple</a>
            </li>
            {/* <li>
              <a href='#story'>Our Story</a>
            </li> */}
            <li>
              {/* <a href='#organization'>Organization</a> */}
            </li>
            <li>
              <a href='#gallery'>Gallery</a>
            </li>
            <li>
              <a href='#whenwhere'>When & Where</a>
            </li>
            <li>
              <a href='#rsvp'> </a>
            </li>
          </ul>
        </nav>
        <div className='footer1'>
          {' '}
          <span className='separator'></span>
          <p>
            {/* Della & Nidhin Betrothal
            <br /> */}
            "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. 
            It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. 
            Love does not delight in evil but rejoices with the truth. 
            It always protects, always trusts, always hopes, always perseveres. 
            Love never fails."
            <br/>
            1 Corinthians 13:4-8
            {/* <br /> */}
            {/* Little Flower Church, Elamkulam, Kochi */}
            {/* Best Regards,
            <br />
            Della */}
          </p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
