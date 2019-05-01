const http = (state) => (next) => (action) => {
  return next(action);
}

export default http;