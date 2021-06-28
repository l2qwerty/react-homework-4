import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function ChangeCurrency({ handleChange, currency }) {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='currency'>Change</InputLabel>
        <Select native value={currency} onChange={handleChange}>
          <option value='uah'>UAH</option>
          <option value='usd'>USD</option>
          <option value='eur'>EUR</option>
          <option value='rub'>RUB</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default ChangeCurrency;
