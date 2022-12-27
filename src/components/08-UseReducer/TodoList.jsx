import List from '@mui/material/List';
import TodoItem from './TodoItem';

export default function TodoList({state, handleDeleteTodo, handleDoneTodo}) {

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {state.map((todo) => {
        const labelId = `checkbox-list-label-${state.id}`;

        return (
          <TodoItem 
          key={todo.id}
          value={todo} 
          labelId={labelId} 
          handleDeleteTodo={handleDeleteTodo}
          handleDoneTodo={handleDoneTodo}
          />
        );
      })}
    </List>
  );
}
