exports.createActions = (typeList, creatorCreator) => {
  const actionTypes = {};
  typeList.forEach(type => actionTypes[type] = type);
  const actionCreators = typeof creatorCreator === "function"
    ? creatorCreator(actionTypes)
    : {};
  const actions = Object.assign({}, actionCreators, actionTypes);
  return actions;
};

exports.createReducer = (initialState, actionHandlers) => {
  const reducer = (state, action) => {
    if (state === undefined) {
      state = initialState;
    }
    if (actionHandlers.hasOwnProperty(action.type)) {
      state = actionHandlers[action.type](state, action);
    }
    return state;
  };

  return reducer;
};

