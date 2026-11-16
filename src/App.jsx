import { useState } from 'react'
import './App.css'

import upper, {text1, text2, text3} from "./file1";
import person, { males, females } from "./file2";
import MultiWelcome from "./file3";
import JokeComponent from "./JokeComponent";

function App() {
  <p>{upper("please uppercase me")}</p>
  const {firstName, email} = person;
  const menAndWomen = [...males, ...females];
  const personV2 = {
  ...person, phone: 123456, friends: menAndWomen
  };
console.log(personV2);

  return (
    <>
    <h2>Ex1</h2>
    <p>{firstName}, {email}</p>

    
<h2>Ex2</h2>
<MultiWelcome/>

<h2>Ex3</h2>
<JokeComponent/>

    </>
  )
  
}

export default App
