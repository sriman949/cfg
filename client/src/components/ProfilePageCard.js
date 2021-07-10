import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { useToasts } from "react-toast-notifications";

import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#002366',
  },
}));

export default function ProfilePageCard({user , role}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { addToast } = useToasts();


  const verifyPost = async() => {
      console.log("hey");
      try {
          const res = await axios.post('/report/verifyreport' , {id : user._id});
         
          if(res.data.success){
            addToast("Data Verified", { appearance: "success", autoDismiss: true });
            setTimeout(() => {
                window.location.reload();
            },1800);
          }
      } catch (error) {
        addToast("Couldnt Verify", { appearance: "error", autoDismiss: true });
          console.log(error);
      }
  }
  
  return (
    <Card >
      <CardHeader
        avatar={
          
             <img src="https://www.seekpng.com/png/detail/428-4287240_no-avatar-user-circle-icon-png.png" width="40"/>
          
        }
        action={
          <IconButton aria-label="settings">
              {role === 1 ? <a class="btn btn-success " onClick={verifyPost}>
          Verify
        </a>: <MoreVertIcon />}
            
          </IconButton>
        }
        title="Project"
        subheader={user.program_name}
      />
      
      <CardContent>
      <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Description :</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{user.description}</div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Event Date :</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{user.participation_date}</div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Working Hours :</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">{user.working_hours}</div>
                  </div>
                   
      </CardContent>
     
      
    </Card>
  );
}
