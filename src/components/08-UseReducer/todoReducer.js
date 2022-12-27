export const todoReducer = (initialState = [], action) => { 

  switch (action.type) {
    case '[TODO] Add Todo':
      return [...initialState, action.payload]
    case '[TODO] Delete Todo':
      return initialState.filter(element => element.id != action.payload )
    case '[TODO] Done Todo':
      return initialState.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            done: !item.done
          } 
        }
        return item;
      })
    default:
      return initialState;
  }

}
