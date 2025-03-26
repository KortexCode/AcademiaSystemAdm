import React from 'react'
import logo from "../assets/logoAca.png";
import "../styles/login.css";

export function ForgotPassword() {
  /* Lógica para inicio de sesión */
  const handleSession = () => {
    const form: any = document.getElementById("formSession");
    const formData = new FormData(form);
    const dataForm = Object.fromEntries(formData.entries());
    console.log(typeof dataForm.user)
    if (dataForm.user === "" || dataForm.password === "") {
      alert("Debes llenar los campos vacios para iniciar sesión");
    } else {
    
      const userInfo = {
        user_name: "1053822008",
        password: "123"
      }
    }
  };

  return (
    <>
      <section className="w-full h-full bg-background">
        <div className="login-container flex flex-col items-center justify-center md:w-[480px] my-0 mx-auto h-full min-h-screen bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="w-full flex justify-center">
              <img className="w-52" src={logo} alt="logo academia" />
            </div>
            <form id="formSession" className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm space-y-3">
                <div>
                  <label htmlFor="usuario" className="sr-only">
                    Usuario
                  </label>
                  <input
                    id="usuario"
                    name="user"
                    type="text"
                    required
                    className="appearance-none relative block w-full px-3 py-2 border
                     border-gray-400 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none focus:ring-primary hover:border-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Usuario"
                  />
                </div>

                <div>
                  <label htmlFor="contraseña" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    id="contraseña"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border
                     border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-primary hover:border-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                  />
                </div>

                <div>
                  <label htmlFor="contraseña" className="sr-only">
                    Repetir Contraseña
                  </label>
                  <input
                    id="contraseña"
                    name="password"
                    type="password"
                    required
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-primary hover:border-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Repetir contraseña"
                  />
                </div>
              </div>

              <div>
                <button
                type="button"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-semibold rounded-md text-zinc-900 bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  onClick={handleSession}
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
