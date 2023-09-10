import './App.css';
import React , {useState , useEffect} from 'react';

import axios from 'axios'



function App() {
  return (      
     
      <div
        className='App list-group-item
          justyfy-content-center aligin-items-center
          mx-auto'
        style={{"width":"400px" ,
          "backgroundColor":"white" ,
          "marginTop":"15px"}}
      >
        <h1
          className='card text-white bg-primary mb-1'
          styleName="max-width: 20rem;"
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
              placeholder='Title' />
            <input className='mb-2 form-control desIn' 
              placeholder='Description'/>
            <button
              className='btn btn-outline-primary mx-2 mb-2'
              style={{"borderRadius":"50px" ,
                "font-weight":"bold" }}>
              Add Task
            </button>
          </span>

          <h5
            className='card text-white bg-dark mb-3'
          >
             Your Tasks
          </h5> 
          <div>
            {}
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
