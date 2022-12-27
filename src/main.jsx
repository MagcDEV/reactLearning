import React from 'react'
import ReactDOM from 'react-dom/client'
//import CallBacksHook from './components/06-memos/CallBacksHook'
//import { Padre } from './components/07-tarea-memo/Padre'
// import MemoHook from './components/06-memos/MemoHook'
// import CounterWithCustonHook from './components/01-useState/CounterWithCustonHook'
// import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook'
// import SimpleForm from './components/02-useEffect/SimpleForm'
// import { MultipleCustomHooks } from './components/03-example/MultipleCustomHooks'
// import FocusScreenusScreen from './components/04-useRef/FocusScreen'
// import Layout from './components/05-useLayoutEffect/Layout'
// import Memorize from './components/06-memos/Memorize'
import TodoApp from './components/08-UseReducer/TodoApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoApp />
  // <React.StrictMode>
  //   <MultipleCustomHooks />
  // </React.StrictMode>
)
