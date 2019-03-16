const defaultState = {
  value: 'initial',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ACTION_EXAMPLE':
      return {
        ...state,
        result: action.payload
      }
    default:
      return state
  }
}