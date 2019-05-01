const userSelect = (user) => {
  return {
    type: 'USER_SELECTED',
    payload: user
  }
}

export default userSelect;