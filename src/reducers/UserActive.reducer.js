const userActive = (state = null, action) => {
  let payload;
  switch(action.type) {
    case 'USER_SELECTED': 
      payload = action.payload;
      break;
    default:
      payload = state;
      break;
  }
  return payload;
}

export default userActive;