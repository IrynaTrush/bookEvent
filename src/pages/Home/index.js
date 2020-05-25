import React, {useEffect, useState, useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'; 
import { postNewEventData } from '../../redux/actions/home.action';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { getEventsData } from '../../redux/actions/home.action';
import { selectEvetns } from '../../redux/selectors/home.selector';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: "column",
    alignItems: 'center',
    padding: '100px 0'
  },
  textField: {
    width: "40%",
    marginBottom: 40
  },
  simpleSelect: {
    width: '40%',
    marginBottom: 40
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [name, setName ] = useState('');
  const [description, setDescription] = useState('');
  const formData = useRef({
    date: new Date()
  })
  const { date } = formData.current 
  const [eventDate, setEventDate] = useState(moment(formData.current.date).format('YYYY-MM-DD'));
  const [isDisabled, changeIsDisabled] = useState(true)
  const [time, setTime] = React.useState('');
  const handleChange = (event) => {
    setTime(event.target.value);
  };
  const dispatch = useDispatch();
  const history = useHistory();
  const eventsServer = useSelector(selectEvetns)

  const mappedDates = eventsServer.map((i, index)=> {
    return i.eventDate + i.time
   })
   
  useEffect(() => {
    dispatch(getEventsData());
  
    if(!mappedDates.includes(eventDate + time)) {
      changeIsDisabled(false);
    } else {
      changeIsDisabled(true);
      alert('this time is reserved, please chose another hours')
    }
  }, [eventDate, time])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      description,
      eventDate,
      time,
    }
    dispatch(postNewEventData(data, history));
  }
  return (
        <form 
          className={classes.container} 
          noValidate 
          autoComplete="off"
        >
          <TextField 
            id="standard-basic" 
            label="Event" 
            className={classes.textField}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField 
            id="standard-basic" 
            label="Description" 
            className={classes.textField}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <TextField
            id="date"
            label="Date"
            type="date"
            onChange={e => setEventDate(e.target.value.valueOf())}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <InputLabel id="demo-simple-select-label">
            Time
          </InputLabel>
          <Select
            className={classes.simpleSelect}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={time}
            onChange={handleChange}
          >
            <MenuItem value={16}>16:00</MenuItem>
            <MenuItem value={18}>18:00</MenuItem>
            <MenuItem value={20}>20:00</MenuItem>
          </Select>
          <Button variant="contained" color="primary" onClick={handleSubmit} disabled={isDisabled}>
            Book event
          </Button>
        </form>
  );
};

export default Home;
