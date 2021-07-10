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
import CircularProgress from "@material-ui/core/CircularProgress";
import validator from "validator";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SignUp() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [dob, setDob] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const { addToast } = useToasts();

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(category);
   // const cat = category === "Admin"  ? 0 : ( category === "Volunteer" ?  2 : 1 );
    const array=[];
    if(check1)array.push("Bright Spark Education Program");
    if(check2)array.push("Transformers (Livelihood)");
    if(check3)array.push("Food and Nutrition Program");
    if(check4)array.push("Gender Program ");
    if(check5)array.push("Youngistaan Animal Heroes ");
    if(check6)array.push("Blood Donor ");
    console.log(array);
    const user = {
      name: name,
      email: email,
      password: password,
      role : category,
      dob: dob,
      address: address,
      phone : phone, 
      description : desc,
      programs: array
    };
    try {
      const resp = await axios.post("/user/register", user);
      console.log(resp);
      if (resp.data.success === true) {
        setLoading(false);
        addToast("Registered Successfully", {
          appearance: "success",
          autoDismiss: true,
        });
        setTimeout(() => {
          setLoading(false);
        }, 1500);
        setTimeout(() => {
          history.push("/login");
        }, 2500);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      addToast("Couldnt submit : " + error.message, {
        appearance: "error",
        autoDismiss: true,
      });
      console.log(error.message);
    }
  };

  const marginB = {
    margin: 5,
  };
  const paperStyle = {
    padding: 20,

    width: 550,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "20px 0" };

  const centerDiv = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    minHeight: "100vh",
  };

  return (
    <div style={centerDiv}>
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <Grid>
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Register</h2>
          </Grid>
          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid item xs={6}>
              <TextField
                required
                style={marginB}
                placeholder="Enter Name"
                fullWidth
                required
                label="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
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
                error={
                  password.length >= 6 || password.length == 0 ? false : true
                }
                helperText={
                  password.length >= 6 || password.length == 0
                    ? ""
                    : "has to be 6 characters"
                }
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid item xs={6}>
              <TextField
                required
                style={marginB}
                placeholder="dd/mm/yy"
                fullWidth
                required
                label="DOB"
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                style={marginB}
                placeholder="Enter email"
                fullWidth
                required
                label="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={
                  validator.isEmail(email) || email.length == 0 ? false : true
                }
                helperText={
                  validator.isEmail(email) || email.length == 0
                    ? ""
                    : "Enter a valid email"
                }
              />
            </Grid>
          </Grid>

          <TextField
            style={marginB}
            placeholder="Short intro :)"
            fullWidth
            label="Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />

          <TextField
            style={marginB}
            placeholder="Enter address"
            fullWidth
            label="Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />

          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Admin</MenuItem>
                  <MenuItem value={2}>Volunteer</MenuItem>
                  <MenuItem value={1}>Co-Ordinator</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <TextField
                required
                style={marginB}
                placeholder="Enter phone"
                fullWidth
                required
                label="Phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                error={
                 Number.isInteger(parseInt(phone)) || phone.length === 0? false : true
                }
                helperText={
                  Number.isInteger(parseInt(phone)) || phone.length === 0
                    ? ""
                    : "Invalid Number"
                }
              />
            </Grid>
          </Grid>

          {category === 2 && <>
            <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid item>
            <Checkbox
                checked={check1}
                onChange={(e) => setCheck1(e.target.checked)}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span>Bright Spark Education Program </span>

            </Grid>
            <Grid item>
            <Checkbox
                checked={check2}
                onChange={(e) => setCheck2(e.target.checked)}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span>Transformers (Livelihood)</span>
            </Grid>
          </Grid>


          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid item>
            <Checkbox
                checked={check3}
                onChange={(e) => setCheck3(e.target.checked)}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span>Food and Nutrition Program	 </span>

            </Grid>
            <Grid item>
            <Checkbox
                checked={check4}
                onChange={(e) => setCheck4(e.target.checked)}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span>Gender Program	</span>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ justifyContent: "center" }}>
            <Grid item>
            <Checkbox
                checked={check5}
                onChange={(e) => setCheck5(e.target.checked)}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span>	Youngistaan Animal Heroes  </span>

            </Grid>
            <Grid item>
            <Checkbox
                checked={check6}
                onChange={(e) => setCheck6(e.target.checked)}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <span>	Blood Donor </span>
            </Grid>
          </Grid>
           </>}



          {!loading && (
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
              onClick={handleSubmit}
            >
              Register
            </Button>
          )}
          {loading && <CircularProgress style={btnstyle} />}

          <Typography>
            Have an account? <Link href="/login">Log In</Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

export default SignUp;