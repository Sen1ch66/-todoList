import { Button, TextField, Checkbox } from "@mui/material"
import Paper from "@mui/material/Paper"
import { useRef } from "react"

function TODO(props) {
  const checkbks = useRef(null)
  console.log(checkbks)
  const { id, text } = props.todo
  function deleteToDo(e){
    const checkbksValue = checkbks.current.queryselector('input')?.checked
    const oldlist = [...props.list]
    if (checkbksValue){
      const newlist = oldlist.filter(el => el.id != e.target.id)
      props.setList(newlist)
    } else {
      alert('поставте галочку')
    }
  }
  return (
    <Paper
      sx={{ padding: "20px", display: "flex", alignItems: "center", marginBottom:"10px", fontFamily:'Test' }}
      elevation={12}
      id={id}
    >
      <Checkbox ref={checkbks}/>
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

