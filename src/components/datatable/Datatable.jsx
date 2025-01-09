import './datatable.scss'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from "react";

const Datatable = () => {
 
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const actionColumn = [
    {
        field: 'action', 
        headerName: 'Action', 
        width: 150,
        renderCell: (params) => {
            return(
                <>
                <div className="cellAction">
                    <Link to="/users/test" style={{textDecoration: 'none'}}>
                    <div><span className="viewButton">View</span></div>
                    </Link>
                    <div onClick={() => handleDelete(params.row.id)}><span className="deleteButton">Delete</span></div>
                </div>
                </>
            )
        }
    }
  ]

  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <div className="datatable">
        <div className="datatableTitle">
          Add New User
          <Link to="/users/new" className='link'>
          Add New
          </Link>
        </div>
        <DataGrid
        className='dataGrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5,10]}
        checkboxSelection
        />
    </div>
  )
}

export default Datatable
