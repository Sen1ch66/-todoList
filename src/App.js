import "./styles/App.css"
import { Button, TextField } from "@mui/material"
import Paper from "@mui/material/Paper"
import Card from "./Components/card.js"
import { useState, useRef } from "react"
function App(value) {
  let [list, setList] = useState([])
  const inputContainer = useRef(null)
  try{
    value = inputContainer.current.querySelector('input')?.value;
  }
  catch(e){
    console.log(e)
  }
  function newTask() {
    const newList = [...list]
    newList.push({
      id: list.length + 1,
      text: value,
    })
    setList(newList)
    console.log(newList)
  }
  return (
    <section className="App">
      <h1>ToDo List</h1>
      <Paper
        sx={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          boxShadow: '2px 2px 10px green'
        }}
        elevation={8}
      >
        <TextField id="filled-basic" label="Нова справа" variant="filled" ref={inputContainer}/>
        <Button variant="outlined" onClick={newTask}>Додати</Button>
      </Paper>
      {list.map(el => {return <Card list={el} />})}
    </section>
  )
}

export default App