import React from 'react'
import Chefcard from './Chefcard';

const ChefSection = () => {
    const chefs=[
        {
            name: "Juan Carlos",
            img: "/img/top-chiefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/img/top-chiefs/img_2.jpg",
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: "/img/top-chiefs/img_3.jpg",
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: "/img/top-chiefs/img_4.jpg",
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: "/img/top-chiefs/img_5.jpg",
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: "/img/top-chiefs/img_6.jpg",
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
  return (
    <div className='section chefs'>
      <h1 className='title'>Our Top Chefs</h1>
      <div className='top-chefs-container'>
        {/*<Chefcard chefs={chefs}/>
        <Chefcard chefs={chefs}/>
        <Chefcard chefs={chefs}/>
        <Chefcard chefs={chefs}/>
        <Chefcard chefs={chefs}/>
        <Chefcard chefs={chefs}/>*/}
        {chefs.map(chef => <Chefcard key={chef.name} chef={chef} />)}
      </div>
    </div>
  )
}

export default ChefSection
