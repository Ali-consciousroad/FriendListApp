import React from 'react';
import Card from '../UI/Card';
// Extension need to be added for non js file
import classes from './AddUser.module.css';

const AddUser = props => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={classes.input}>
            {/*Don't forget, we don't want to execute the fonction here, we only want to execute it*/}
            <form onSubmit={addUserHandler}>
                <label class="">Username</label>
                <input id="username" type="text" />
                {/* We can't use " for " with JSX, we need to use htmlFor instead */}
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"></input>
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser; 