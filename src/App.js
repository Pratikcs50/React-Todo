import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


//ES6 convention of declaring function
const App=()=> {  
  
  const[todo, setTodo]=useState("");
  const[todos, setTodos]=useState([]);//this state is going to be an array so an empty array has been passed
  const[editId, setEditId]=useState(0);
  
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(editId){
      const editTodo=todos.find((i)=>i.id===editId);
      const updatedTodos= todos.map((t)=>t.id===(editTodo.id)?
      (t={id:t.id, todo}):{id: t.id, todo:t.todo});
      setTodos(updatedTodos);
      setEditId(0)
      setTodo("")
      return;
    }

    if(e!==''){
      setTodos([{id:`${todo}-${Date.now()}`,todo},...todos])//...todos is spread operator
      setTodo("");
    }

  };
  const handleDelete=(id)=>{
    const delTodo=todos.filter((to)=>to.id!==id);
    setTodos([...delTodo]);
  };
  const handleEdit=(id)=>{
    const editTodo=(todos.find((i)=>i.id===id));
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (

    <div className="App">
      <div className="container">
          <h2>TODO APP</h2>
          <form className="todoForm" onSubmit={handleSubmit}>
            <input type="Text" className="todoText" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button className="add" type="submit">{editId?"Edit":"ADD"}</button>
          </form>
          <ul className="todoUl" >
            {
              todos.map((t)=>(
                <li className="todoLi">
                <span id="set" key={t.id}>{t.todo}</span>  
                 <button className="bu" onClick={()=>handleEdit(t.id)}>Edit</button>
                 <button className="bu" onClick={()=>handleDelete(t.id)}>Del</button> 
            </li>
              ))
            }
            
          </ul>
      </div>
    </div>
    
    






    
  );
}

export default App;
