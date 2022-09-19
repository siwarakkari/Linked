// import { Link, Button } from '../components/Button'
import react, { Component } from 'react'
// import { Input, Form } from '../components/Input'
import * as validators from '../components/validators'
import axios from 'axios';
import {Formiz} from '@formiz/core';
import { Button} from '../components/Button'



export class Register extends Component {
  constructor(props){
    super(props)
    this.state={
      userId:'',
     firstName:'',
     lastName:'',
      userName:'', 
      email:"",
       password:'', 
       bio:''
    }
  }
   SubmitHandler = (e) => {
    //  e.preventDefault();
    console.log(this.state)
    axios.post('http://localhost:5000/api/auth/register',this.state)
    .then( response => {
      console.log(response)
    })
    .catch(error =>{
      console.log(error)
    })
    
  }
  render() {
    const { userId, firstName,lastName, userName, email, password, bio }= this.state
 
 

  return (
    
      <div className=" grid place-content-center flex-1">
        <div className="bg-white w-96 rounded-md p-4">
          <h1 className="text-center text-xl font-semibold pb-10 font-tt">
            REGISTER
          </h1>

          <form className="grid gap-4" onSubmit={this.SubmitHandler}>
            <input
              name="firstName"
              label="First Name"
              // value={firstName}
              placeholder="First Name"
              validations={[validators.required]}
            />
            <input
              name="lastName"
              label="Last Name"
              // value={lastName}
              placeholder="Last Name"
              validations={[validators.required]}
            />
            <input
              name="username"
              label="Username"
              // value={userName}
              placeholder="Username"
              validations={[validators.required]}
            />
            <input
              name="email"
              label="Email"
              // value={email}
              placeholder="Email"
              validations={[validators.required]}
              type="email"
            />
            <input
              name="password"
              label="Password"
              value={password}
              placeholder="Password"
              validations={[validators.required]}
              type="password"
            />
           <div className="flex flex-col space-y-1">
              <label for="status" className="text-sm font-semibold" >
                  status
              </label>

        < select name="status" id="status" className="rounded-md border focus:outline-none focus:ring p-2 duration-200 focus:ring-dark-1 focus:ring-opacity-30">
          <option value="volvo">student</option>
          <option value="saab">free Lancer</option>
          <option value="mercedes">programmer</option>
          <option value="audi">other</option>
       </select>
</div>
{/* <div class="flex justify-center">
  <div class="mb-3 xl:w-96"> */}
     <input
              name="bio"
              label="bio"
              value={bio}
              placeholder="Write a short bio"
              validations={[validators.required]}
              type="textarea"
            />
          </form>
        </div>
        <div className="card">
          <div className="card-body"></div>
        </div>
        {/* <Formiz connect={form} onValidSubmit={props.onSubmit}>
      <form noValidate onSubmit={form.submit} className={props.className}>
        {props.children}
        <div className="flex justify-end"> */}
          <Button >Sign Up</Button>
        </div>
    //   </form>
    // </Formiz>
      // </div>
   
 )

 } }
 export default Register