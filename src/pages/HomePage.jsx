import React from 'react'
import Menu from '../components/section1'
import HomeCards from '../components/HomeCards'
import MenuListings from '../components/MenuListings'
import ViewAllMenus from '../components/ViewAllMenus'
const HomePage = () => {
  return (
    <>
      <Menu title="Potato" subtitle="I like potato" />
      <HomeCards />
      <MenuListings isHome={true} />
      <ViewAllMenus />
    </>
  )
}

export default HomePage
