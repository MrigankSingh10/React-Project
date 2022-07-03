import { useState } from "react";
import ListItems from "./ListItem";

export default function Todo() {
  const [todo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const handleChange = (event) => {
    setToDo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let tempList = toDoList;
    tempList.push(todo);
    setToDoList(tempList);
    setToDo("");
    console.log(toDoList);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={todo}></input>
        <button type="submit">Add</button>
      </form>
      {toDoList.map((item) => (
        <ListItems key={item} name={item}>
          List Items
        </ListItems>
      ))}
    </div>
  );
}
