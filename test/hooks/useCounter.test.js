const { renderHook, act } = require("@testing-library/react");
import { useCounter } from '../../src/hooks/useCounter'

describe("Pruebas del useCounter", () => {
  test('debe de retornar los valores por defecto ', () => {

    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;
    expect(counter).toBe(1);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('Debe generar el contador con el valor de 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test('Debe incrementar el counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    })
    expect(result.current.counter).toBe(101);
  });

  test('Debe resetear el counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment, reset } = result.current;
    act(() => {
      increment();
      reset();
    })
    expect(result.current.counter).toBe(100);
  });

});
