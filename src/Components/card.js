import { Button, TextField} from "@mui/material"
import Paper from "@mui/material/Paper"

function TODO(props) {
  const oldlist = [...props.list]
  const { id, text } = props.todo
  function deleteToDo(e) {
    const newlist = oldlist.filter(el => el.id != e.target.id)
    props.setList(newlist)
  }
  return (
    <Paper
      sx={{ padding: "20px", display: "flex", alignItems: "center", marginBottom: "10px", fontFamily: 'Test' }}
      elevation={12}
      id={id}
    >
      <TextField
        sx={{ margin: "20px" }}
        id="outlined-basic"
        label="Ім'я справи"
        variant="outlined"
        value={text}
      />
      <Button color='error' variant="contained" id={id} onClick={deleteToDo}>Видалити</Button>
    </Paper>
  )
}

export default TODO

