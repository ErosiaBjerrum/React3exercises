import { useState } from 'react'
import { persons } from "./file2";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
  
  return (
  <>
  <h1> {props.person.firstName} </h1>
  <h1> {props.person.lastName} </h1>
  <h1> {props.person.email} </h1>
  </>
  )
  
}


export default function MultiWelcome() {
  return (
    <div>
      {/* <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />

      <WelcomePerson person={persons[0]}  />
      <WelcomePerson person={persons[1]}  />
      <WelcomePerson person={persons[2]}  />

      {persons.map((currentPerson) =>
      <WelcomePerson
      key={currentPerson.email}
      person={currentPerson} />
      )} */}

    </div>


  );
}