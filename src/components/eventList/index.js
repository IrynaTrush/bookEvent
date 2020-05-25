import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getEventsData } from '../../redux/actions/home.action';
import { selectEvetns } from '../../redux/selectors/home.selector';

const useStyles = makeStyles({
    root: {
      width: '20%',
      textAlign: 'center',
      margin: '20px 30px'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const EventList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const eventsServer = useSelector(selectEvetns);

    const card = eventsServer.map(item => {
      return(
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {item.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {item.description}
                </Typography>
                <Typography variant="body2" component="p">
                    {item.eventDate}
                </Typography>
                <Typography variant="body2" component="p">
                    {`${item.time}:00`}
                </Typography>
            </CardContent>
        </Card>
      )
    })

    useEffect(() => {
        dispatch(getEventsData());
    }, [dispatch]);
    
    return (
        <div style={{
            padding: '50px 0',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }}
        >
            {card}
        </div>
    )
}

export default EventList;

