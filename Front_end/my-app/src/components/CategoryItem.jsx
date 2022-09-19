import React from 'react'
import styled from "styled-components";



const Container=styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`;
const Image =styled.img`
width:100%;
height:100%;
object-fit:cover;
`;
const Info =styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`;
const  Title=styled.h1`
color:Black;
 margin-bottom:20px;
`;
const Button=styled.button`
border:none;
padding:10px;
font-size:20px;
background-color:#FFEBCD;
color:black;
cursor:pointer;
font-weight:600;
`;

function CategoryItem({item}) {
  return (
   <Container>
    <Image src={item.img}/>
    <Info>
        <Title className ="font-medium font-black font-sans leading-tight text-5xl mt-0 mb-2 ">{item.title}</Title>
        <a href={item.href}>
        <Button >VIEW PROJECTS</Button></a>
    </Info>
     </Container>
  )
}

export default CategoryItem