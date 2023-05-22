import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'

const HeaderSocial = () => {
  return (
  <div className='header__social'>
  <a href='https://linkedin.com' target='blank' rel='noreferrer' ><BsLinkedin/> </a>
  <a href='https://github.com' target='blank' rel='noreferrer'><FaGithub/> </a>
  <a href='https://facebook.com' target='blank' rel='noreferrer'><FaFacebookF/> </a>
  <a href='https://twitter.com' target='blank' rel='noreferrer'><CgTwitter/> </a>
  
  </div>
  )
  }
  
  export default HeaderSocial
  
  