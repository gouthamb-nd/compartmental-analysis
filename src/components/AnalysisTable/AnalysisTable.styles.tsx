import { TableHead, TableRow, TableCell } from "@mui/material";
import {styled} from "@mui/system";

export const StyledTableHead = styled(TableHead)`

    .MuiTableCell-head{
       
        padding: ${({theme})=> theme.spacing(1.5)};
        border: 1px solid #0e0540;
    }    

`

export const StyledTableRow = styled(TableRow)`
    

`
export const StyledTableCell = styled(TableCell)`
    
    color: #0e0540;
    padding: ${({theme})=> theme.spacing(1.5)};
    border: 1px solid #0e0540;
`






