export default (state = {}, action) => {
  switch (action.type) {
    case 'ACTION_EXAMPLE':
      return {
        result: action.payload
      }
    default:
      return state
  }
}