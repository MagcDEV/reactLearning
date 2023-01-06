import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ value, labelId, handleDoneTodo, handleDeleteTodo }) => {
  return (
    <ListItem
      key={value.id}
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={() => handleDeleteTodo(value.id)}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} onClick={() => handleDoneTodo(value.id)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={value.done}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
            aria-label="checkbox"
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={value.description} />
      </ListItemButton>
    </ListItem>
  )
}

export default TodoItem
