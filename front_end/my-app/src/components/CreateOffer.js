import React, { useState, useEffect } from "react";
import { Form, } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
function CreateOffer () {
  
  
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation]=useState("");
  const [date, setDate] = useState("");
  const [tasks, setTasks] = useState("");
  const [requirements, setRequirements] = useState("");
  const [applied, setApplied] = useState("");
  const [type, setType] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");

  

  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
        title: title,
  company:company,
  location:location,
  date:date,
  tasks:tasks,
  requirements:requirements,
  applied:applied,
  type:type,
     aboutCompany:aboutCompany
    }
    
    await axios.post(
        "http://localhost:5000/api/offers",data )
 
        navigate('/offers');
 
   
    }


   
  return (
    
    <div className=" grid place-content-center flex-1">
    <div className="bg-white w-96 rounded-md p-4">
      <h1 className="text-center text-xl font-semibold pb-10 font-tt">
      Create New OFFER
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
            <Form.Label>Company</Form.Label>
            <Form.Control
              type="text"
              value={company}
              placeholder="Company"
              onChange={(e) => setCompany(e.target.value)}
            />
          </Form.Group>
          <Form.Group >
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={location}
              placeholder="Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Form.Group >
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              value={date}
              placeholder=""
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group >
            <Form.Label>tasks</Form.Label>
            <Form.Control
              type="textarea"
              value={tasks}
              placeholder="tasks"
              onChange={(e) => setTasks(e.target.value)}
            />
          </Form.Group>
          <Form.Group >
            <Form.Label>Type</Form.Label>
            <Form.Control
              type="textarea"
              value={type}
              placeholder="type"
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Group>
         
          
          <Form.Group >
            <Form.Label>requirements</Form.Label>
            <Form.Control
              type="text"
              value={requirements}
              placeholder="requirements"
              onChange={(e) => setRequirements(e.target.value)}
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>applied</Form.Label>
            <Form.Control
              type="number"
              value={applied}
              placeholder="applied"
              onChange={(e) => setApplied(e.target.value)}
            />
          </Form.Group>
 
          <Form.Group >
            <Form.Label>About Company</Form.Label>
            <Form.Control
              type="textarea"
              value={aboutCompany}
              placeholder="add description"
              onChange={(e) => setAboutCompany(e.target.value)}
            />
          </Form.Group>
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

export default CreateOffer;