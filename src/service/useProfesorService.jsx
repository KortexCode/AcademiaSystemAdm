import { axiosInstance } from "../util/axios.util";
export function useProfesorService() {
  async function getProfesores() {
    try {
      const res = await axiosInstance.get("profesor/consulta/profesores");
     
      const profesoresList = res.data
      if (res.status === 400) {
        console.log("no hay registro de profesores");
        return;
      }
      //Creamos una nueva propiedad id para el objeto por condición de la tabla de rect material
      const rowObject = profesoresList.map((profesores) => {
        profesores.id = profesores.id_profesor;
        delete profesores.id_profesor;

        const personaArray = profesores.persona;
        delete profesores.persona;

        return { ...profesores, ...personaArray };
      });
      return rowObject;
    } catch (error) {
      console.log(error);
    }
  }

  return { getProfesores };
}
