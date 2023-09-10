import './App.css';
import React , {useState , useEffect} from 'react';

import axios from 'axios'
import TodoView from './components/TodoListView';


function App() {
  
  
  const [todoList, setTodoList] = useState([{}])
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')

  // Read all todos
  useEffect(()=> {
    axios.get('http://localhost:8000/api/todo').then( res => {
        setTodoList(res.data)
      }
    )
  })
  // Post a todo
  const addTodoHandler = () => {
      axios.post('http://localhost:8000/api/todo/' , {"title": title , 'description': desc}).then(res =>{
          console.log(res)
        }
      )
  }





  return (      
     
      <div
        className='App list-group-item
          justify-content-center align-items-center
          mx-auto'
        style={{"width":"400px" ,
          "backgroundColor":"white" ,
          "marginTop":"15px"}}
      >
        <h1
          className='card text-white bg-primary mb-1'
          style={{"maxwidth": "20rem"}}
        >
        Task Manager
        </h1> 
        <h6
          className='card text-white bg-primary mb-3'
        >
        FASTAPI - React - MangoDB
        </h6> 
        <div className='card-body'>
          <h5
            className='card text-white bg-dark mb-3'
          >
            Add Your Task
          </h5> 
          <span className="card-text">
            <input className='mb-2 form-control titleIn'
              placeholder='Title'
              onChange={(e) => setTitle(e.target.value)} />
            <input className='mb-2 form-control desIn' 
              placeholder='Description'
              onChange={(e) => setDesc(e.target.value)}/>
            <button
              className='btn btn-outline-primary mx-2 mb-3'
              style={{"borderRadius":"50px" ,
                "fontWeight":"bold" }}
              onClick={addTodoHandler}>
              Add Task
            </button>
          </span>

          <h5
            className='card text-white bg-dark mb-3'
          >
             Your Tasks
          </h5> 
          <div>
            {<TodoView todoList={todoList}/>}
          </div>
        </div>



      <h6
        className='card text-white bg-warning py-1 mb-0'
      >
        Copyright 2021, All rights reserved &copy;
      </h6> 
      </div>
  );
}

export default App;
