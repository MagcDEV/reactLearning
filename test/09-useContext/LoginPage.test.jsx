import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/components/09-useContext/context/UserContext";
import LoginPage from "../../src/components/09-useContext/LoginPage";

describe('Pruebas sobre el login page', () => {
  test('debe mostrar la vaina sin el usuario', () => {
    render(
      <UserContext.Provider value={{user: null}}>
        <LoginPage />
      </UserContext.Provider>
    );
    screen.debug();
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe("null");
    
  })

  test('debe llamar al set user al hacer click en el boton', () => {
     const setUserMock = jest.fn();
    render(
      <UserContext.Provider value={{user: null, setUser: setUserMock}}>
        <LoginPage />
      </UserContext.Provider>
    );
    screen.debug();
    const buttonAdd = screen.getByRole('button');
    console.log(buttonAdd.innerHTML);
    fireEvent.click(buttonAdd);
    //expect(setUserMock).toHaveBeenCalledWith({name: "Manuel", job: "Developer"})
    expect(setUserMock).toHaveBeenCalled()
    
  })

});
