import React, { useState, useEffect } from "react";
import { Form, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
function CreateProj ({history}) {
  
  
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory]=useState("");
  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
        title: title,
        body: body,
        category:category
    }
  
    await axios.post(
        "http://localhost:5000/api/Ai",data )
 
        navigate('/Artificial_Intelligence')
 }
 


   
  return (
    
    <div className=" grid place-content-center flex-1">
    <div className="bg-white w-96 rounded-md p-4">
      <h1 className="text-center text-xl font-semibold pb-10 font-tt">
      Create New PROJECT
      </h1>
      <div className="loginContainer">
        
      
        <Form onSubmit={submitHandler}>
        
          <Form.Group >
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              placeholder="Project title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="textarea"
              value={body}
              placeholder="add description"
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
 
          {/* <Form.Group >
            <Form.Label>cath</Form.Label>
            <Form.Control
              type="textarea"
              value={category}
              placeholder="add description"
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group> */}
         
<div className="flex flex-col space-y-3">
          <label for="status" className="space-y-5" >
             Category
          </label>

    < select name="Category" onChange={(e) => setCategory(e.target.value)} className=" space-y-3 rounded-md border focus:outline-none focus:ring p-2 duration-200 focus:ring-dark-1 focus:ring-opacity-30">
      <option value={category}>Artificial Inteligence</option>
      <option value={category}>Cyber Security</option>
      <option value={category}>Web Development</option>
      <option value={category}>Devops</option>
   </select>
</div>  
<div class="flex space-x-2 justify-center">
  <button
    type="submit"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class=" space-y-9 inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-l leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  >Add Project</button>
</div>

        </Form>
        
      </div>
    </div>
    </div>
   
  );
}

export default CreateProj;