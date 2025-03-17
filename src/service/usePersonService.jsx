import { axiosInstance } from "../util/axios.util";

export function usePersonService() {
  const getPersonas = async () => {
    try {
      const response = await axiosInstance.get("persona/consulta/personas");
      const { data, message, status } = response.data;
      if (status === true) {
        console.log("datos de la tabla", data);
        console.log("mensaje", message);
        //Creamos una nueva propiedad id para el objeto por condición de la tabla de rect material
        const rowObject = data.map((item) => {
          item.id = item.id_persona;
          delete item.id_persona;
          return item;
        });
        return rowObject;
      } else {
        console.log(response.message);
      }
    } catch (error) {
      console.log("Un error ha ocurrido", error);
    }
  };

  return {
    getPersonas,
  };
}
