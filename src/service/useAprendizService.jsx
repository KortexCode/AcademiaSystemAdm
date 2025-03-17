import { axiosInstance } from "../util/axios.util";

export function useAprendizService() {
  const getAprendices = async () => {
    try {
      console.log("consultando aprendices");

      const response = await axiosInstance.get("aprendiz/consulta/aprendices");
      console.log("respuesta", response.data);
      const { data, message, status } = response.data;
      if (status === true) {
        console.log("datos de la tabla", data);
        console.log("mensaje", message);
        const rowObject = data.map((item) => {
          item.id = item.id_aprendiz;
          delete item.id_aprendiz;
          const personaArray = item.persona;
          /* personaArray.id = personaArray.id_persona; */
          /* delete personaArray.id_persona; */
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
