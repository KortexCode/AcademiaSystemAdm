import { axiosInstance } from "../util/axios.util";

export function useAprendizService() {
  const getAprendices = async () => {
    try {
      const response = await axiosInstance.get("aprendiz/consulta/aprendices");
      const { data, message, status } = response.data;
      if (status === true) {
    
        const rowObject = data.map((item:any) => {
          item.id = item.id_aprendiz;
          delete item.id_aprendiz;
          const personaArray = item.persona;
    
          delete item.persona;
          return { ...item, ...personaArray };
        });
        return rowObject;
      } else {
        console.log(message);
      }
    } catch (error) {
      console.log("Un error ha ocurrido", error);
    }
  };

  return {
    getAprendices,
  };
}
