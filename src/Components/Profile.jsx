import React from 'react'

  const profile = [
    {id:1, name:"General",},
    {id:2, name:"Informations",},
    {id:3, name:"Notifications",},
    {id:4, name:"Privacy",},
    {id:5, name:"files",},
  ,

    



  ]


export default function Profile() {
  return (
    <div className='Profile'>
        <div className='photo drop-shadow-2xl'>
            <h2 className='text-lg font-semibold text-slate-50'>Your Profile</h2>
            <div className='photoContente'></div>
            <h2 className=' text-xl font-bold text-slate-100'>Maleye</h2>

            <span className=' text-slate-100 font-light'>Free plan</span>
        </div>
       

        <div className='details drop-shadow-2xl'>
              {profile.map((mapItem) => {

                  return(

                        <div className='boxProfile  hover:drop-shadow-2xl' key={mapItem.id}>
                            <p>{mapItem.name}</p>
                            <span class="material-symbols-rounded hover:text-blue-300 text-lg">chevron_right</span>
                        </div>

                  );

              })}
            
        </div>
    </div>
  )
}
