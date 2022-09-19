import React, { useState, useEffect } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import "./LoginScreen.css";
import axios from 'axios';
function LoginScreen({history}) {
  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]=useState(false);
  const [loading, setLoding]=useState(false);
  const navigate = useNavigate();

  // const dispatch = useDispatch();

  // const userLogin = useSelector((state) => state.userLogin);
  // const { loading, error, userInfo } = userLogin;

  

  const submitHandler = async (e) => {
    e.preventDefault();
//     // dispatch(login(email, password));
   try {
    const config ={
      headers:{
        "Content-type":"application/json",
      },
    };
    setLoding(true);
    const { data }= await axios.post(
      "http://localhost:5000/api/users/login",{mode:'no-cors'},
      {
        
        email,
        password,
      },
        config
      );
    
    console.log(data);
    setLoding(false) ;
    localStorage.setItem("userInfo",JSON.stringify(data));
   const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate(`/profile`);
      //  history.push('/profile');
    }
   } catch (error) {
    
    setLoding(false) ; 
setError(error.response.data.message);
   }
  };
  useEffect(() => {
    
  }, [history]);

  return (
    
    <div className=" grid place-content-center flex-1">
    <div className="bg-white w-96 rounded-md p-4">
      <h1 className="text-center text-xl font-semibold pb-10 font-tt">
       Login
      </h1>
      <div className="loginContainer">
        {loading && <Loading />}
       {error && <ErrorMessage>{error}</ErrorMessage>}

        <Form onSubmit={submitHandler}>
        
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div class="flex space-x-2 justify-center">
  <button
    type="submit"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class="inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-l leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  >Login</button>
</div>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/auth/register" className="text-blue-900">Register Here</Link>
          </Col>
        </Row>
      </div>
    </div>
    </div>
   
  );
}

export default LoginScreen;