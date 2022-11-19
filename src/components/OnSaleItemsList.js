import React from 'react'
import Card from './Card'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const OnSaleItemsList = (props) => {
    
  return (

    <div className='onSaleItems'>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={-1}>
     { props.onSaleItems.map((items, idx) => (
        <div key={items.id}>       
            
            <Grid p={2} item xs={3} md={3} lg={3}>
            <Card 
            name={items.name}
            img_url = {items.img} 
            condition={items.condition} 
            negotiable={items.negotiable} 
            price ={items.price}
            seller = {items.seller}
            sold = {items.sold}
            />
            </Grid>
        </div>
        

        
      ))
        }
      </Grid>
    </Box>
    
    </div>
  )
}

export default OnSaleItemsList