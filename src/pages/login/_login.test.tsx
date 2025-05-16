import { describe, it, expect, vi, beforeEach } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Login } from ".";

//Se crea una función espía para simular el comportamiento de la función postLoginInit
const mockPostLoginInit = vi.fn();
const mockIsLoading = false;
//se mockea el hook useLoginService para simular el comportamiento
vi.mock("../../service/loginService/useLoginService", () => ({
  useLoginService: vi.fn(() => ({
    isLoading: mockIsLoading,
    postLoginInit: mockPostLoginInit, //Se asigna a la función que se desea espiar
    postUserValidate: vi.fn(),
    postEmailValidate: vi.fn(),
    postValidateCode: vi.fn(),
    putPasswordUpdate: vi.fn(),
  })),
}));


describe("<Login/>", () => {

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  });


  it.skip("postLoginInit debería ser llamado y devolver algo ", async () => {
    // Obtén los elementos del formulario
    const usernameInput = screen.getByPlaceholderText("Nombre de usuario *");
    const passwordInput = screen.getByPlaceholderText("Contraseña *");
    const btnIngresar = screen.getByTestId("btn-login");

    // Simula la entrada de datos en los campos
    fireEvent.change(usernameInput, { target: { value: "1053822008" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    await act(() => {
      fireEvent.click(btnIngresar);//Simula el click en el botón de ingresar
    });

    expect(mockPostLoginInit).toHaveBeenCalledTimes(1);
    expect(mockPostLoginInit).toHaveBeenCalledWith({
      user_name: "1053822008",
      password: "password123",
    });
    expect(mockPostLoginInit).toHaveReturned();
  });

  it.skip("PostloginInit debería ser llamada con dos argumentos user_name y password", async () => {
  
    // Obtén los elementos del formulario
    const usernameInput = screen.getByPlaceholderText("Nombre de usuario *");
    const passwordInput = screen.getByPlaceholderText("Contraseña *");
    const btnIngresar = screen.getByTestId("btn-login");

    // Simula la entrada de datos en los campos
    fireEvent.change(usernameInput, { target: { value: "1053822008" } });
    fireEvent.change(passwordInput, { target: { value: "123" } });

    await act(() => {
      fireEvent.click(btnIngresar);//Simula el click en el botón de ingresar
    });

    expect(mockPostLoginInit).toHaveBeenCalledWith({
      user_name: "1053822008",
      password: "123",
    });
    
  });

  it.skip("El formulario debe renderizarse si el usuario no acciona el botón de ingresar", async () => {
    

    // Obtener el formulario
    const form = screen.getByTestId('login-form');
    expect(mockIsLoading).toBe(false)
    expect(form).toBeInTheDocument;
    
  });

  it.skip("Debería activar mensaje de error si los campos se dejan vacios", async () => {
    

    // Obtén los elementos del formulario
    const usernameInput = screen.getByPlaceholderText("Nombre de usuario *");
    const passwordInput = screen.getByPlaceholderText("Contraseña *");
  
    // Simula la entrada de datos en los campos
    await act(() => {
      fireEvent.blur(usernameInput, { target: { value: "" } });
      fireEvent.blur(passwordInput, { target: { value: "" } });
    });
    //Buscando elementos span con el mensaje de error
    expect(screen.getByText('Nombre de usuario obligatorio')).toBeInTheDocument();
    expect(screen.getByText('Contraseña obligatoria')).toBeInTheDocument();

  });

  it.skip("Deberían los span desaparecer si los campos se llenan", async () => {
  
    const usernameInput = screen.getByPlaceholderText("Nombre de usuario *");
    const passwordInput = screen.getByPlaceholderText("Contraseña *");
  
    // Paso 1: hacer blur sin escribir nada
    // Simula la entrada de datos en los campos
    await act(() => {
      fireEvent.blur(usernameInput, { target: { value: "" } });
      fireEvent.blur(passwordInput, { target: { value: "" } });
    });
    // Paso 2: verificar que aparece el error
    expect(screen.getByText("Nombre de usuario obligatorio")).toBeInTheDocument();
    expect(screen.getByText('Contraseña obligatoria')).toBeInTheDocument();
    
    // Paso 3: escribir texto
    await act(() => {
      fireEvent.change(usernameInput, { target: { value: "1043593339" } });
      fireEvent.blur(passwordInput, { target: { value: "1234" } });
    }); 
    // Paso 4: esperar a que el error desaparezca
    const emptySpanUsername = screen.getByTestId("user_name");
    const emptySpanPassword = screen.getByTestId("password");
    //Se verifica que los span no tengan la clase span--actived la cual los visibiliza
    expect(emptySpanUsername.classList).not.toContain("span--actived");  
    expect(emptySpanPassword.classList).not.toContain("span--actived");  
  });

  it.skip("Debería hacer visible la contraseña al clikear el ojo", async () => {
   //Obtener botón de mostrar contraseña
    const btnShowPassword = screen.getByTestId("show-password");
    const passwordInput = screen.getByPlaceholderText("Contraseña *");
    //Simular el click en el botón de mostrar contraseña
    await act(() => {
      fireEvent.mouseDown(btnShowPassword);//Simula el click en el botón de ingresar
    });

    expect(passwordInput).toHaveAttribute("type", "text");

    //Simular el click en el botón de mostrar contraseña
    await act(() => {
      fireEvent.mouseDown(btnShowPassword);//Simula el click en el botón de ingresar
    });

    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
