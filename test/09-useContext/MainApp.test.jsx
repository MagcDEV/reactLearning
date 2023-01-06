import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainApp from "../../src/components/09-useContext/MainApp";

describe("Pruebas sobre el main app router", () => {
  test('Debe mostrt el Home Page ', () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )
    expect(screen.getByText('Home Page')).toBeTruthy();

  });

  test('Debe mostrar el Login Page ', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    )
    expect(screen.getByText('Login Page')).toBeTruthy();

  })

});
