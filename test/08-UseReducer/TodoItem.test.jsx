import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../../src/components/08-UseReducer/TodoItem";

describe('Pruebas sobre el compoenete TodoItem', () => {
  const todo = {
    id: 1,
    description: "Primer todo",
    done: false
  }
  
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  const labelId = `checkbox-list-label-${todo.id}`;

  beforeEach(() => jest.clearAllMocks())

  test('Debe de mostart el todo', () => {
    render(<TodoItem
      key={todo.id}
      value={todo}
      labelId={labelId}
      handleDeleteTodo={onDeleteTodoMock}
      handleDoneTodo={onToggleTodoMock}
    />)

  })

  test('Debe  de llamar al toggle todo al hacer click', () => {
    render(<TodoItem
      key={todo.id}
      value={todo}
      labelId={labelId}
      handleDeleteTodo={onDeleteTodoMock}
      handleDoneTodo={onToggleTodoMock}
    />)
    //screen.debug();

    const checkBox = screen.getByLabelText("checkbox");
    console.log(checkBox.innerHTML);
    fireEvent.click(checkBox);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

  })

});
