import styled from 'styled-components';

//styled is a default export;
//it give all the properties of button
 const Button=styled.button
 `
 background-color: none;
 border: none;
 border-radius: 4px;
 padding:15px;
 padding-top: 7px;
 background-color:skyblue;
 color:white;
 font-weight: bolder;
 font-size: larger;
 margin: 4px;
 cursor: pointer;

 &:hover{
    box-shadow :rgba(253,76,0,0.5) 0 3px 8px
 }
 `
 export {Button}