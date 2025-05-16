import { axiosInstance } from "@utils/axios.util";
import { useQuery, QueryFunction } from '@tanstack/react-query';
import { Alert } from "@utils/alerts";
import { Person } from "@shared/types/persons";

const fetchPersons: QueryFunction<Person[]> = async () => {
  try {
      const response = await axiosInstance.get("persona/consulta/personas");
      const { data, message, status } = response.data;
      if (status === true) {
        console.log("datos de la tabla", data);
        console.log("mensaje", message);
        //Creamos una nueva propiedad id para el objeto por condición de la tabla de rect material
        const rowObject = data.map((item:any) => {
          item.id = item.id_persona;
          delete item.id_persona;
          return item;
        });
        return rowObject;
      } 
      if (status === false) {
        Alert.errorAlert(data.message); 
      } 
    } catch (error: any) {
      Alert.errorAlert(error.response.message); 
    }
}

export function usePersonService() {
  return useQuery<Person[], Error>({queryKey: ["persons"], queryFn: fetchPersons })  
}
