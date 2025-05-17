import { Aprendiz } from "@shared/types/persons";
import { QueryFunction, useQuery } from "@tanstack/react-query";
import { Alert } from "@utils/alerts";
import { axiosInstance } from "@utils/axios.util";

const fetchAprendices: QueryFunction<Aprendiz[]> = async () => {
  try {
    const response = await axiosInstance.get("aprendiz/consulta/aprendices");
    const { data } = response.data;

    const rowObject = data.map((item: any) => {
      item.id = item.id_aprendiz;
      delete item.id_aprendiz;
      const personaArray = item.persona;

      delete item.persona;
      return { ...item, ...personaArray };
    });
    return rowObject;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export function useAprendizService() {
  return useQuery<Aprendiz[], Error>({
    queryKey: ["aprendices"],
    queryFn: fetchAprendices,
    enabled: false, // La consulta no se ejecuta al montar el componente
  });
}
