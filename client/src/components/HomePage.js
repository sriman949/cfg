import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./FeedStyle.css";
import Navbar from "./Navbar";
import axios from "axios";
import { TextField } from "@material-ui/core";
import PostsCard from "./PostsCard";
import { useToasts } from "react-toast-notifications";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TopCards from "./TopCards";
import DoughnutChart from "./DoughnutChart";
import GroupedBar from "./GroupedBarChart";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  griditem: {
    margin: "15px 0",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "rgba(0,0,0 , 0.7) 0px 0 10px",
  },
}));

function HomePage() {
  const classes = useStyles();
  const { addToast } = useToasts();

  const history = useHistory();
  const checkAuth = () => {
    console.log("check");
    if (!localStorage.getItem("token")) {
      history.push("/login");
    }
  };

  const [announcements, setAnnouncements] = useState([]);

  const [posttitle, setPostTitle] = useState("");
  const [postdesc, setdecs] = useState("");

  const [posts, setAllPosts] = useState([]);
  const getAllAnnouncements = async () => {
    try {
      const res = await axios.get("/announcement");
      setAnnouncements(res.data.datasave);
    } catch (error) {}
  };

  const getAllPosts = async () => {
    try {
      const res = await axios.get("/post");
      setAllPosts(res.data.datasave);
    } catch (error) {}
  };

  const putPosts = async () => {
    const id = localStorage.getItem("userid");
    try {
      const res = await axios.post("/post", {
        volunter_id: id,
        title: posttitle,
        description: postdesc,
      });
      if (res.data.success === true) {
        addToast("Post Added!", { appearance: "success", autoDismiss: true });
        setPostTitle("");
        setdecs("");
      }
      getAllPosts();
    } catch (error) {
      addToast("Error", { appearance: "error", autoDismiss: true });
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuth();
    getAllAnnouncements();
    getAllPosts();
  }, []);
  return (
    <div>
      <header>
        <Navbar />
        <Grid
          container
          spacing={2}
          style={{ justifyContent: "center", marginTop: "60px" }}
        >
          <Grid item xs={3} className={classes.griditem}>
            <TopCards
              name="Volunteers"
              sub="170 (Weekly)"
              up={true}
              per="6.73"
              role="1"
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} className={classes.griditem}>
            <GroupedBar />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} className={classes.griditem}>
            <TopCards
              name="Hours Spent"
              sub="65 (Weekly)"
              up={true}
              per="9.45"
              role="2"
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ justifyContent: "center", marginTop: "20px" }}
        >
          <Grid item xs={3} className={classes.griditem}>
            <TopCards
              name="Lives Impacted"
              sub="1500+"
              up={true}
              per="6.65"
              role="3"
            />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} className={classes.griditem}>
            <DoughnutChart />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={3} className={classes.griditem}>
            <TopCards
              name="Star Performer"
              sub="Shashi"
              up={true}
              per="Blood Donor"
              role="4"
            />
          </Grid>
        </Grid>
      </header>

      <div class="feed">
        <div class="container-fluid">
          <div class="row mb-5 pt-5">
            <div class="col-lg-3 col-md-4 col-8 mx-auto">
              <div class="list-group m-4">
                <h2>Announcements</h2>
                {announcements.map((a, ind) => {
                  const dateString = a.created_date;
                  const formatDate = (dateString) => {
                    const options = {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    };
                    return new Date(dateString).toLocaleDateString(
                      undefined,
                      options
                    );
                  };
                  return (
                    <a
                      href="#"
                      class="list-group-item list-group-item-action flex-column align-items-start"
                    >
                      <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">{a.title}</h5>
                        <small> {formatDate(dateString)}</small>
                      </div>
                      <p class="mb-1">{a.description}</p>
                    </a>
                  );
                })}
              </div>
            </div>
            <div class="col-lg-7 col-md-6 col-12 mx-auto">
              <div class="card m-5 mx-auto">
                <div class="card-body">
                  <h5 class="card-title">CREATE A POST</h5>
                  <TextField
                    required
                    //style={marginB}
                    placeholder="Enter Title"
                    fullWidth
                    required
                    label="Title"
                    value={posttitle}
                    onChange={(e) => {
                      setPostTitle(e.target.value);
                    }}
                  />
                  <TextField
                    required
                    //style={marginB}
                    placeholder="Enter Details"
                    fullWidth
                    required
                    label="Description"
                    value={postdesc}
                    onChange={(e) => {
                      setdecs(e.target.value);
                    }}
                  />

                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ margin: "20px 0" }}
                    onClick={putPosts}
                  >
                    Post{" "}
                  </button>
                </div>
              </div>
              <h1>Posts</h1>
              {posts
                .filter((u) => {
                  if (u.verified === true) return u;
                })
                .reverse()
                .map((p, ind) => {
                  const dateString = p.created_date;
                  const formatDate = (dateString) => {
                    const options = {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    };
                    return new Date(dateString).toLocaleDateString(
                      undefined,
                      options
                    );
                  };
                  return <PostsCard dets={p} date={formatDate(dateString)} />;
                })}
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="bg-dark text-center text-white py-2">
          <p class="text-uppercase font-weight-bold">Copyright © 2021 Team3</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
