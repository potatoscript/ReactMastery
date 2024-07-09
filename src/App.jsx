import React from 'react'
import Navbar from "./components/Navbar"
import Section1 from './components/section1'
import HomeCards from './components/HomeCards'
import MenuListings from './components/MenuListings'
import ViewAllMenus from './components/ViewAllMenus'

const App = () => {
  return (
    <>
      <Navbar /> 
      <Section1 title="Potato" subtitle="I like potato" />
      <HomeCards />
      <MenuListings />
      <ViewAllMenus />

    </>
  )
}

export default App
