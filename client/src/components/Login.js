import React, { useState, useEffect } from "react";

import axios from "axios";
import { useToasts } from "react-toast-notifications";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import validator from 'validator';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { addToast } = useToasts();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    try {
      const resp = await axios.post(
        "/user/login",
        user
      );
      console.log(resp.data.token);
      localStorage.setItem("token", resp.data.token);
      localStorage.setItem("userid", resp.data.id);
      if (resp.data.success === true) {
        // setLoading(false);
        localStorage.setItem("token", resp.data.token);
        addToast("Logged In", { appearance: "success", autoDismiss: true });
        history.push("/");
      }
    } catch (error) {
      //setLoading(false);
      console.log(error.response.data);
      addToast(error.response.data, {
        appearance: "error",
        autoDismiss: true,
      });
      console.log(error.message);
    }
  };
const marginB = {
  margin : 5,
}
  const paperStyle = {
    padding: 20,
    
    width: 280,
    margin: "20px auto",
    
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "20px 0" };

  const centerDiv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
  }

  return (
    <div style={centerDiv}>
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <Grid >
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Welcome Back!</h2>
          </Grid>
          <TextField
          required
          style={marginB}
          placeholder="Enter email"
          
          fullWidth
          required
        label="Email"
        value={email}
        error ={validator.isEmail(email) || email.length == 0 ? false : true }
        
        helperText={validator.isEmail(email)|| email.length == 0 ? "" : "Enter a valid email" }
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        />
        <TextField
          required
          style={marginB}
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          label="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          error ={password.length >= 6 || password.length == 0 ? false : true }
        
          helperText={password.length >= 6  || password.length == 0  ? "" : "has to be 6 characters" }
        />
          
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={handleSubmit}
          >
            Log in
          </Button>
         
          <Typography>
            Dont have an account? <Link href="/register">Register</Link>
          </Typography>
        </Paper>
      </Grid>
      
    </div>
  );
}

export default Login;