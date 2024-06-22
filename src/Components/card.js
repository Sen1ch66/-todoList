
import { Button, TextField, Checkbox } from "@mui/material"
import Paper from "@mui/material/Paper"

function Card(props) {
  const { id, text } = props.list;
  console.log(Object(props.list))
  return (
    <Paper
      sx={{ padding: "20px", display: "flex", alignItems: "center", marginBottom:"10px", fontFamily:'Test' }}
      elevation={12}
      id={id}
    >
      <Checkbox />
      <TextField
        sx={{ margin: "20px" }}
        id="outlined-basic"
        label="Им'я справи"
        variant="outlined"
        value={text}
      />
      <Button variant="contained">Видалити</Button>
    </Paper>
  )
}

export default Card

