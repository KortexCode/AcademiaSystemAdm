import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axios.util";
import { Alert } from '../../utils/alerts';
import { useAuthenticated } from '../../context/useAuthenticated';



type UserInfo ={
    user_name: string;
    password: string
}

export function useLoginService() {
    const navigate = useNavigate();
    const {logIn} = useAuthenticated();
    const [isLoading, setIsLoading] = useState(false);
    //Servicio para iniciar sesión
    const postLoginInit = async (userInfo: UserInfo) => {
        setIsLoading(true);
        try {
            const {data} = await axiosInstance.post('login/inicio-sesion', userInfo);
            if(data.status === "true") {
                logIn(userInfo.user_name, "token")
                Alert.succesAlert(data.message);
                navigate("./inicio");
            }
            if(data.status === "false"){
                Alert.errorAlert(data.message); 
            }
        } catch (error: any) {  
          console.log('el error', error) 
          Alert.errorAlert(error.response.data.message);     
        } finally {
          setIsLoading(false);
        }
    }
    //Servicio para validar usuario
    const postUserValidate = async (documento: {
      numero_documento: string;
    }) => {
      setIsLoading(true);
      try {
        const { data } = await axiosInstance.post(
          "login/validar-usuario",
          documento
        );
        if (data.status === "false") {
          Alert.errorAlert(data.message);
          return false;
        }
        if (data.status === "true") {
          return true;
        }
      } catch (error) {
        Alert.systemErrorAlert();
      }
    };
    //Servicio para validar correo y crear código
    const postEmailValidate = async (user_code_data: {
      user_name: string;
      fha_genera: string;
    }) => {
      try {
        const { data } = await axiosInstance.post(
          "login/validar-correo",
          user_code_data
        );
        if (data.status === "false") {
          Alert.errorAlert(data.message);
          return false;
        }
        if (data.status === "true") {
          Alert.succesAlert(data.message);
          return true;
        }
      } catch (error: any) {
        Alert.errorAlert(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    //Servicio para validar código
    const postValidateCode = async (code: {
        codigo: string
    }) => {
        setIsLoading(true);
        try {
            const {data} = await axiosInstance.post('login/validar-codigo', code);
            if(data.status === "false"){
                Alert.errorAlert(data.message);
                return false;
            }
            if(data.status === "true"){
                Alert.succesAlert(data.message);
                return true;
            }
        } catch (error: any) {
            Alert.systemErrorAlert();
        }finally {
            setIsLoading(false);
        }
    }
    //Servicio para cambiar contraseña
    const putPasswordUpdate = async (userInfo: UserInfo) => {
        setIsLoading(true);
        try {
            const {data} = await axiosInstance.put('login/actualizar-password', userInfo);
            if(data.status === "false"){
                Alert.errorAlert(data.message);
            }
            if(data.status === "true"){
                Alert.succesAlert(data.message);
                navigate('/');
            }
        } catch (error) {
            Alert.systemErrorAlert();
        }finally {
            setIsLoading(false);
        }
    }

  return {
    isLoading,
    setIsLoading,
    postLoginInit,
    postUserValidate,
    postEmailValidate,
    postValidateCode,
    putPasswordUpdate
    
  }
}
