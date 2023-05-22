import React from 'react'
import './about.css'
import moi from '../../Assets/img10.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
      <section id="about">
        <h5>Get to know</h5>
        <h2>About me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me__image">
              <img src={moi} alt="Wendy " />
            </div>
          </div>
          <div className="about__me__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>3 world widely</small>
              </article>
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>2 Completed</small>
              </article>
            </div>
            <p>
              I am a software engineer trained at the Faculty of
              Engineering and Technology(FET) of the University of Buea . I will 
              have my B.eng in 2025.This is my first experience using node.js to 
              develop a web application<strong>This is my first web application </strong>
               that i started from scratch , but it will not be the last.
              I am determinate to build more beautiful and more interactive web apps.
              <h4>Don't forget to enjoy and play with CSS, BECAUSE  IT IS THE MOST IMPORTANT THING.</h4>

              Thanks for reading.
             
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    );
}

export default About
