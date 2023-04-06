import React from 'react'
import me from '../../Elon_Musk_Royal_Society.jpg'

function ProfilePhoto() {
    // ceci mon photo de profile
  return (
    <div className='profile'>
        <img src={me} alt='image'/>
    </div>
  )
}

export default ProfilePhoto