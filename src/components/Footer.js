import React from 'react'
import Logo from '../assets/images/logo.png'
function Footer () {
  return (
    <div className='footer2'>
      <div className='oliven-narrow-content'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h2>
              <a href='/'>
                <img src={Logo} alt='' />
                <span>
                  Nidhin <small>&</small> Della
                </span>
              </a>
            </h2>
            <p className='copyright'>26 May 2024 — St.George Basilica Church, Angamaly</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
