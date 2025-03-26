import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginService } from "../service/useLoginService";
import logo from "../assets/logoAca.png";
import "../styles/login.css";
import { useState } from "react";

type Inputs = {
  user_name: string,
  password: string
}
function LoginPage() {
  const {postLoginInit} = useLoginService();
  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({mode: "onChange"});

  //Validación de formularios
  const onSubmit: SubmitHandler<Inputs> = (data) => {
  
    const {user_name, password} = data;
    const userInfo = {
      user_name,
      password,
    }
    postLoginInit(userInfo);
  };
  console.log("re renders")
  return (
    <>
      <section className="w-full h-ful bg-background">
        <div className="login-container flex flex-col items-center justify-center md:w-[480px] my-0 mx-auto
         h-full min-h-screen md:border-[1px] bg-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            {/* //LOGO */}
            <div className="w-full flex justify-center">
              <img className="w-52" src={logo} alt="logo academia" />
            </div>

            {/* //FORMULARIO */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
              <div className="space-y-2">
                <div>
                  <label htmlFor="usuario" className="sr-only">
                    Usuario
                  </label>
                  <input
                  {...register("user_name", { required: "Nombre de usuario obligatorio" })}
                    id="usuario"
                    type="text"
                    className="appearance-none relative block w-full px-3 py-2 border-gray-400
                     placeholder-gray-400 text-gray-900 rounded-md focus:outline-none border-[1px]
                      border- focus:ring-primary hover:border-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Usuario"
                  />
                  <span className={`required-span ${errors.user_name && "span--actived"}`}>
                  {errors.user_name?.message}
                  </span>
                </div>

                <div>
                  <label htmlFor="contraseña" className="sr-only">
                    Contraseña
                  </label>
                  <input
                  {...register("password", { required: "Contraseña obligatoria"})}
                    id="contraseña"
                    type="password"
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border
                     border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none
                      focus:ring-primary hover:border-primary focus:border-primary focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                  />
                  <span className={`required-span ${errors.password && "span--actived"}`}>
                    {errors.password?.message}
                  </span>
                </div>
              </div>
              {/* //OLVIDÓ CONTRASEÑA */}
              <div className="flex justify-center w-full">
                <div className="text-sm">
                  <Link to={"/olvido-password"}>
                  <p
                    className="font-medium text-primary hover:text-primary-dark"
                  >
                    ¿Olvidaste tu contraseña?
                  </p>
                  </Link>
                </div>
              </div>
              {/* //BOTÓN DE INGRESAR */}
              <div>
                <button
                type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                   text-lg font-semibold rounded-md text-zinc-900 bg-primary hover:bg-primary-dark
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export { LoginPage };
