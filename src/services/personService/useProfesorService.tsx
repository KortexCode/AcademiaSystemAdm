import { Aprendiz, Instructor } from "@shared/types/persons";
import { QueryFunction, useQuery } from "@tanstack/react-query";
import { Alert } from "@utils/alerts";
import { axiosInstance } from "@utils/axios.util";

const fetchProfesores: QueryFunction<Instructor[]> = async () => {
  try {
    const response = await axiosInstance.get("profesor/consulta/profesores");
    const { data } = response.data;

    const rowObject = data.map((item: any) => {
      item.id = item.id_profesor;
      delete item.id_profesor;
      const personaArray = item.persona;

      delete item.persona;
      return { ...item, ...personaArray };
    });
    return rowObject;
    
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export function useProfesorService() {
  return useQuery<Instructor[], Error>({
    queryKey: ["profesores"],
    queryFn: fetchProfesores,
    enabled: false, // La consulta no se ejecuta al montar el componente
  });
}
