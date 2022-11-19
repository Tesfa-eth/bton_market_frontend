import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function BasicCard(props) {
    const {name, img_url, condition, negotiable, price, seller, sold} = props
  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <img id='onSaleItemImage' src={img_url}/>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        
        <Typography variant="body2">
          {price}$
          
          {negotiable ? '    Negotiable': '    Non-negotiable'}
        </Typography>
        {sold ? 
        (<Typography sx={{ mb: .5 }} color="text.secondary">
        Sold
        </Typography>) :
        (<Typography sx={{ mb: .5 }} color="text.secondary">
        On sale
      </Typography>)
        }
      </CardContent>
      <CardActions>
        <Button size="small">{seller}</Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;