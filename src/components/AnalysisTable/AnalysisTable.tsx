import { Typography, Table, Box, Stack, Button, TableCell, TableRow, TableBody, TablePagination  } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import { StyledTableHead, StyledTableRow, StyledTableCell } from "./AnalysisTable.styles";
import { useGetData, useGetChecker } from "../../hooks/useAnalysisData";
import { CheckerType } from "./AnalysisTable.types";
import { useState } from "react";


import CircularProgress from '@mui/material/CircularProgress';


function AnalysisTable() {





    const {data: checker, isLoading: checkerIsLoading, error: checkerError } = useGetChecker()
    const {data, isLoading: dataIsLoading, error: dataError } = useGetData()
    
  

    const checkerString = checker?.map((item: CheckerType)=>{
        if(item.mappedItem==="concentration") return "conc"
        else return item.mappedItem
    
    })

    
    const updatedData = data?.map((item:{ [key: string]: string|number })=>{
        const keys = Object.keys(item);
        const tempObj:{ [key: string]: string|number } = {}

        for(let i = 0; i < keys.length; i++){
            if(checkerString.includes(keys[i])){
                tempObj[keys[i]] = item[keys[i]]
            }
        }
        return tempObj
    })

    console.log(updatedData)

    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
  
    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    



    

    
  return (<>
    {(dataIsLoading || checkerIsLoading)? <CircularProgress/>:
    <Box padding="1rem" width="90%" border="1px solid black" sx={{}}>
        <Stack direction="row" alignItems="center" width="100%" height="3rem" justifyContent="space-between" marginBottom="0.5rem" sx={{}}>
            <Stack direction="row" gap="3rem" color="#0e0540" >
                <Stack direction="column">
                <Typography variant="h6" fontSize="1rem" fontWeight="700">Non Compartmental Analysis</Typography>
                <Typography component="p" fontSize="0.75rem">Analysis Type</Typography>
                </Stack>
                <Stack direction="column">
                <Typography variant="h6" fontSize="1rem" fontWeight="700">20</Typography>
                <Typography component="p" fontSize="0.75rem">Subjects</Typography>
                </Stack>
                <Stack direction="column">
                <Typography variant="h6" fontSize="1rem" fontWeight="700">5</Typography>
                <Typography component="p" fontSize="0.75rem">Columns Mapped</Typography>
                </Stack>
            </Stack>
            <Box>
                <Button variant="outlined"><EditIcon/> Edit Mapping </Button>
            </Box>
        </Stack>

        

        <Box sx={{overflow: "auto", height: "28rem"}}  >
            <Table sx={{}} >
             <StyledTableHead sx={{backgroundColor: "#b0cff7"}} >
                <TableRow>
                    <TableCell align="center" width="5%"></TableCell>
                    <TableCell align="center" width="18%">ID</TableCell>
                    <TableCell align="center" width="18%">time</TableCell>
                    <TableCell align="center" width="22%">Observation</TableCell>
                    <TableCell align="center" width="19%">Amt</TableCell>
                    <TableCell align="center" width="18%">route</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell align="center" ></TableCell>
                
                { checker?.map((item: CheckerType, index:number)=>(<TableCell align="center" key={index}>{item.mappedItem}</TableCell>)) }
                </TableRow>
             </StyledTableHead>
             <TableBody> 
                    {updatedData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item:{ [key: string]: string|number }, rowIndex:number)=>{
                        
                        return (
                        <StyledTableRow>
                            <StyledTableCell align="center">{rowIndex+1}</StyledTableCell>
                            {  
                                checkerString?.map((check: string, index:number)=>(
                                    <StyledTableCell align="center" key={index}>{item[check]}</StyledTableCell>
                                ))
                            }
                        </StyledTableRow>)})}
            </TableBody>
            </Table> 
        </Box>
            <TablePagination
      component="div"
      count={updatedData.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />

    </Box>}</>
  )
}

export default AnalysisTable