import { Button, TextField } from "@mui/material"
import { useForm } from "../../hooks/useForm"

const AddTodo = ({handleAddTodo}) => {

  const {description, onInputChange, onResetForm} = useForm({
    description: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault()
    if (description.length <= 1) {
      return
    }

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }

    handleAddTodo(newTodo);
    onResetForm();
  }

  return (
    <form onSubmit={()=> {handleSubmit(event)}} className="flex flex-col">
      <TextField 
        id="outlined-basic" 
        label="Que hay que hacer?" 
        variant="outlined" 
        multiline
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <div className="mt-3">
        <Button
          type="submit"
          variant="contained">
          Agregar
        </Button>
      </div>
    </form>
  )
}

export default AddTodo
