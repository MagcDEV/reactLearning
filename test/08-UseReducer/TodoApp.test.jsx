import { render, screen } from "@testing-library/react";
import { useTodo } from "../../src/hooks/useTodo";
import  TodoApp  from "../../src/components/08-UseReducer/TodoApp"

jest.mock('../../src/hooks/useTodo')

describe('Pruebas sobre el compnente TodoApp', () => {
  useTodo.mockReturnValue({
    state: [
      { id: 1, description: "Todo #1", done: false },
      { id: 2, description: "Todo #2", done: false }
    ],
    handleAddTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleDoneTodo: jest.fn()
  });
})


test('debe de mostrar el componenete correctamente', () => {
  render(<TodoApp />);

  expect(screen.getByText('Todo #1')).toBeTruthy();
  expect(screen.getByText('Todo #2')).toBeTruthy();
  expect(screen.getByRole('textbox')).toBeTruthy();
  //screen.debug();

});
