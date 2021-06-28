import React, { useState, useEffect } from 'react';
import ChangeCurrency from './ChangeCurrency';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 30,
  },
  media: {
    height: 140,
  },
});

function ProductCard({ image, title, description, price }) {
  const classes = useStyles();
  const [coast, setCost] = useState(price);
  const [currency, setCurrency] = useState('uah');
  const toUsd = (currency) => currency * 0.036;
  const toEur = (currency) => currency * 0.031;
  const toRub = (currency) => currency * 2.27;

  const convert = (currency, convert) => {
    const output = Math.round(convert(currency));
    return output;
  };

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    setCost(
      currency === 'uah'
        ? price
        : currency === 'usd'
        ? convert(price, toUsd)
        : currency === 'eur'
        ? convert(price, toEur)
        : convert(price, toRub)
    );
  }, [currency, price]);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant='h4' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
          <Typography gutterBottom variant='h5' component='h2'>
            price: {coast} {currency}
            <ChangeCurrency handleChange={handleChange} currency={currency} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
