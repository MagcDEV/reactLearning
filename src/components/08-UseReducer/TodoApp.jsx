import AddTodo from './AddTodo'
import TodoList from './TodoList'
import {useTodo} from '../../hooks/useTodo'

export default function TodoApp() {

  const {state, handleDeleteTodo, handleDoneTodo, handleAddTodo} = useTodo()

  return (
    <>
    <h1 className="text-4xl font-bold m-5">TodoApp</h1>
    <hr />

    <div className="m-5 flex justify-between">
      <TodoList 
        state={state} 
        handleDeleteTodo={handleDeleteTodo}
        handleDoneTodo={handleDoneTodo}/>
      <div className="mr-52">
        <h4 className="text-2xl mb-3">Agregar Todo</h4>
        <hr />
        <AddTodo handleAddTodo={handleAddTodo} />
      </div>
    </div>
    </>
  )
}
