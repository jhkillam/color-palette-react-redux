import React from 'react'
import { connect } from 'react-redux'

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

const ConnectedProfile = connect(
  (state) => {
    return {
      profile: state.profile
    }
  }
)(Profile)

export default ConnectedProfile;