import React from 'react'

import myStore from './store'

const Profile = (props) => {
  return (
    <div>
      <form>
        <input 
          onChange={(changeEvent) => {
            myStore.dispatch({ 
              type: "UPDATE_PROFILE",
              firstName: changeEvent.target.value
            })
          }}
          type="text" 
          name="firstName" 
          value={props.profile.firstName}
        />
      </form>
    </div>
  )
}

export default Profile;