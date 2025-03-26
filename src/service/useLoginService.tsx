import React from 'react'
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../util/axios.util";
import { Alert } from '../util/alerts';
interface userInfo {
    user_name: string;
    password: string
}
export function useLoginService() {
    const navigate = useNavigate();
    const postLoginInit = async (userInfo: userInfo) => {
        try {
            const {data} = await axiosInstance.post('login/', userInfo);
            if(data.status === "true") {
                localStorage.setItem('user', userInfo.user_name);
                localStorage.setItem('token', data.token);
                Alert.succesAlert(data.message);
                navigate("./menu");
            }
            if(data.status === "false"){
                Alert.errorAlert(data.message);
              
            }
        } catch (error) {
            Alert.systemErrorAlert();
           
        }
    }
  return (
    {
        postLoginInit
    }
  )
}
