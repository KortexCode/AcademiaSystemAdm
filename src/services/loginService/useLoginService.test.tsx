import { vi, describe, it, expect, Mock, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { axiosInstance } from "../../utils/axios.util";
import { Alert } from "../../utils/alerts";
import { useLoginService } from "./useLoginService";

vi.mock("../../utils/axios.util", () => ({
  axiosInstance: { post: vi.fn() }
}));

const mockAxiosPost = axiosInstance.post as Mock;

//Se mockea la clase Alert la cual tiene métodos para mostrar alertas
vi.mock("../../utils/alerts", () => ({
  Alert: {
    succesAlert: vi.fn(),
    errorAlert: vi.fn()
  }
}));

const mockLogIn = vi.fn();
vi.mock("../../context/useAuthenticated", () => ({
  useAuthenticated: () => ({
    logIn: mockLogIn
  })
}));

const mockNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate
}));

beforeEach(() => {
  vi.clearAllMocks(); // limpia historial de llamadas y conteo, pero mantiene las implementaciones mock
  // o usa vi.resetAllMocks() si quieres restablecer también las implementaciones
});

describe("useLoginService - postLoginInit", () => {
  it("debería iniciar sesión correctamente y navegar", async () => {
    // Arrange
    const userInfo = { user_name: "1054833992", password: "1234" };
    mockAxiosPost.mockResolvedValue({
      data: {
        status: "true",
        message: "Inicio de sesión exitoso",
        token: "token123"
      }
    });

    const { result } = renderHook(() => useLoginService());

    // Act
    await result.current.postLoginInit(userInfo);

    // Assert
    expect(mockAxiosPost).toHaveBeenCalledWith("login/inicio-sesion", userInfo);
    expect(mockLogIn).toHaveBeenCalledWith(userInfo.user_name, "token123");
    expect(mockNavigate).toHaveBeenCalledWith("./inicio");
  });

  it("debería regresar mensaje de error si la contraseña es incorrecta", async () => {
    // Arrange
    const userInfo = { user_name: "admin", password: "1234" };
    mockAxiosPost.mockResolvedValue({
      data: {
        status: "false",
        message: "contraseña incorrecta",
      }
    });

    const { result } = renderHook(() => useLoginService());

    // Act
    await result.current.postLoginInit(userInfo);

    // Assert
    expect(mockAxiosPost).toHaveBeenCalledWith("login/inicio-sesion", userInfo);
    expect(Alert.errorAlert).toHaveBeenCalledWith("contraseña incorrecta");
  });

  it("debería mostrar mensaje de error si el usuario no existe", async () => {
    // Arrange
    const userInfo = { user_name: "wrongUser", password: "1234" };
    const data = {
        status: "false",
        message: "El nombre de usuario no existe",
    }; // Los datos de la respuesta del servidor
    
    mockAxiosPost.mockRejectedValue(
      {
        response:{data},
      }
    );

    const { result } = renderHook(() => useLoginService());

    // Act
    await result.current.postLoginInit(userInfo);

    // Assert
    expect(Alert.errorAlert).toHaveBeenCalledWith("El nombre de usuario no existe");
  });
});
