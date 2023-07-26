import {Table, Box, TableCell, TableRow, TableBody, TablePagination  } from "@mui/material"
import { StyledTableHead, StyledTableRow, StyledTableCell } from "./AnalysisTable.styles";
import { useGetData, useGetChecker } from "../../hooks/useAnalysisData";
import {  MapperObject, DataObject } from "./AnalysisTable.types";
import { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import TableBar from '../TableBar/TableBar'
import { useTheme } from '@mui/material/styles';
import TableHead from "../TableHead/TableHead";

const AnalysisTable = ()=> {

    const theme = useTheme()
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

    const {data: mappingData, isLoading: mappingDataIsLoading, error: mappingDataError } = useGetChecker()
    const {data: tableData, isLoading: tableDataIsLoading, error: dataError } = useGetData()

    const requiredFields = mappingData?.data.filter((item:MapperObject)=>item.mappedItem !=="")
    const requiredHeaders = requiredFields?.map((item: MapperObject)=>{
        if(item.mappedItem==="concentration") return "conc"
        else return item.mappedItem
    })
 
    const updatedData = tableData?.data.dataframe?.map((item:{ [key: string]: string|number })=>{
        const keys = Object.keys(item);
        const tempObj:{ [key: string]: string|number } = {}
        for(let i = 0; i < keys.length; i++){
          if(requiredHeaders.includes(keys[i])){
              tempObj[keys[i]] = item[keys[i]]
          }
        }
        return tempObj
    })

  if(tableDataIsLoading || mappingDataIsLoading) return (<CircularProgress/>);
  
  return (
    <Box padding={theme.spacing(1)} width="90%" border="1px solid black" sx={{}}>
      <TableBar/>
      <Box sx={{overflow: "auto", height: "28rem"}}  >
          <Table sx={{}} >
            <StyledTableHead sx={{backgroundColor: "#b0cff7"}} >
              <TableHead/>
              <TableRow>
                  <TableCell align="center" ></TableCell>
                  { requiredHeaders?.map((item: string, index:number)=>(<TableCell align="center" key={index}>{item}</TableCell>)) }
              </TableRow>
            </StyledTableHead>
            <TableBody> 
              {updatedData?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item:{ [key: string]: string|number }, rowIndex:number)=>{
                return (
                  <StyledTableRow key={rowIndex}>
                  <StyledTableCell align="center">{rowIndex+1}</StyledTableCell>
                  {  
                    requiredHeaders?.map((check: string, index:number)=>(
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
    </Box>
  )
}

export default AnalysisTable