import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/components/09-useContext/context/UserContext";
import HomePage from "../../src/components/09-useContext/HomePage";

describe('Pruebas sobre el context', () => {
  const user = {
    id: 1,
    name: "Manuel Guevara"
  };

  test('debe mostar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe("null");
  });

  test('debe mostar el componente con el usuario', () => {
    render(
      <UserContext.Provider value={{user}}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
  })
});
