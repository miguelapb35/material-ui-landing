import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from './ImageCard'
import places from '../static/places'
import useWindowPosition from '../hook/useWindowPosition';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root2: {
    flexGrow: 1
  }
}));
export default function PlaceToVisit() {
  const classes = useStyles();
  const  checked =  useWindowPosition('header');
  return (
    <div className={classes.root} id='place-to-visit'>
      <div className={classes.root2}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <ImageCard place={places[0]} checked={checked} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImageCard place={places[1]} checked={checked} /> 
          </Grid> 
        </Grid>
      </div>
    </div>
  )
}

