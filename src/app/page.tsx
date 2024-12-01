
import React from 'react'
import Header from "./components/Header";
import Hero from './components/Hero';
import Edit from './components/Edit';
import Explore from './components/Explore';
import Acheivement from './components/Acheivement';
import Teams from './components/Teams';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Testimomial from './components/Testimomial';
const page = () => {
  return (
    
      <div>
      < Header  />
      <Hero />
      <Edit />
      <Explore />
      <Acheivement />
      <Courses />
      <Teams />
      <Testimomial/>
      <Footer />
    </div>
  )
}

export default page
