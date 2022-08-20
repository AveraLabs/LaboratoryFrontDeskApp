import React,{forwardRef, useState} from 'react';
import MaterialTable from '@material-table/core';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import AddBox from '@mui/icons-material/AddBox'
// import ArrowDownward from '@mui/icons-material/ArrowDownward'
// import Check from '@mui/icons-material/Check'
// import ChevronLeft from '@mui/icons-material/ChevronLeft'
// import ChevronRight from '@mui/icons-material/ChevronRight'
// import Clear from '@mui/icons-material/Clear'
// import DeleteOutline from '@mui/icons-material/DeleteOutline'
// import Edit from '@mui/icons-material/Edit'
// import FilterList from '@mui/icons-material/FilterList'
// import FirstPage from '@mui/icons-material/FirstPage' 
// import LastPage from '@mui/icons-material/LastPage'
// import Remove from '@mui/icons-material/Remove'
// import SaveAlt from '@mui/icons-material/SaveAlt'
// import Search from '@mui/icons-material/Search'
// import ViewColumn from '@mui/icons-material/ViewColumn'

// const tableIcons = {
//   Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
//   Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
//   Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
//   DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//   Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
//   Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
//   FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
//   LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
//   NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
//   PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
//   ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
//   Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
//   SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
//   ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
//   ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
// }


export const DataTable = () => { 

    const columns = [
        { title: 'First Name', field: 'firstName' },
        {
          title: 'Last Name',
          field: 'lastName',
          initialEditValue: 'initial value',
        },
        { title: 'Mobile Number', field: 'mobileNumber', type: 'numeric' },
        { title: 'Email', field: 'email', editable: 'never' },
      ]
    
      const [data, setData] = useState([
        {
          firstName: 'Gyanendra',
          lastName: 'Knojiya',
          mobileNumber: 8802879231,
          email: 'gyanendrak064@gmail.com',
        },
        {
          firstName: 'Virat',
          lastName: 'Kohli',
          mobileNumber: 9876543210,
          email: 'virat@gmail.com',
        },
        {
          firstName: 'Rohit',
          lastName: 'Sherma',
          mobileNumber: 9984572157,
          email: 'rohit@gmail.com',
        },
      ])
    

  return (
    <div> 
      <MaterialTable />
       </div>
  )
}
