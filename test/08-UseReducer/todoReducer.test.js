import { todoReducer } from '../../src/components/08-UseReducer/todoReducer';

describe("Pruebas en todoReducer", () => {
  const initialState = [{
    id: 1,
    description: 'Demo todo',
    done: false
  }]

  test('debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);

  });

  test('debe agreagar un todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Nueva tarea',
        done: false
      }
    }
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('debe realizar el toggle todo', () => {
    const action = {
      type: '[TODO] Done Todo',
      payload: 1
    }
    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true);

  });
});
