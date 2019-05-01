const logger = (state) => (next) => (action) => {
  console.log('action fired', action);
  next(action);
}

export default logger;