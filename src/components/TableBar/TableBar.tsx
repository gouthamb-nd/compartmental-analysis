import { Stack,Box, Button } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import BarInfo from "../BarInfo/BarInfo";

const TableBar = ()=> {
  return (
    <Stack direction="row" alignItems="center" width="100%" height="3rem" justifyContent="space-between" marginBottom="0.5rem">
      <Stack direction="row" gap="3rem" color="#0e0540" >
        <BarInfo header="Non Compartmental Analysis" content="Analysis Type"/>
        <BarInfo header="20" content="Subjects"/>
        <BarInfo header="5" content="Columns Mapped"/>
      </Stack>
      <Box>
          <Button variant="outlined"><EditIcon/> Edit Mapping </Button>
      </Box>
  </Stack>
  )
}

export default TableBar