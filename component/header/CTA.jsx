import React from 'react'
import img1 from '../../Assets/img1.jpg';


const CTA = () => {
  return (
    <div className='cta'>
      <a href={img1} download className='btn'>Download image</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
  )
}

export default CTA; // this line indicates that this component can be imported and used everywhere in our application.

