import React from 'react'


const PreviousSearches = () => {
  const searches=['pizza','burger','cookies','juice','biryani','salad','ice creame','lasagna','pudding','soup'];
  return (
    <div>
      <div className='previous-search section'>
        <h2>Previous Searches</h2>
        <div className='previous-search-container'>
            {searches.map((search,index)=>(<div key={index} style={{animationDelay: index * 0.1 + "s"}} className='search-item'>
                {search}
            </div>))}
        </div>
       </div>
    </div>
  )
}

export default PreviousSearches
