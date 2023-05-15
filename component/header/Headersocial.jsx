import {BsLinkedin} from 'react';
import {FaGithub} from 'react';
import {FaFacebookF} from 'react';
import {CgTwitter} from 'react';
const HeaderSocial = () => {
  return (
  <div className='header__social'>
  <a href='https://linkedin.com' target='blank'><BsLinkedin/> </a>
  <a href='https://github.com' target='blank'><FaGithub/> </a>
  <a href='https://facebook.com' target='blank'><FaFacebookF/> </a>
  <a href='https://twitter.com' target='blank'><CgTwitter/> </a>
  
  </div>
  )
  }
  
  export default HeaderSocial;
  