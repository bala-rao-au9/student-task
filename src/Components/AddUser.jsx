import { FormGroup, FormControl, Input, InputLabel, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState} from "react";
import { addUser } from '../Service/api';
import { useHistory } from "react-router-dom"


const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = {
    name: '',
    dob: '',
    age: '',
    gender: ''
    
}

const AddUser = () => {
    const [ user, setUser] = useState(initialValues);
    const { name, dob, age, gender } = user;
    const classes = useStyle();
    const history = useHistory();

    const onValueChange = (e) => {
        
        setUser({...user, [e.target.name]: e.target.value})
        
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('./all')
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Dob</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='dob' value={dob} />
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='age' value={age} />
            </FormControl>
            <FormControl>
                <InputLabel>Gender</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='gender' value={gender} />
            </FormControl>
            
            <Button variant="contained" onClick={() => addUserDetails()} color="secondary">Add User</Button>
        </FormGroup>
    )
}

export default AddUser;