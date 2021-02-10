export default ({app}, inject) => {
  const getYear = new Date().getFullYear();
  // Inject function in Vue, context and store.
  inject('getYear',getYear);
};
