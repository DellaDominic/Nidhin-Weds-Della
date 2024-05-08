import React from 'react'
import where1 from '../assets/images/church.jpg'
import where2 from '../assets/images/church5.jpg'
// import where3 from '../assets/images/location3.png'
function Where () {
  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>Questions</span>
            <h2 className='oliven-title'>When & Where</h2>{' '}
          </div>
        </div>
        <div className='row'>
          <div className='item col-12  col-md-6'>
            <a href='https://maps.app.goo.gl/EAmqjoH8kkVxX5EQ7' >
            <div className='gallery-box'>
                <div className='gallery-img'>
            {/* <div className='whenwhere-img'> */}
              {' '}
              <div className="churchImg">
              <img  src={where1} alt='' />
              </div>
              </div>
              <div className='gallery-detail'>
                  <h4 className='mb-0'>click to find Location</h4>
              </div>
            </div>
            <div className='content'>
              <h5>Betrothal</h5>
              <p>
                <i className='ti-location-pin'></i> Little Flower Church, Elamkulam, Kochi. <br /> Reception to follow at Parish hall.
              </p>
              <p>
                <i className='ti-time'></i> <span>11:30 am</span>
              </p>
            </div>
            </a>
          </div>
          <div className='item col-12 col-md-6'>
          <a href='https://maps.app.goo.gl/eThYgeKyLeXk8wC97' >
          <div className='gallery-box'>
                <div className='gallery-img'>
            {/* <div className='whenwhere-img'> */}
              {' '}
              <div className="churchImg">
              <img  src={where2} alt='' />
              </div>
              </div>
              <div className='gallery-detail'>
                  <h4 className='mb-0'>click to find Location</h4>
              </div>
            </div>
            <div className='content'>
              <h5>Wedding</h5>
              <p>
                <i className='ti-location-pin'></i> St.George Basilica Church, Angamaly. <br /> Reception to follow at Parish hall.
              </p>
              <p>
                <i className='ti-time'></i> <span>11:30 am</span>
              </p>
            </div>
            </a>
          </div>
          {/* <div className='item col-12 col-md-4'>
            <div className='whenwhere-img'>
              <img src={where3} alt='' />
            </div>
            <div className='content'>
              <h5>Location</h5>
              <p>
                <i className='ti-direction-alt'></i> Location of the ceremony venue - Little Flower Church, Elamkulam, Kochi
                
              </p>
              <p>
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Where
