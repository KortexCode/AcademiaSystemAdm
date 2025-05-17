import { axiosInstance } from "@utils/axios.util";
import { useQuery, QueryFunction } from "@tanstack/react-query";
import { Person } from "@shared/types/persons";

const fetchPersons: QueryFunction<Person[]> = async () => {
  try {
    const response = await axiosInstance.get("persona/consulta/personas");
    const { data } = response.data;

    //Creamos una nueva propiedad id para el objeto por condición de la tabla de rect material
    const rowObject = data.map((item: any) => {
      item.id = item.id_persona;
      delete item.id_persona;
      return item;
    });
    return rowObject;
  } catch (error: any) {
    throw new Error(error.response.data.message);
  }
};

export function usePersonService() {
  return useQuery<Person[], Error>({
    queryKey: ["personas"],
    queryFn: fetchPersons,
  });
}
