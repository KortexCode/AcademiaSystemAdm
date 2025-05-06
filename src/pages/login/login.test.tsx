import { describe, it, expect, vi } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

//Se crea una función espía para simular el comportamiento de la función postLoginInit
const mockPostLoginInit = vi.fn();
//se mockea el hook useLoginService para simular el comportamiento
vi.mock("../../service/useLoginService", () => ({
  useLoginService: vi.fn(() => ({
    isLoading: false,
    postLoginInit: mockPostLoginInit, //Se asigna a la función que se desea espiar
    postUserValidate: vi.fn(),
    postEmailValidate: vi.fn(),
    postValidateCode: vi.fn(),
    putPasswordUpdate: vi.fn(),
  })),
}));
//Debe importarse el componente de login después de mockear el hook para que lo reconozca
import { Login } from ".";

describe("<Login/>", () => {
  it("Debería renderizarse el login"),
    () => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );
    };

  it("Debería de llamar a postLoginInit en el submit del formulario ", async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    // Obtén los elementos del formulario
    const usernameInput = screen.getByPlaceholderText("Nombre de usuario *");
    const passwordInput = screen.getByPlaceholderText("Contraseña *");
    const btnIngresar = screen.getByTestId("btn-login");

    // Simula la entrada de datos en los campos
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    await act(() => {
      fireEvent.click(btnIngresar);//Simula el click en el botón de ingresar
    });

    expect(mockPostLoginInit).toHaveBeenCalledTimes(1);
    expect(mockPostLoginInit).toHaveBeenCalledWith({
      user_name: "testuser",
      password: "password123",
    });
  });
});
