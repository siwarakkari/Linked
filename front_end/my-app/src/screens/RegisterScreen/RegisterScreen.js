import React, { useState, useEffect }  from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link  } from "react-router-dom";
// import Loading from "../../components/Loading";
import validators from "../../components/validators";
// import { register } from "../../actions/userActions";
import MainScreen from "../../components/MainScreen";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import "./RegisterScreen.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterScreen() {
    const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState("");
  const navigate = useNavigate();


  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(email);

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    }
 
     else {
         setMessage(null)
        try {const config ={
              headers:{
                  "Content-type":"application/json",},
                           };
          setLoading(true);
          const { data }= await axios.post(
           "http://localhost:5000/api/users/register",
      {
        name,
        email,
        password,
      },  config );
     
         setLoading(false) ;
         localStorage.setItem("userInfo",JSON.stringify(data));
         navigate('/profile');

     
    } 
    catch (error) {
    
      setLoading(false) ; 
    setError(error.response.data.message);
      
    }}
  };

  return (
    <div className=" grid place-content-center flex-1">
    <div className="bg-white w-96 rounded-md p-4">
      <h1 className="text-center text-xl font-semibold pb-10 font-tt">
        REGISTER
      </h1>
      {error && <ErrorMessage>{error}</ErrorMessage>}
        {message && <ErrorMessage >{message}</ErrorMessage>}
       {loading && <Loading />}

      <Form className="grid gap-4" onSubmit={submitHandler}>
        <input
          name="name"
          label="Name"
          value={name}
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
          // validations={[validators.required]}
        />
        <input
          name="email"
          label="Email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          // validations={[validators.required]}
          type="email"
        />
        <input
          name="password"
          label="Password"
          value={password}
          placeholder="Password"
           onChange={(e) => setPassword(e.target.value)}
          // validations={[validators.required]}
          type="password"
        />
        <input
          name="confirm_password"
          label="Confirm password"
          value={confirmPassword}
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          // validations={[validators.required]}
          type="password"
        />
       <div className="flex flex-col space-y-1">
          <label for="status" className="text-xl font-semibold" >
              status
          </label>

    < select name="status" id="status" className="rounded-md border focus:outline-none focus:ring p-2 duration-200 focus:ring-dark-1 focus:ring-opacity-30">
      <option value="volvo">student</option>
      <option value="saab">free Lancer</option>
      <option value="mercedes">programmer</option>
      <option value="audi">other</option>
   </select>
</div>

 <input
          name="bio"
          label="pic"
          value={pic}
          placeholder="Write a short bio"
          onChange={(e) => setPic(e.target.value)}
          // validations={[validators.required]}
          type="textarea"
        />
   
    <div class="flex space-x-2 justify-center">
  <button
    type="submit"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class="inline-block px-6 py-2.5 bg-blue-900 text-white font-medium text-l leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  >Sign up</button>

   </div>
   
    </Form>
    <Row className="py-3">
          <Col>
           Have alredy an account ? <Link to="/auth/login" className="text-blue-900">Login Here</Link>
          </Col>
        </Row>
    </div>
</div>
) 
}

export default RegisterScreen;

//   const dispatch = useDispatch();

//   const userRegister = useSelector((state) => state.userRegister);
//   const { loading, error, userInfo } = userRegister;

//   const postDetails = (pics) => {
//     if (
//       pics ===
//       "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
//     ) {
//       return setPicMessage("Please Select an Image");
//     }
//     setPicMessage(null);
//     if (pics.type === "image/jpeg" || pics.type === "image/png") {
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", "notezipper");
//       data.append("cloud_name", "piyushproj");
//       fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
//         method: "post",
//         body: data,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setPic(data.url.toString());
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       return setPicMessage("Please Select an Image");
//     }
//   };

//   useEffect(() => {
//     if (userInfo) {
//       history.push("/");
//     }
//   }, [history, userInfo]);

  //   <MainScreen title="REGISTER">
      
  //     <div className="loginContainer">
  //       {/* {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
  //       {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
  //       {loading && <Loading />} */}
  //       <Form onSubmit={submitHandler}>
  //         <Form.Group controlId="name">
  //           <Form.Label>Name</Form.Label>
  //           <Form.Control
  //             type="name"
  //           //   value={name}
  //             placeholder="Enter name"
  //           //   onChange={(e) => setName(e.target.value)}
  //           />
  //         </Form.Group>

  //         <Form.Group controlId="formBasicEmail">
  //           <Form.Label>Email address</Form.Label>
  //           <Form.Control
  //             type="email"
  //           //   value={email}
  //             placeholder="Enter email"
  //           //   onChange={(e) => setEmail(e.target.value)}
  //           />
  //         </Form.Group>

  //         <Form.Group controlId="formBasicPassword">
  //           <Form.Label>Password</Form.Label>
  //           <Form.Control
  //             type="password"
  //           //   value={password}
  //             placeholder="Password"
  //           //   onChange={(e) => setPassword(e.target.value)}
  //           />
  //         </Form.Group>

  //         <Form.Group controlId="confirmPassword">
  //           <Form.Label>Confirm Password</Form.Label>
  //           <Form.Control
  //             type="password"
  //           //   value={confirmpassword}
  //             placeholder="Confirm Password"
  //           //   onChange={(e) => setConfirmPassword(e.target.value)}
  //           />
  //         </Form.Group>

  //         {/* {picMessage && (
  //           <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
  //         )} */}
  //         <Form.Group controlId="pic">
  //           <Form.Label>Profile Picture</Form.Label>
  //           <Form.File
  //           //   onChange={(e) => postDetails(e.target.files[0])}
  //             id="custom-file"
  //             type="image/png"
  //             label="Upload Profile Picture"
  //             custom
  //           />
  //         </Form.Group>

  //         <Button variant="primary" type="submit">
  //           Register
  //         </Button>
  //       </Form>
  //       <Row className="py-3">
  //         <Col>
  //           Have an Account ? <Link to="/login">Login</Link>
  //         </Col>
  //       </Row>
  //     </div>
  //   </MainScreen>
  // );
