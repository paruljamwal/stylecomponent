import styled from 'styled-components';

//styled is a default export;
//it give all the properties of button
 const Button=styled.button
 `
 background-color: none;
 border:${(prop)=>(
    prop.variant==="default" ? "1px solid grey" : prop.variant ==="dashed" ? "1px dashed grey" : "none"
 )};
 border-radius: 4px;
 padding:15px;
 padding-top: 7px;
 background-color:${(prop)=>(
    prop.variant==="primary" ? "#0086ff" : "white"
 )};
 color:${(prop)=>(
    prop.variant==="primary" ? "white" : prop.variant ==="link" ? "blue" :  "black"
    )};
 font-weight: bolder;
 font-size: larger;
 margin: 4px;
 cursor: pointer;

 &:hover{
   box-shadow:${(prop)=>(
      (prop.variant==="link" || prop.variant==="text" )? "none" : "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
   )
 }
 `
 export {Button}