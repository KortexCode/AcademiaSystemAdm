import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

TableData.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

const paginationModel = { page: 0, pageSize: 5 };

export function TableData(props) {
  const { rows, columns } = props;

  return (
    <Paper sx={{ height: 400, width: "100%" }}className="">
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
