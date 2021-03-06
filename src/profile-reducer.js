const initialState = {
  firstName: ""
}

const profileReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_PROFILE") {
    const newState = {...state}
    newState.firstName = action.firstName

    return newState
  }
  return state
}

export default profileReducer