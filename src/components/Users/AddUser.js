import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
// Extension need to be added for non js file
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // Array destructuring
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // Debugging
    // console.log(nameInputRef);
    // value can be found be checking the DOM. Avoid direct DOM node
    console.log(nameInputRef.current.value);
    // We use different name to avoid conflict with the state above
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    //console.log(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredUserAge);
    /* After removing the state element the input is not reset anymore.
    We'll use the DOM object direct manipulation here but this is not recommended in general.
    */
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };
  
  // Handler used to remove the modal
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        {/*Don't forget, we don't want to execute the fonction here, we only want to execute it*/}
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          {/* We can't use " for " with JSX, we need to use htmlFor instead */}
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
