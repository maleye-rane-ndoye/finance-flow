import React from 'react'

export default function Profile() {
  return (
    <div className='Profile'>
        <div className='photo drop-shadow-2xl'>
            <div className='photoContente'></div>
            <h2 className=' text-xl font-bold'>Maleye</h2>
        </div>
        <div className='description drop-shadow-2xl'>
           Maleye Rane Developper web et mobile <br />
           etudiant à la l'universiter numerique la plateforme
        </div>
        <div className='details drop-shadow-2xl'>
        <h2>Edite the profile</h2>
            <div className='flex flex-col text-start  space-x-6'>
                 <p>Prenom</p>
                 <p>Nom</p>
                 <p>Adresse</p>
                 <p>Telephone</p>
                 <p>email</p>
                 <p></p>
            </div>
        </div>
    </div>
  )
}
