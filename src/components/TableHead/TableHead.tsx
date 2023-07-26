import { TableRow,TableCell } from '@mui/material'

const TableHead = ()=> {
  return (
    <TableRow>
        <TableCell align="center" width="5%"></TableCell>
        <TableCell align="center" width="18%">ID</TableCell>
        <TableCell align="center" width="18%">time</TableCell>
        <TableCell align="center" width="22%">Observation</TableCell>
        <TableCell align="center" width="19%">Amt</TableCell>
        <TableCell align="center" width="18%">route</TableCell>
    </TableRow>
  )
}

export default TableHead