import React from 'react';
//import menus from '../foods.json'
import { useState, useEffect } from 'react';
import MenuListing from './MenuListing';
import Spinner from './Spinner';

const MenuListings = ( { isHome = false }) => {
  //const menuListings = isHome ? menus.slice(0, 3) : menus;
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=> {
    const fetchMenus = async () => {
      try{
          const res = await fetch('http://localhost:8000/menus')
          const data = await res.json();
          setMenus(data); //setting state to the data that return
      } catch(error){
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchMenus();		 
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
   <div className="container-xl lg:container m-auto">
     <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        { isHome ? 'Recent Menus' : 'Browse Menus' }
     </h2>
     
        {loading ? (<Spinner loading={loading} />) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {menus.map((menu)=>(
                <MenuListing key={menu.id} menu={menu} />
            ))}
          </div>
        )}

   </div>
</section>
  )
}

export default MenuListings
