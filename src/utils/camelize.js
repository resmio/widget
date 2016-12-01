export default const camelize = (string) => {
  let camelizedString = string.replace(/[\-_\s]+(.)?/g, (match, chr) => {
    return chr ? chr.toUpperCase() : ''
  })
  // Ensure 1st char is always lowercase
  return camelizedString.substr(0, 1).toLowerCase() + camelizedString.substr(1)
}
