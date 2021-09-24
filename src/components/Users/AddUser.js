import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
// Extension need to be added for non js file
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // Array destructuring
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
        return; 
    }
    if (+enteredAge < 1){
        return; 
    }
    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };
  // Tringered by the input written in the form
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      {/*Don't forget, we don't want to execute the fonction here, we only want to execute it*/}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        {/* We can't use " for " with JSX, we need to use htmlFor instead */}
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
