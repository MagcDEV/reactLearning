import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/components/03-example/MultipleCustomHooks";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";


jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe('Pruebas sobre el Multiple custom hooks', () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  test('debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });
    render(<MultipleCustomHooks />);
    //screen.debug();
    expect(screen.getByRole('progressbar'))
    const nextButton = screen.getByText('Next Quote');
    expect(nextButton.disabled).toBeTruthy();

  });

  test('debe de mostrar un quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: "Manuel Guevara", quote: "cita textual" }],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks />);
    //screen.debug();
    expect(screen.getByText('cita textual')).toBeTruthy();

  });
  
  test('debe llamar la funcion de incremento', () => {
    useFetch.mockReturnValue({
      data: [{ author: "Manuel Guevara", quote: "cita textual" }],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByText('Next Quote');
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
    //screen.debug();
  })
});
