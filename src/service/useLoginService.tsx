import React from 'react'
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../util/axios.util";
interface userInfo {
    user_name: string;
    password: string
}
export function useLoginService() {
    const navigate = useNavigate();
    const postLoginInit = async (userInfo: userInfo) => {
        try {
            const data = await axiosInstance.post('login/', userInfo);
            console.log(data);
            if(data) {
                navigate("./menu");

            }
        } catch (error) {
            console.log("No pudo iniciar sesión")
        }
    }
  return (
    {
        postLoginInit
    }
  )
}
