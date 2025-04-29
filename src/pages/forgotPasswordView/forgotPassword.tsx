import React, { useState, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { HiEye } from "react-icons/hi";
import { useLoginService } from '../../service/useLoginService';
import { ValidatedInput } from '../../shared/components/validaterInput/validatedInput';
import { Alert } from '../../utils/alerts';
import { DateHour } from '../../utils/dateAndHour';
import logo from "../../assets/logoAca.png";
import "./styles.css";
import { AnimationLoader } from '../../shared/components/loginLoader/animationLoader';

type UserData = {
  user_name: string,
  fha_genera: string,
}
type UserInput = z.infer<typeof userSchema>;
type PasswordInput = z.infer<typeof passwordSchema>;
type CodeInput = z.infer<typeof codeSchema>;

//ESQUEMAS DE VALIDACIÓN DE ZOD PARA LOS FORMULARIOS DE REACT-HOOK-FORM
//Validación de formulario de usuario
const userSchema = z.object({
  user_name: z.string().max(11, { message: "El nombre de usuario debe tener máximo 11 caracteres" })
    .nonempty({ message: "El nombre de usuario es obligatorio" }),
})

//Validación de formulario de código
const codeSchema = z.object({
  codigo: z.string().min(6, { message: "El código debe tener al menos 6 caracteres" })
    .max(6, { message: "El código debe tener máximo 6 caracteres" })
    .nonempty({ message: "El código es obligatorio" }),
})

//Validación de formulario de contraseña
const passwordSchema = z.object({
  password: z.string().nonempty({ message: "La contraseña es obligatoria" })
    .max(12, { message: "La contraseña debe tener máximo 12 caracteres" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      { message: "Debe el formato mayúscula, minúscula, número y símbolo especial" }),
  repeat_password: z.string().nonempty({ message: "La contraseña es obligatoria" })
    .max(12, { message: "La contraseña debe tener máximo 12 caracteres" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      { message: "Debe contener al menos una letra mayúscula, una minúscula, un número y un símbolo especial" }),
}).refine((data) => data.password === data.repeat_password, {
  path: ["repeat_password"],
  message: "Las contraseñas no coinciden"
})
//COMPONENTE DE RECUPERACIÓN DE CONTRASEÑA
export function ForgotPassword() {
  const { postUserValidate, postEmailValidate, postValidateCode,
     putPasswordUpdate, setIsLoading, isLoading } = useLoginService();

  //Estados de los formularios
  const [loadingMessage, setLoadingMessage] = useState('Validando nombre de usuario');
  const [toggleUser, setToggleUser] = useState(true);
  const [toggleCode, setToggleCode] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);

  let userData = useRef<UserData>({
    user_name: "",
    fha_genera: "",
  })

  //Formulario de usuario
  const {
    register: userRegister,
    handleSubmit: userHandleSubmit,
    formState: { errors: userErrors, touchedFields: touchedFieldsUsername },
    trigger: triggerUser,
  } = useForm<UserInput>({
    mode: "onBlur",
    resolver: zodResolver(userSchema),
  });
  //Formulario de código
  const {
    register: codeRegister,
    handleSubmit: codeHandleSubmit,
    formState: { errors: codeErrors, touchedFields: touchedFieldsCode },
    trigger: triggerCode,
  } = useForm<CodeInput>({
    mode: "onBlur",
    resolver: zodResolver(codeSchema),
  });
  //Formulario de contraseña
  const {
    register: passwordRegister,
    handleSubmit: passwordHandleSubmit,
    formState: { errors: passwordErrors, touchedFields: touchedFieldsPassword },
    trigger,
  } = useForm<PasswordInput>({
    mode: "onBlur",
    resolver: zodResolver(passwordSchema),
  });


  //Envío de formulario de usuario
  const onSubmitUser: SubmitHandler<UserInput> = async (data) => {
    const validate = await postUserValidate({ numero_documento: data.user_name });
    if (validate) {
      setLoadingMessage("Validando correo electrónico, por favor espere...");
      //Guardar datos de usuario en un objeto global
      userData.current.user_name = data.user_name;
      //Datos para validar email y generar código
      const userCodeData: any = {
        user_name: data.user_name,
        fha_genera: DateHour.fechaOrdenBarra()
      }
      //Validar email de usuario para generar código
    
      const validSend = await postEmailValidate(userCodeData);
      if (validSend) {
        //Mostrar formulario de código
        setToggleCode(true);
        //Ocultar formulario de usuario
        setToggleUser(false);
      }
    }else {
      setIsLoading(false);
    }
  }
  //Envío de formulario de código
  const onSubmitCode: SubmitHandler<CodeInput> = async (data) => {
    setLoadingMessage("Validando codigo, por favor espere...");
    const codeToValidate: CodeInput = {
      codigo: data.codigo
    }
    const validate = await postValidateCode(codeToValidate);
    if (validate) {
      setToggleCode(false);
      setTogglePassword(true);
    }
  }
  //Envío de formulario de contraseña
  const onSubmitPassword: SubmitHandler<PasswordInput> = (data) => {
    setLoadingMessage("Actualizando contraseña, por favor espere...");
    if (data.password !== data.repeat_password) {
      Alert.errorAlert('Las contraseñas no coinciden');
      return
    }
    const dataPassword = {
      user_name: userData.current.user_name,
      password: data.password,
    }
    putPasswordUpdate(dataPassword);
    setTogglePassword(false);
  }
  //Reenviar solicitud de código
  const handleReSend = async () => {
    console.log('validar usuario', userData.current);
    //Datos para validar email generar código
    const userCodeData: any = {
      user_name: userData.current.user_name,
      fha_genera: userData.current.fha_genera
    }
    //Re validar email de usuario para generar código
    await postEmailValidate(userCodeData);
  }

  //Validación de usuario dinámico
  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Si el campo ha sido tocado y hay errores, validamos al cambiar
    if (touchedFieldsUsername.user_name && userErrors.user_name) {
      triggerUser("user_name"); // Forzar la validación del campo 'password'
      return;
    }
  };
   //Validación de código dinámico
   const handleChangeCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Si el campo ha sido tocado y hay errores, validamos al cambiar
    if (touchedFieldsCode.codigo && codeErrors.codigo) {
      triggerCode("codigo"); // Forzar la validación del campo 'código'
      return;
    }
  };
  //Validación de contraseña dinámico
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Si el campo ha sido tocado y hay errores, validamos al cambiar
    if (touchedFieldsPassword.password && passwordErrors.password) {
      trigger('password'); // Forzar la validación del campo 'password'
      return;
    }
    if (touchedFieldsPassword.repeat_password && passwordErrors.repeat_password) {
      trigger('repeat_password'); // Forzar la validación del campo 'repeat_password'
      return;
    }
  }



  return (
    <>
      <section className="w-full h-full bg-background">
        <div
          className="flex flex-col items-center justify-around w-full h-full min-h-screen md:w-[480px] my-0 mx-auto 
           px-4 sm:px-6 lg:px-8 space-y-6 login-container bg-white"
        >
          <div className="w-full flex justify-center">
            <img className="w-48" src={logo} alt="logo academia" />
          </div>
          {isLoading && <AnimationLoader message={loadingMessage} />}
          {/* FORMULARIO DE USUARIO */}
          {toggleUser && !isLoading && (
            <form onSubmit={userHandleSubmit(onSubmitUser)} className="w-full">
              <div>
                <p className="mb-4 text-center text-base font-normal text-gray-600">
                  Valida tu nombre de usuario para verificar tu cuenta.
                </p>
                <label htmlFor="usuario" className="sr-only">
                  Usuario
                </label>
                <input
                  id="usuario"
                  type="text"
                  {...userRegister("user_name", {
                    onChange: handleChangeUsername,
                  })}
                  className="appearance-none relative block w-full px-3 py-2 border
                     border-gray-400 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none
                      focus:ring-primary hover:border-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="nombre de usuario *"
                />
                <ValidatedInput errors={userErrors} name="user_name" />
                <div className="flex justify-between mt-6 gap-2">
                  <button
                    type="submit"
                    className="relative w-full flex justify-center py-2 px-4 border border-transparent
                      text-lg font-semibold rounded-md text-zinc-900 bg-primary hover:bg-primary-dark
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Validar
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* FORMULARIO DE CÓDIGO */}
          {toggleCode && !isLoading && (
            <form onSubmit={codeHandleSubmit(onSubmitCode)} className="w-full">
              <div>
                <p className="mb-4 text-center text-base font-normal text-gray-600">
                  Ingresa el código que recibiste en la bandeja de tu correo
                  electrónico.
                </p>
                <label htmlFor="codigo" className="sr-only">
                  Código
                </label>
                <input
                  id="codigo"
                  type="number"
                  {...codeRegister("codigo", { onChange: handleChangeCode })}
                  className="appearance-none relative block w-full mt-1 px-3 py-2 border
                     border-gray-400 placeholder-gray-400 text-gray-900 rounded-md focus:outline-none
                      focus:ring-primary hover:border-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="código *"
                />
                <ValidatedInput errors={codeErrors} name="codigo" />
              </div>
              <div className="flex justify-between mt-6 gap-2">
                <button
                  type="submit"
                  className="relative w-full flex justify-center py-2 px-4 border border-transparent
                      text-lg font-semibold rounded-md text-zinc-800 bg-primary hover:bg-primary-dark
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Validar código
                </button>
                <button
                  onClick={handleReSend}
                  type="button"
                  className="relative w-full flex justify-center py-2 px-4 border border-transparent
                      text-lg font-semibold rounded-md text-zinc-800 bg-green-600 hover:bg-green-800
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Reenviar solicitud
                </button>
              </div>
            </form>
          )}

          {/*FORMULARIO CONTRASEÑA */}
          {togglePassword && !isLoading && (
            <form
              onSubmit={passwordHandleSubmit(onSubmitPassword)}
              className="w-full"
            >
              <div>
                <p className="mb-4 text-center text-base font-normal text-gray-600">
                  Ingresa tu nueva contraseña.
                </p>

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
                      {...passwordRegister("password", {
                        onChange: handleChangePassword,
                      })}
                      className="appearance-none relative block w-full border-none focus:outline-none"
                      placeholder="ingresa tu contraseña *"
                    />
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        setIsPasswordVisible(!isPasswordVisible);
                      }}
                      className="cursor-pointer text-gray-500 hover:text-primary focus:outline-none focus:text-primary"
                    >
                      <HiEye size={25} />
                    </button>
                  </div>

                  <ValidatedInput errors={passwordErrors} name="password" />
                </div>

                <div>
                  <label htmlFor="repeat-password" className="sr-only">
                    Repetir Contraseña
                  </label>
                  <div
                    className="flex items-center gap-2 appearance-none rounded-md relative w-full mt-1 px-3 py-2 border
                      border-gray-400 placeholder-gray-400 text-gray-900 focus:outline-none
                        focus:ring-primary hover:border-primary focus:border-primary focus:z-10 sm:text-sm"
                  >
                    <input
                      id="repeat-password"
                      type={isRepeatPasswordVisible ? "text" : "password"}
                      {...passwordRegister("repeat_password", {
                        onChange: handleChangePassword,
                      })}
                      className="appearance-none relative block w-full border-none focus:outline-none"
                      placeholder="repetir contraseña *"
                    />
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        setIsRepeatPasswordVisible(!isRepeatPasswordVisible);
                      }}
                      className="cursor-pointer text-gray-500 hover:text-primary focus:outline-none focus:text-primary"
                    >
                      <HiEye size={25} />
                    </button>
                  </div>

                  <ValidatedInput
                    errors={passwordErrors}
                    name="repeat_password"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-4 gap-2">
                <button
                  type="submit"
                  className="relative w-full flex justify-center py-2 px-4 border border-transparent
                      text-lg font-semibold rounded-md text-zinc-800 bg-primary hover:bg-primary-dark
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Actualizar
                </button>
              </div>
            </form>
          )}
          {/* BOTÓN DE CANCELAR */}
          <Link className="w-full" to="/">
            <button
              type="submit"
              className="relative w-full flex justify-center mb-2 py-2 px-4 border border-transparent
                    text-lg text-zinc-800 font-semibold rounded-md  bg-gray-400 hover:bg-gray-600
                      focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Cancelar
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
