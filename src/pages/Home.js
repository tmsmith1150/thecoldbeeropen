import React from 'react';
import { HeroSection } from '../components/HeroSection.js'
import { About } from './About.js'
import { SignUp } from '../components/SignUp/SignUp.jsx'
import { Contact } from '../components/Contact/Contact.jsx'



export const Home = () => {
  return (
    <div>
       <HeroSection /> 
       <About />
       <SignUp />
       <Contact />
    </div>
  )
}
