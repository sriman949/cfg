import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';



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

export default function ProfilePageCard({user}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  
  return (
    <Card >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
             Y
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user.program_name}
        subheader={user.participation_date}
      />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.description}
        </Typography>
      </CardContent>
     
      
    </Card>
  );
}
