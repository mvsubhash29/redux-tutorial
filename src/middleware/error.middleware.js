const error = (state) => (next) => (action) => {
  try {
    next(action);
  } catch(e) {
    console.error("Error : ", e);
  }
}

export default error;