import { useEffect, useReducer } from "react";
import {todoReducer} from '../components/08-UseReducer/todoReducer'


export const useTodo = () => { 

const initialState = [];

const init = () => { 
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const [state, dispatch] = useReducer(todoReducer, initialState, init)

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(state))
}, [state])

const handleAddTodo = (todo) => { 
  const action = {
    type: "[TODO] Add Todo",
    payload: todo
  }
  dispatch(action);
}

const handleDeleteTodo = (id) => { 
  const action = {
    type: "[TODO] Delete Todo",
    payload: id
  }
  dispatch(action);
}

const handleDoneTodo = (id) => { 
  const action = {
    type: "[TODO] Done Todo",
    payload: id
  }
  dispatch(action);
}

  return {
    state,
    handleAddTodo,
    handleDeleteTodo,
    handleDoneTodo
  }

}
