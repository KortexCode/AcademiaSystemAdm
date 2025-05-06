import { useState } from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginService } from "../../service/useLoginService";
import { ValidatedInput } from "@shared/components/validaterInput/validatedInput";
import { AnimationLoader } from "@shared/components/loginLoader/animationLoader";
import { HiEye } from "react-icons/hi";
import logo from "@assets/logoAca.png";
import "./styles.css";

type Inputs = {
  user_name: string,
  password: string
}
function Login() {
  const { postLoginInit, isLoading } = useLoginService();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors, touchedFields }, trigger } = useForm<Inputs>({ mode: "onBlur" });

  //Validación de formularios
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { user_name, password } = data;
    const userInfo = {
      user_name,
      password,
    }
    postLoginInit(userInfo);
  };

  //Validación de contraseña dinámico
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Si el campo ha sido tocado y hay errores, validamos al cambiar
    if (touchedFields.password && errors.password) {
      trigger('password'); // Forzar la validación del campo 'password'
      return;
    }
  }

  return (
    <>
      <section className="w-full h-ful bg-background">
        <div
          className="login-container flex flex-col items-center justify-center md:w-[480px] my-0 mx-auto
         h-full min-h-screen md:border-[1px] bg-white px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-md w-full space-y-8">
            {/* //LOGO */}
            <div className="w-full flex justify-center">
              <img className="w-52" src={logo} alt="logo academia" />
            </div>
            {isLoading &&
              <AnimationLoader message="Validando inicio de sesión"/>
            }
            {/* //FORMULARIO */}
            {!isLoading && (
              <form
                data-testid="login-form"
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-6"
              >
                <div className="space-y-2">
                  <div>
                    <label htmlFor="usuario" className="sr-only">
                      Usuario
                    </label>
                    <input
                      {...register("user_name", {
                        required: "Nombre de usuario obligatorio",
                      })}
                      id="usuario"
                      type="text"
                      className="appearance-none relative block w-full px-3 py-2 border-gray-400
                     placeholder-gray-400 text-gray-900 rounded-md focus:outline-none border-[1px]
                      border- focus:ring-primary hover:border-primary focus:border-primary focus:z-10 sm:text-sm"
                      placeholder="Nombre de usuario *"
                    />
                    <span
                      className={`required-span ${
                        errors.user_name && "span--actived"
                      }`}
                    >
                      {errors.user_name?.message}
                    </span>
                  </div>

                  <div>
                    <label htmlFor="password" className="sr-only">
                      ingresa tu contraseña
                    </label>
                    <div
                      className="flex items-center gap-2 appearance-none rounded-md relative w-full mt-1 px-3 py-2 border
                      border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none
                        focus:ring-primary hover:border-primary focus:border-primary focus:z-10 sm:text-sm"
                    >
                      <input
                        id="password"
                        type={isPasswordVisible ? "text" : "password"}
                        {...register("password", {
                          required: "Contraseña obligatoria",
                          onChange: handleChangePassword,
                        })}
                        className="appearance-none relative block w-full border-none focus:outline-none"
                        placeholder="Contraseña *"
                      />
                      <button
                        type="button"
                        onMouseDown={(e) => {
                          setIsPasswordVisible(!isPasswordVisible);
                        }}
                        className="cursor-pointer text-gray-500 hover:text-primary focus:outline-none
                       focus:text-primary"
                      >
                        <HiEye size={25} />
                      </button>
                    </div>
                    <ValidatedInput errors={errors} name="password" />
                  </div>
                </div>

                <div className="flex justify-center w-full">
                  <div className="text-sm">
                    <Link to={"/olvido-password"}>
                      <p className="font-medium text-primary hover:text-primary-dark">
                        ¿Olvidaste tu contraseña?
                      </p>
                    </Link>
                  </div>
                </div>
                {/* //BOTÓN DE INGRESAR */}
                <div>
                  <button
                  data-testid="btn-login"
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent
                       text-lg font-semibold rounded-md text-zinc-900 bg-primary hover:bg-primary-dark
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Ingresar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export { Login };
