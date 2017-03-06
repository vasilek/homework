function personlist(state = [], action) {
  if (action.type === 'ADD_PERSON') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

export default personlist;