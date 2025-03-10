import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { supabaseApi } from "../hooks/usePersonService";

const columns = [
  { field: "id_persona", headerName: "ID", width: 70 },
  { field: "nombre", headerName: "First name", width: 130 },
  { field: "apellido", headerName: "Last name", width: 130 },
  {
    field: "edad",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  { field: "sexo", headerName: "Sexo", width: 130 },
  { field: "direccion", headerName: "Dirección", width: 130 },
  { field: "telefono", headerName: "Teléfono", width: 130 },
  { field: "correo", headerName: "correo", width: 130 },
  { field: "seguridad_social", headerName: "Seguiridad Social", width: 130 },
  { field: "patologia", headerName: "Patología", width: 130 },
  { field: "fecha_de_registro", headerName: "Fecha de registro", width: 130 },
];

const paginationModel = { page: 0, pageSize: 5 };

export function DataGridReact() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function getdata() {
      try {
        /* const { data, error } = await supabaseApi
              .from("personas")
              .select(`*, aprendiz (*)`)
              .not("aprendiz", "is", null);
            console.log("values data", data); */
        const { data, error } = await supabaseApi.from("personas").select();
        const filasObj = data.map((item) => {
          const obj = { id: item.id_persona };
          delete item.id_persona;
          return { ...obj, ...item };
        });

        console.log("Filas", filasObj);

        if (filasObj) {
          /* const rowData = filasObj.map((item) => Object.values(item));
          console.log("values", rowData); */
          setRows(filasObj);
        } else {
          console.log("ocurrio un", error);
        }
      } catch (error) {
        console.log(console.log("ocurrio un error al solicitar datos", error));
      }
    }

    getdata();
  }, []);

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
