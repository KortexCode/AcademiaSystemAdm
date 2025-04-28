import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../util/axios.util";
import { Alert } from '../util/alerts';

type UserInfo ={
    user_name: string;
    password: string
}
type UserValidate = {
    numero_documento: string;
}
type CodeCreate = {
    user_name: string,
    fha_genera: string
}
type CodeValidate = {
    codigo: string
}

export function useLoginService() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    //Servicio para iniciar sesión
    const postLoginInit = async (userInfo: UserInfo) => {
        setIsLoading(true);
        try {
            const {data} = await axiosInstance.post('login/inicio-sesion', userInfo);
            console.log("data", data); 
            if(data.status === "true") {
                localStorage.setItem('user', userInfo.user_name);
                localStorage.setItem('token', data.token);
                Alert.succesAlert(data.message);
                navigate("./menu");
            }
            if(data.status === "false"){
                Alert.errorAlert(data.message); 
            }
        } catch (error: any) {
            console.log("data", error.response.data.message); //Se revisará la respuesta
            Alert.errorAlert(error.response.data.message); 
            
        } finally {
            setIsLoading(false);
        }
    }
    //Servicio para validar usuario
    const postUserValidate = async (user_data: UserValidate) => {
        setIsLoading(true);
        try {
            const {data} = await axiosInstance.post('login/validar-usuario', user_data);
            console.log(data)
            if(data.status === "false"){
                Alert.errorAlert(data.message);
                return false;
            }
            if(data.status === "true"){
                return true
            }
        } catch (error) {
            Alert.systemErrorAlert();
        }
    }
    //Servicio para validar correo y crear código
    const postEmailValidate = async (user_code_data: CodeCreate) => {
        try {
            const {data} = await axiosInstance.post('login/validar-correo', user_code_data);
            if(data.status === "false"){
                Alert.errorAlert(data.message);
                return false;
            }
            if(data.status === "true"){
                Alert.succesAlert(data.message);
                return true
            }
        } catch (error: any) {
            Alert.errorAlert(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    }
    //Servicio para validar código
    const postValidateCode = async (code: CodeValidate) => {
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
