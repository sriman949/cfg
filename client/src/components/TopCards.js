import React from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/People';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
const useStyles = makeStyles((theme) => ({
    
    avatar: {
        backgroundColor: '#610814',
      },
      '&p' : {
      color : '#610814',
      }
  }));


function TopCards({name, sub, up, per , role}) {
    const classes = useStyles();

    return (
        <>
        <Grid container  >
        <Grid item xs={6} style={{textAlign : "left"}}>
          <a style={{ fontSize : "22px"}}>{name}</a>
          <br></br>
          <a style={{color: 'grey' , fontSize : "18px"}}>{sub}</a>
        </Grid>
        <Grid item xs={4} >
        </Grid>
        <Grid item  >
        <Avatar aria-label="icon" className={classes.avatar}>
            
            {role === "1" && <PeopleIcon />}
            {role === "2" && <ScheduleIcon />}
            {role === "3" && <LoyaltyIcon />}
          </Avatar>
        </Grid>
        
      </Grid> 
      <Grid container  style={{marginTop : "30px"}}>
      <span style={{color : 'green'}}>
          <ArrowUpwardIcon />
          </span> 
      <span style={{color : 'green'}}> {per}</span>
      <span style={{paddingLeft : "5px" , color: 'grey' , fontSize : "14px"}}> Since last month</span> 
      </Grid> 
        </>
    )
}

export default TopCards
