import React from 'react';
import './PartnerBrand.css'
import brand1 from '../../images/brand1.jpg';
import brand2 from '../../images/brand2.jpg';
import brand3 from '../../images/brand3.jpg';
import brand4 from '../../images/brand4.jpg';
import brand5 from '../../images/brand5.jpg';


const PartnerBrand= () => {
  return (
    <div className='container'>
    <h1> Our Partner Brand</h1>
    <div className=' brands'>
    <div>
    <img src={brand1} alt="brand Partner" />
    </div>
    <div>
    <img src={brand2} alt="brand Partner" />
    </div>
    <div>
    <img src={brand3} alt="brand Partner" />
    </div>
    <div>
    <img src={brand4} alt="brand Partner" />
    </div>
    <div>
    <img src={brand5} alt="brand Partner" />
    </div>
    </div>
    
    </div>
  )
}

export default PartnerBrand ;
