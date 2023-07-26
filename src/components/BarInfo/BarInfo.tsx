import { Stack, Typography } from "@mui/material"
import { BarInfoProp } from "./BarInfo.types"

const  BarInfo = ({header,content}: BarInfoProp)=> {
  return (
    <Stack direction="column">
          <Typography variant="h6" fontSize="1rem" fontWeight="700">{header}</Typography>
          <Typography component="p" fontSize="0.75rem">{content}</Typography>
    </Stack>
  )
}

export default BarInfo